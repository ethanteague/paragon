import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/ethanteague">
            <a>See our code</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-2 pb-10">
      <HeroOneButton
        title={
          <>
            {'We do Drupal\n'}
            <span className="text-primary-500">Federal | State | Local</span>
          </>
        }
        description="Government & Higher Education"
        button={
          <Link href="tel:9419151811">
            <a>
              <Button xl>Let's Talk</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
