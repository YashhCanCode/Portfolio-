import { useRef, useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

// Four verified sacrificial forced mates. Each next puzzle unlocks on solving.
const PUZZLES = [
  {
    name: "Philidor's Legacy",
    mateIn: 4,
    fen: '5r1k/6pp/8/6N1/8/1Q6/8/6K1 w - - 0 1',
    line: [
      { p: ['g5', 'f7'], r: ['h8', 'g8'] },
      { p: ['f7', 'h6'], r: ['g8', 'h8'] },
      { p: ['b3', 'g8'], r: ['f8', 'g8'] },
      { p: ['h6', 'f7'], r: null },
    ],
  },
  {
    name: 'The Diagonal Mate',
    mateIn: 2,
    fen: '6k1/5p1p/6p1/8/2B5/8/8/5QK1 w - - 0 1',
    line: [
      { p: ['f1', 'f7'], r: ['g8', 'h8'] },
      { p: ['f7', 'f8'], r: null },
    ],
  },
  {
    name: "Boden's Mate",
    mateIn: 2,
    fen: '2kr4/1p1p4/2n5/1B6/5B2/8/2Q5/6K1 w - - 0 1',
    line: [
      { p: ['c2', 'c6'], r: ['b7', 'c6'] },
      { p: ['b5', 'a6'], r: null },
    ],
  },
  {
    name: "Légal's Mate",
    mateIn: 3,
    fen: 'rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
    line: [
      { p: ['f3', 'e5'], r: ['g4', 'd1'] },
      { p: ['c4', 'f7'], r: ['e8', 'e7'] },
      { p: ['c3', 'd5'], r: null },
    ],
  },
];

const ChessPuzzle = () => {
  const game = useRef(new Chess(PUZZLES[0].fen));
  const step = useRef(0);
  const wrongT = useRef(null);
  const [idx, setIdx] = useState(0);
  const [fen, setFen] = useState(PUZZLES[0].fen);
  const [status, setStatus] = useState('idle'); // idle | progress | wrong | solved
  const [selected, setSelected] = useState(null);
  const [squares, setSquares] = useState({});

  const puzzle = PUZZLES[idx];
  const isLastPuzzle = idx === PUZZLES.length - 1;

  const showOptions = (square) => {
    if (status === 'solved' || game.current.turn() !== 'w') return false;
    const piece = game.current.get(square);
    if (!piece || piece.color !== 'w') return false;
    const moves = game.current.moves({ square, verbose: true });
    if (!moves.length) return false;
    const styles = {};
    moves.forEach((m) => {
      styles[m.to] = game.current.get(m.to)
        ? { background: 'radial-gradient(circle, rgba(29,19,12,0.3) 78%, transparent 80%)' }
        : { background: 'radial-gradient(circle, rgba(29,19,12,0.32) 20%, transparent 22%)', borderRadius: '50%' };
    });
    styles[square] = { background: 'rgba(194,159,116,0.5)' };
    setSquares(styles);
    return true;
  };

  const flashWrong = () => {
    setStatus('wrong');
    clearTimeout(wrongT.current);
    wrongT.current = setTimeout(() => setStatus(step.current === 0 ? 'idle' : 'progress'), 1500);
  };

  const tryMove = (from, to) => {
    if (status === 'solved') return false;
    const expected = puzzle.line[step.current]?.p;
    if (!expected || from !== expected[0] || to !== expected[1]) {
      flashWrong();
      return false;
    }
    game.current.move({ from, to, promotion: 'q' });
    const cur = puzzle.line[step.current];
    const last = step.current === puzzle.line.length - 1;
    step.current += 1;
    setFen(game.current.fen());
    setStatus(last ? 'solved' : 'progress');
    if (last && idx < PUZZLES.length - 1) {
      setTimeout(() => load(idx + 1), 1500);
    }
    if (cur.r) {
      setTimeout(() => {
        game.current.move({ from: cur.r[0], to: cur.r[1], promotion: 'q' });
        setFen(game.current.fen());
      }, 380);
    }
    return true;
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    setSelected(null);
    setSquares({});
    if (!targetSquare) return false;
    return tryMove(sourceSquare, targetSquare);
  };

  const onSquareClick = ({ square }) => {
    if (status === 'solved') return;
    if (selected) {
      const moved = tryMove(selected, square);
      setSelected(null);
      setSquares({});
      if (!moved && showOptions(square)) setSelected(square);
      return;
    }
    if (showOptions(square)) setSelected(square);
  };

  const load = (i) => {
    clearTimeout(wrongT.current);
    game.current.load(PUZZLES[i].fen);
    step.current = 0;
    setIdx(i);
    setFen(PUZZLES[i].fen);
    setStatus('idle');
    setSelected(null);
    setSquares({});
  };

  const label =
    status === 'solved'
      ? isLastPuzzle
        ? 'All four solved you cooked ☺︎'
        : 'Solved next puzzle…♕'
      : status === 'wrong'
        ? 'not the move — try again'
        : status === 'progress'
          ? 'nice — keep the attack going'
          : `${puzzle.name} · mate in ${puzzle.mateIn}`;

  return (
    <div className="shrink-0 mx-auto md:mx-0 w-[252px] sm:w-[272px] -mt-12">
      <div className="flex items-end justify-between gap-3 mb-2">
        <p className="font-script text-[13px] leading-[1.15] text-brand-medium/70 text-left">
          I enjoy solving problems &mdash; some just happen to have 64 squares. Now it&apos;s your turn, haha
        </p>
        <p className="text-[9px] uppercase tracking-[0.15em] text-brand-accent font-bold shrink-0 whitespace-nowrap">
          Puzzle {idx + 1}/{PUZZLES.length}
        </p>
      </div>
      <div className="rounded-xl overflow-hidden shadow-[0_18px_40px_rgba(29,19,12,0.18)] border border-black/10">
        <Chessboard
          key={idx}
          options={{
            id: 'chess-puzzle',
            position: fen,
            onPieceDrop: onDrop,
            onSquareClick: onSquareClick,
            squareStyles: squares,
            allowDragging: status !== 'solved',
            showNotation: false,
            animationDurationInMs: 220,
            darkSquareStyle: { backgroundColor: '#b08d63' },
            lightSquareStyle: { backgroundColor: '#efe4cf' },
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <p
          className={`text-xs font-bold transition-colors ${status === 'solved' ? 'text-brand-dark' : status === 'wrong' ? 'text-red-500' : 'text-brand-medium'
            }`}
        >
          {label}
        </p>
        <button
          onClick={() => load(idx)}
          className="text-[10px] uppercase tracking-wider font-bold text-black/40 hover:text-black transition-colors shrink-0"
        >
          Reset
        </button>
      </div>
      <p className="font-script text-sm text-brand-medium/60 text-center md:text-right mt-1">
        drag or tap — find the mate ✌︎
      </p>
    </div>
  );
};

export default ChessPuzzle;
