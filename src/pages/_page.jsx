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
import HeaderButton from './_components/HeaderButton';
import HeroLink from './_components/HeroLink';

export default function App() {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ ease: 'easeInOut' }}
      className="font-['Montserrat']"
    >
      <Header>
        <HeaderRow>
          <HeaderButton scrollTo="Section1">Section1</HeaderButton>
          <HeaderButton scrollTo="Section2">Section2</HeaderButton>
          <HeaderButton scrollTo="Section3">Section3</HeaderButton>
        </HeaderRow>
      </Header>
      <HeroSection>
        <HeroImage src="" />
        <HeroColumn>
          <HeroRow>
            <HeroHeading>Lorem, ipsum.</HeroHeading>
            <HeroDivider />
            <HeroInfo>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <HeroButton scrollTo="Section3">Section3</HeroButton>
            </HeroInfo>
          </HeroRow>
        </HeroColumn>
        <HeroFooter>
          <HeroLink href="">Lorem.</HeroLink>
          <HeroLink href="">lorem@ipsum.sh</HeroLink>
          <HeroLink href="">Lorem ipsum dolor sit amet.</HeroLink>
        </HeroFooter>
      </HeroSection>
      <Sections>
        <Section id="Section1">
          <Heading>Section1</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            reprehenderit perspiciatis nulla beatae sequi unde consectetur
            corporis laborum. Repellendus recusandae consequuntur velit, atque
            dignissimos quod distinctio minima, voluptatibus earum, laborum modi
            id numquam quos? Fugit aperiam alias, repellendus perferendis
            reiciendis, incidunt molestiae voluptatem deleniti eum non quidem
            cum accusamus asperiores natus excepturi distinctio cumque nulla
            provident voluptates corrupti tempore cupiditate repellat odit. Ad
            voluptatem porro quidem perferendis, incidunt adipisci possimus rem.
            Tempora deserunt ipsum totam! Exercitationem magni veritatis
            incidunt voluptate pariatur rem culpa. Labore repellat accusamus
            aperiam eius quas cumque eveniet sequi aut deleniti, officiis, modi
            deserunt unde, illum maiores?
          </Text>
          <Card>
            <CardHeading>Card1</CardHeading>
            <CardText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati blanditiis nemo eius. Sed amet fugiat eius hic officiis
              consequuntur ratione ducimus iste ullam fugit, omnis iusto in
              corrupti nam? Doloribus.
            </CardText>
            <Price>Lorem.</Price>
          </Card>
        </Section>
        <Section id="Section2">
          <Heading>Section2</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, ducimus magni. Explicabo asperiores quisquam, tenetur
            animi ducimus tempora aliquam nulla ipsa, eligendi, repellendus
            pariatur possimus quaerat molestiae nostrum rerum. Eius.
          </Text>
          <Price>Lorem.</Price>
        </Section>
        <Section id="Section3">
          <Heading>Section3</Heading>
          <ContactsSection>
            <Contact href="">Lorem.</Contact>
            <Contact href="">lorem@ipsum.sh</Contact>
            <Contact href="">Lorem ipsum dolor sit amet.</Contact>
          </ContactsSection>
        </Section>
      </Sections>
    </motion.div>
  );
}
