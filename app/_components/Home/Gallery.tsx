'use client'
import Image from "next/image";
import {Gallery} from "@/app/_types";
import ModalGallery from "@/app/_components/Home/ModalGallery";
import {useState} from "react";
import { TfiClose } from "react-icons/tfi";
interface Props {
  gallery: Array<Gallery>
}

export default function Gallery({gallery}: Props):JSX.Element {
  const [isOpenModal, setValueOpenModal] = useState(false)
  const [index, setIndex] = useState(0)

  function openModal(id: number) {
    setIndex(id)
    setValueOpenModal(true)
  }

  return (
    <div>
      <div id={'gallery'} className={'container mx-auto pt-10'}>
        <h1 className={'accent'}>Галлерея</h1>
        <div className={'gallery__pictures pt-5'}>
          {
            gallery.map((img) => (
              <div onClick={() => openModal(img.id)} key={img.id} className={`picture ${[1,2,5,6].includes(img.id) ? 'small' : 'big'}`}>
                <Image src={`${img.url}`} alt={'picture'} fill/>
              </div>
            ))
          }
        </div>
      </div>
      <div className={'modal-wrapper h-full w-full'} hidden={!isOpenModal}>
        <ModalGallery indexPicture={index} pictures={gallery}/>
        <div onClick={() => setValueOpenModal(!isOpenModal)} className={'close-btn'}>
          <TfiClose />
        </div>
      </div>
    </div>

  )
}