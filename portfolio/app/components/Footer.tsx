import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 md:flex-row md:px-8 dark:text-slate-300">
        <p>© {new Date().getFullYear()} Aditya Vairale. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="mailto:aditya.vairale2015@gmail.com" aria-label="Email"><Mail size={17} /></a>
          <a href="https://www.linkedin.com/in/aditya-vairale2609/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
