import type { Metadata } from 'next'
import '../public/css/globals.scss'
import TheHeader from "@/_components/TheHeader";

export const metadata: Metadata = {
  title: 'ЛЭГЭ АРТИС',
  description: 'Венецианская штукатурка',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader/>
        {children}
      </body>
    </html>
  )
}
