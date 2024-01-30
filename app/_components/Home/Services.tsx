import Image from "next/image";
import {Services} from "@/app/_types";

interface Props {
  services: Array<Services>
}

export default function Services({services}: Props):JSX.Element {
  return (
    <div id={'services'} className={'mx-auto pt-10 container'}>
      <h1 className={'accent'}>Услуги</h1>
      <div className={'services__cards pt-5'}>
        {
          services.map((service) => (
              <div key={service.id} className={'card'}>
                <div style={{backgroundImage: `url('${service.bg}')`}} className={'card__picture-wrapper'}>
                  <div className={'card__picture'}>
                    <Image src={`${service.img}`} alt={'picture'} fill objectFit={'cover'}/>
                  </div>
                </div>
                <p className={'card__description'}>{service.description}</p>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}