'use client'
import {Gallery} from "@/app/_types";
import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
interface Props {
  indexPicture: number,
  pictures: Array<Gallery>
}

export default function ModalGallery({indexPicture, pictures}: Props):JSX.Element {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    //@ts-ignore
    swiperRef.current.swiper.slideTo(indexPicture);
  })

  return (
    <div id={'modal-gallery'}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-main"
        ref={swiperRef}
      >
        {
          pictures.map((picture) =>
            (
              <SwiperSlide key={picture.id}>
                <Image src={picture.url} alt={'picture'} fill objectFit={'cover'}/>
              </SwiperSlide>
            )
          )
        }
      </Swiper>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-second"
      >
        {
          pictures.map((picture) =>
            (
              <SwiperSlide key={picture.id}>
                <Image src={picture.url} alt={'picture'} fill objectFit={'cover'} />
              </SwiperSlide>
            )
          )
        }
      </Swiper>
    </div>
  )
}