import { motion } from 'framer-motion';

export default function HeroDivider() {
  return (
    <motion.div
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ delay: 0.7, ease: [0.5, 0, 0.15, 1], duration: 0.5 }}
      className="border-t"
      data-scroll
      data-scroll-speed="0.015"
    ></motion.div>
  );
}
