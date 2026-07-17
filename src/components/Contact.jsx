import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PHONE = '+918125409656';
const PHONE_DISPLAY = '+91 81254 09656';
const EMAIL = 'yashwanthkonnuru@gmail.com';

// Get a free key at https://web3forms.com (enter your email — no account needed),
// then paste it here. Messages are delivered straight to your inbox.
const ACCESS_KEY = 'b0e0f427-5e3a-4255-afc0-954df21c146b';

const Contact = () => {
  const ref = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${formData.firstName} ${formData.lastName}`.trim(),
          from_name: `${formData.firstName} ${formData.lastName}`.trim(),
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-[85vh] relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900"
    >
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Card (smaller) */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div className="bg-brand-dark border border-brand-accent/20 w-full md:w-[72%] lg:w-[58%] p-8 md:p-12 text-white flex flex-col">
          {/* Header */}
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent mb-3">
              Reach Me
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-light leading-tight max-w-md">
              Looking to hire or collaborate? Let&apos;s talk.
            </h2>
          </div>

          {/* Direct contact details */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 md:mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-1.5">Call / WhatsApp</p>
              <a href={`tel:${PHONE}`} className="text-base md:text-lg font-bold hover:text-brand-accent transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-1.5">Email</p>
              <a href={`mailto:${EMAIL}`} className="text-base md:text-lg font-bold hover:text-brand-accent transition-colors break-all">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 font-medium mb-6">
              Or send me a message right here.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
                <div className="flex-1 flex flex-col gap-7">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-base focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-base focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-base focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium rounded-none"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project"
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-2.5 text-base focus:outline-none focus:border-white transition-colors placeholder-white/60 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <p
                  className={`text-sm font-medium transition-colors ${status === 'success' ? 'text-green-400' : status === 'error' ? 'text-red-400' : 'text-white/40'
                    }`}
                  role="status"
                >
                  {status === 'success' && "Thanks — your message is on its way. I'll be in touch."}
                  {status === 'error' && 'Something went wrong. Please email or call me directly.'}
                  {status === 'sending' && 'Sending…'}
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-all duration-300 group whitespace-nowrap disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending' : 'Send'}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
