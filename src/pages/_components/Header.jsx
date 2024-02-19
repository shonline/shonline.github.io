import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header({ children }) {
  const { scrollY } = useScroll();
  const minHeight = useTransform(scrollY, [0, 100], ['10vmin', '5vmin']);
  const blur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(32px)']);
  const bgColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
  );
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.5, duration: 1.5, ease: 'anticipate' }}
      style={{
        minHeight: minHeight,
        backdropFilter: blur,
        backgroundColor: bgColor,
      }}
      className="z-10 fixed w-full hidden sm:flex flex-col justify-center items-center"
    >
      {children}
    </motion.div>
  );
}
