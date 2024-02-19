import { motion } from 'framer-motion';

import HeroSection from './_components/HeroSection';
import HeroImage from './_components/HeroImage';
import HeroColumn from './_components/HeroColumn';
import HeroRow from './_components/HeroRow';
import HeroHeading from './_components/HeroHeading';
import HeroDivider from './_components/HeroDivider';
import HeroInfo from './_components/HeroInfo';
import HeroButton from './_components/HeroButton';
import HeroFooter from './_components/HeroFooter';
import Section from './_components/Section';
import Text from './_components/Text';
import Heading from './_components/Heading';
import Card from './_components/Card';
import CardHeading from './_components/CardHeading';
import CardText from './_components/CardText';
import Price from './_components/Price';
import ContactsSection from './_components/ContactsSection';
import Contact from './_components/Contact';
import Sections from './_components/Sections';
import Header from './_components/Header';
import HeaderRow from './_components/HeaderRow';
import HeroScrollTo from './_components/HeroScrollTo';
import HeroLink from './_components/HeroLink';

export default function App() {
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
      <Header>
        <HeaderRow>
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
        </HeaderRow>
      </Header>
      <HeroSection>
        {/* <HeroImage src="" /> */}
        <HeroColumn>
          <HeroRow>
            <HeroHeading>Юрий Шилов</HeroHeading>
            <HeroDivider />
            <HeroInfo>
              <Text></Text>
              {/* <HeroButton scrollTo="about"></HeroButton> */}
            </HeroInfo>
          </HeroRow>
        </HeroColumn>
        <HeroFooter>
          <HeroLink href={`tel:${contacts.tel.number}`}>
            {contacts.tel.format}
          </HeroLink>
          <HeroLink href={`mailto:${contacts.mail}`}>{contacts.mail}</HeroLink>
          <HeroLink href={contacts.geo.site}>{contacts.geo.address}</HeroLink>
        </HeroFooter>
      </HeroSection>
      <Sections>
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
          <ContactsSection>
            <Contact href={`tel:${contacts.tel.number}`}>
              {contacts.tel.format}
            </Contact>
            <Contact href={`mailto:${contacts.mail}`}>{contacts.mail}</Contact>
            <Contact href={contacts.geo.site}>{contacts.geo.address}</Contact>
          </ContactsSection>
        </Section>
      </Sections>
    </motion.div>
  );
}
