import Image from 'next/image';

import druplicon from '../../public/assets/images/drupal-icon-28.jpg';
import { Section } from '../layout/Section';

const HomeContent = () => (
  <Section>
    <section className="py-2 xl:pt-24 xl:pb-28 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-5 lg:mb-0">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
              Drupal done right
            </span>
            <h2 className="mb-5 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
              You need expertise. We have it.
            </h2>
            <p className="mb-6 text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">
              Drupal Software Development, Support and Training
            </p>
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              We provide strategic consulting technology services and managed
              services to commercial, not for profit and government
              organizations. Our Consulting can mobilize the right people,
              skills and technologies to help organizations build and release
              their Drupal CMS.
            </p>
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              Our experts have more than 10 years of Federal Drupal contracting
              and building experience, and are fluent in all phases of Agile
              Development.
            </p>
            <p className="text-lg font-medium leading-7 text-coolGray-500">
              Capabilities include new CMS creation, legacy site maintenace,
              service contracts, and content migrations.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              <Image
                src={druplicon}
                layout="intrinsic"
                width={300}
                height={360}
                alt="Druplicon"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  </Section>
);

export { HomeContent };
