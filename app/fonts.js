// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts

import cn from 'clsx'
import localFont from 'next/font/local'

const mono = localFont({
  src: [
    {
      path: '../public/fonts/V1_Server_Mono/V1-ServerMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-mono',
  preload: true,
})

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--body-font',
  preload: true,
})

export const fonts = { className: cn(poppins.variable, mono.variable) }
