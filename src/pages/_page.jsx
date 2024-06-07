import LocomotiveScroll from 'locomotive-scroll';
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ children }) => {
  return (
    <div className="flex flex-col gap-10 border-l border-black p-10">
      {children}
    </div>
  );
};

const CardHeading = ({ children }) => {
  return (
    <div className="font-thin text-[clamp(1.3rem,3.5vmin,2rem)]">
      {children}
    </div>
  );
};

const CardText = ({ children }) => {
  return (
    <div className="text-[clamp(0.9rem,3vmin,1.5rem)] font-extralight">
      {children}
    </div>
  );
};

const Price = ({ children }) => {
  return (
    <div className="font-thin text-[clamp(1.3rem,3.5vmin,2rem)]">
      {children}
    </div>
  );
};

const Section = ({ children, id }) => {
  return (
    <section
      id={id}
      className="flex flex-col gap-12 py-[5vmax] justify-evenly h-full w-full"
    >
      {children}
    </section>
  );
};

const Heading = ({ children }) => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div
      className="text-[clamp(1.7rem,9vmin,7rem)] font-['Viaoda_Libre']"
      data-scroll
      data-scroll-speed="-0.03"
    >
      {children}
    </div>
  );
};

const Text = ({ children }) => {
  return (
    <div className="font-light text-[clamp(0.9rem,3vmin,1.5rem)]">
      {children}
    </div>
  );
};

const HeroScrollTo = ({ children, scrollTo }) => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <button
      className="text-white text-left font-light block transition hover:bg-white hover:text-black px-1.5 text-[clamp(0.9rem,3vmin,1.5rem)]"
      onClick={() => {
        locomotiveScroll.scrollTo(document.getElementById(scrollTo));
      }}
    >
      {children}
    </button>
  );
};

const HeroImage = ({ src, alt }) => {
  const locomotiveScroll = new LocomotiveScroll();
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
};

const HeroLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-white text-center font-light block transition hover:bg-white hover:text-black px-1.5"
    >
      {children}
    </a>
  );
};

const Contact = ({ children, href }) => {
  return (
    <div>
      <a
        href={href}
        className="block px-[1vmax] transition text-black hover:bg-black hover:text-white font-thin text-[clamp(1.5rem,5vmin,5rem)]"
      >
        {children}
      </a>
    </div>
  );
};

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const { scrollY } = useScroll();
  const contacts = {
    tel: {
      number: '+79033095411',
      format: '+7 (903) 309 54 11',
    },
    mail: 'shilov0110@yandex.ru',
    geo: {
      site: 'https://yandex.ru/maps/org/231250638466/',
      address: 'г. Самара, улица Академика Павлова, 35',
    },
  };

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
            Юрий Шилов
          </div>
          <HeroLink href={`tel:${contacts.tel.number}`}>
            {contacts.tel.format}
          </HeroLink>
        </div>
      </motion.header>
      <section className="h-[100svh] py-[10svh] flex flex-col justify-center text-white overflow-hidden">
        {/* <HeroImage src="" /> */}
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
              Юрий Шилов
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
            <Text></Text>
          </motion.div>
          <motion.nav
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'anticipate' }}
            data-scroll
            data-scroll-speed="-0.1"
            className="my-[5vh] hidden sm:flex flex-col w-full"
          >
            <HeroScrollTo scrollTo="negotiations">Переговоры</HeroScrollTo>
            <HeroScrollTo scrollTo="mediator">Медиация</HeroScrollTo>
            <HeroScrollTo scrollTo="advocate">
              Представление интересов
            </HeroScrollTo>
            <HeroScrollTo scrollTo="management">
              Управление персоналом
            </HeroScrollTo>
            <HeroScrollTo scrollTo="toughchoices">Сложные решения</HeroScrollTo>
            <HeroScrollTo scrollTo="psychoconsult">
              Психологическое консультирование
            </HeroScrollTo>
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
          <HeroLink href={`tel:${contacts.tel.number}`}>
            {contacts.tel.format}
          </HeroLink>
          <HeroLink href={`mailto:${contacts.mail}`}>{contacts.mail}</HeroLink>
          <HeroLink href={contacts.geo.site}>{contacts.geo.address}</HeroLink>
        </motion.footer>
      </section>
      <main className="flex flex-col bg-white px-[5vmax] divide-y">
        <Section id="negotiations">
          <Heading>Переговоры</Heading>
          <Text>
            Профессиональный переговорщик, консультант по подготовке и ведению
            переговоров, ведущий тренингов в области переговоров и коммуникаций.
          </Text>
        </Section>
        <Section id="mediator">
          <Heading>Медиация</Heading>
          <Text>
            Профессиональный медиатор, конфликтолог, организатор взаимодействия
            по урегулированию конфликтов, тренер по обучению медиации.
          </Text>
        </Section>
        <Section id="advocate">
          <Heading>Представление интересов</Heading>
          <Text>
            Представитель интересов участников уголовного процесса (потерпевших,
            обвиняемых, подсудимых) по урегулированию вопросов возмещения
            причиненного вреда.
          </Text>
        </Section>
        <Section id="management">
          <Heading>Управление персоналом</Heading>
          <Text>
            Консультант в сфере психологии, методологии и практики управления
            персоналом.
          </Text>
        </Section>
        <Section id="toughchoices">
          <Heading>Сложные решения</Heading>
          <Text>Эксперт в области принятия сложных решений.</Text>
        </Section>
        <Section id="psychoconsult">
          <Heading>Психологическое консультирование</Heading>
          <Text>
            Психологическое консультирование (индивидуальное, а также ведение
            психологических групп). Консультант в сфере психологии, методологии
            и практики управления персоналом.
          </Text>
        </Section>
        <Section id="about">
          <Text>Образование: высшее юридическое и высшее психологическое.</Text>
          <Text>Ученая степень: кандидат психологических наук.</Text>
          <Text>Основное место работы: доцент кафедры общей психологии.</Text>
        </Section>
        <Section id="contacts">
          <Heading>Контакты</Heading>
          <section className="flex flex-col border-l border-black">
            <Contact href={`tel:${contacts.tel.number}`}>
              {contacts.tel.format}
            </Contact>
            <Contact href={`mailto:${contacts.mail}`}>{contacts.mail}</Contact>
            <Contact href={contacts.geo.site}>{contacts.geo.address}</Contact>
          </section>
        </Section>
      </main>
    </motion.div>
  );
}
