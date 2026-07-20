import { useEffect } from 'react';

const ConsoleGreeting = () => {
  useEffect(() => {
    const c = 'color:#c29f74;font-weight:bold;font-size:15px;';
    const t = 'color:#1d130c;font-size:12px;line-height:1.5;';
    const i = 'color:#4e3621;font-size:11px;font-style:italic;';
    console.log('%cHey — you opened the console 👀', c);
    console.log('%cI’m Konnuru Yashwanth · AI Product Builder · open to work.\nLiked what you saw? Let’s talk → yashwanthkonnuru@gmail.com', t);
    console.log('%cpsst: there’s a Konami code hidden on the page — ↑↑↓↓←→←→ B A 😉', i);
  }, []);
  return null;
};

export default ConsoleGreeting;
