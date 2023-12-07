import type { Metadata } from 'next'
import '../public/css/globals.scss'
import TheHeader from "@/_components/TheHeader";
import CompanyFooter from "@/_components/CompanyFooter";

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
    <html style={{scrollBehavior: 'smooth'}} lang="en">
      <link rel="icon" href="/img/logo.svg" sizes="any" />
      <body>
        <TheHeader/>
        {children}
        <CompanyFooter/>
      </body>
    </html>
  )
}
