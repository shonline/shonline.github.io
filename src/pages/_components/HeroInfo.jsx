import { motion } from 'framer-motion';

export default function HeroInfo({ children }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        transition={{ delay: 0.15, duration: 1.5, ease: 'anticipate' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
