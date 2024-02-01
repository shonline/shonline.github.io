import { motion } from 'framer-motion';

export default function HeroHeading({ children }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'anticipate' }}
        className="sm:text-[10vmin] text-[17vmin] font-['Viaoda_Libre']"
      >
        {children}
      </motion.h1>
    </div>
  );
}
