import Image from 'next/image';

import dod from '../../public/assets/images/dod.png';
import nj from '../../public/assets/images/nj.png';
import utsw from '../../public/assets/images/utsw.png';
import va from '../../public/assets/images/va.png';

const Banner = () => (
  <section className="pt-28 pb-10 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-4">
      <h3 className="mb-16 text-2xl text-gray-900 text-center">
        Some of the places we work
      </h3>
      <div className="flex flex-wrap justify-center -m-10">
        <div className="w-auto p-10">
          <Image
            src={va}
            layout="intrinsic"
            width={180}
            height={180}
            alt="va"
          />
        </div>
        <div className="w-auto p-10">
          <Image
            src={dod}
            layout="intrinsic"
            width={180}
            height={180}
            alt="dod"
          />
        </div>
        <div className="w-auto p-10">
          <Image
            src={nj}
            layout="intrinsic"
            width={180}
            height={180}
            alt="nj"
          />
        </div>
        <div className="w-auto p-10">
          <Image
            src={utsw}
            layout="intrinsic"
            width={160}
            height={46}
            alt="utsw"
          />
        </div>
      </div>
    </div>
  </section>
);

export { Banner };
