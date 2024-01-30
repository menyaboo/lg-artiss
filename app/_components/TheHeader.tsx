'use client'
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {images} from "@/app/_data";

export default function TheHeader():JSX.Element {
  const [isSmallHeader, setValueSmallHeader] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset >= window.innerHeight / 1.5 ? setValueSmallHeader(true) : setValueSmallHeader(false)
    );
  })

  return (
    <header className={'header'}>
      <div className={'header__body container'}>
        <div className={'logo'}>
          <Link href={'/'}>
            <Image className={'transition-all'} src={images.logo} alt={'logo'} width={isSmallHeader ? 50 : 120} height={75}/>
          </Link>
          <span hidden={isSmallHeader}>ЛЭГЭ АРТИС</span>
        </div>
        <nav className={'links'}>
          <Link href={'/'}>О нас</Link>
          <Link href={'#services'}>Услуги</Link>
          <Link href={'#gallery'}>Галерея</Link>
          <Link href={'#partners'}>Партнеры</Link>
          <Link href={'#contacts'}>Контакты</Link>
        </nav>
      </div>
    </header>
  )
}