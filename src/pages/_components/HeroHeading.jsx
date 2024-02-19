import { motion } from 'framer-motion';

export default function HeroHeading({ children }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ delay: 0.15, duration: 1.5, ease: 'anticipate' }}
        className="text-[clamp(3rem,10vmin,7rem)] font-['Viaoda_Libre']"
      >
        {children}
      </motion.h1>
    </div>
  );
}
