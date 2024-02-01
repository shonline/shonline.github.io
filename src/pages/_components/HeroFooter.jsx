import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroFooter({ children }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 35]);

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 1.5, duration: 1, ease: 'anticipate' }}
      style={{ opacity: opacity, y: y }}
      className="hidden sm:flex min-h-[10vmin] flex-wrap items-center justify-between mx-[5vw] absolute bottom-0 w-[90vw]"
    >
      {children}
    </motion.div>
  );
}
