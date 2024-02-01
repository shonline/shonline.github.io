import { motion } from 'framer-motion';

export default function HeroImage({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
      className="absolute -z-10 w-full h-full overflow-hidden"
      data-scroll
      data-scroll-speed="-0.5"
    >
      <img className="object-cover h-full w-full" src={src} alt={alt} />
    </motion.div>
  );
}
