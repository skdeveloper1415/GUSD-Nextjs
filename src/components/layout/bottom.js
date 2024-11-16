import Link from 'next/link';
import Image from 'next/image';

import { Montserrat } from '@next/font/google';
const myMontserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})



export default function Bottom() {
  return (
    <>
      <div className={myMontserrat.className}>
      </div>
    </>
  );
}
