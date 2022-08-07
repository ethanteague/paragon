import Link from 'next/link';

import { Button } from '../button/Button';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Section>
      <section className="py-2 xl:pt-24 xl:pb-28 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-5 lg:mb-0">
              <h1 className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                About us
              </h1>
              <h2 className="mb-5 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                Robust Multi-faceted Drupal solutions
              </h2>
              <ul className="pb-20">
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  New Drupal CMS creation
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Decoupled cms implementation
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Existing CMS management
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Custom module creation
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  API and microservice integrations
                </li>
              </ul>

              <h2 className="mb-5 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                NAICS Codes
              </h2>
              <ul className="pb-20">
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  519130 – Internet Publishing and Broadcasting and Web Search
                  Portals
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  541511 – Custom Computer Programming Services
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  541512 – Computer Systems Design Services
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  541513 – Computer Facilities Management Services
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  541519 – Other Computer Related Services
                </li>
              </ul>

              <h2 className="mb-5 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                Federal Contractiong Information
              </h2>
              <ul>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  UEI: QB7ANQTT7Y57
                </li>
                <li className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 dark:focus:ring-gray-500 dark:focus:text-white">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  CAGE: 9BN04
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Section>
    <Section yPadding="pt-2 pb-10">
      {
        <Link href="tel:9419151811">
          <a className="flex flex-row justify-center">
            <Button xl>Let&apos;s Talk</Button>
          </a>
        </Link>
      }
    </Section>
    <Footer />
  </div>
);

export default About;
