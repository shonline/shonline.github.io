import LocomotiveScroll from 'locomotive-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Hero({
  image,
  contacts,
  headertitle,
  title,
  subtitle,
  links,
  headerlink,
}) {
  const locomotiveScroll = new LocomotiveScroll();
  const { scrollY } = useScroll();
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ ease: 'easeInOut' }}
      className="font-['Montserrat']"
    >
      <motion.header
        style={{
          minHeight: useTransform(scrollY, [0, 300], ['10vh', '5vh']),
          backdropFilter: useTransform(
            scrollY,
            [0, 300],
            ['blur(0px)', 'blur(32px)']
          ),
          backgroundColor: useTransform(
            scrollY,
            [0, 300],
            ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
          ),
          opacity: useTransform(scrollY, [0, 300], [0, 1]),
        }}
        className="z-10 fixed w-full hidden sm:flex flex-col justify-center items-center px-[5vmax]"
      >
        <div className="flex justify-between items-center w-full flex-wrap">
          <div className="text-white text-2xl font-['Viaoda_libre'] pointer-events-none select-none">
            {headertitle}
          </div>
          <a
            href={headerlink.link}
            className="text-white text-center font-light block transition hover:bg-white hover:text-black px-1.5"
          >
            {headerlink.title}
          </a>
        </div>
      </motion.header>
      <section className="h-[100svh] py-[10svh] flex flex-col justify-center text-white overflow-hidden">
        {image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            className="absolute -z-10 w-full h-full overflow-hidden"
            data-scroll
            data-scroll-speed="-0.5"
          >
            <img className="object-cover h-full w-full" src={image} />
          </motion.div>
        )}
        <section className="flex flex-col items-start justify-end mx-[5vmax] flex-auto">
          <motion.section
            className="flex flex-col overflow-hidden my-[1svh]"
            data-scroll
            data-scroll-speed="-0.05"
          >
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.15, duration: 1.5, ease: 'anticipate' }}
              className="text-[clamp(3rem,10vmin,7rem)] font-['Viaoda_Libre']"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.1, ease: [0.3, 0, 0, 1], duration: 0.5 }}
              className="border-t"
            />
          </motion.section>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'anticipate' }}
            data-scroll
            data-scroll-speed="-0.07"
            className="flex flex-col"
          >
            <div className="font-light text-[clamp(0.9rem,3vmin,1.5rem)]">
              {subtitle}
            </div>
          </motion.div>
          <motion.nav
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'anticipate' }}
            data-scroll
            data-scroll-speed="-0.1"
            className="my-[5vh] hidden sm:flex flex-col w-full"
          >
            {links.map((entry, key) => (
              <button
                key={key}
                className="text-white text-left font-light block transition hover:bg-white hover:text-black px-1.5 text-[clamp(0.9rem,3vmin,1.5rem)]"
                onClick={() => {
                  locomotiveScroll.scrollTo(
                    document.getElementById(entry.slug)
                  );
                }}
              >
                {entry.data.title ? entry.data.title : entry.slug}
              </button>
            ))}
          </motion.nav>
        </section>
        <motion.footer
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'anticipate' }}
          style={{
            opacity: useTransform(scrollY, [0, 300], [1, 0]),
            y: useTransform(scrollY, [0, 300], [0, 35]),
          }}
          className="hidden sm:flex min-h-[10vmin] flex-wrap items-center justify-between mx-[5vw] absolute bottom-0 w-[90vw]"
        >
          {contacts.map((entry, key) => (
            <a
              key={key}
              href={entry.link}
              className="text-white text-center font-light block transition hover:bg-white hover:text-black px-1.5"
            >
              {entry.title}
            </a>
          ))}
        </motion.footer>
      </section>
    </motion.div>
  );
}
