import {Partners} from "@/app/_types";
import Image from "next/image";

interface Props {
  partners: Array<Partners>
}

export default function Partners({partners}: Props):JSX.Element {
  return (
    <div id={'partners'} className={'container mx-auto pt-10'}>
      <h1 className={'accent pb-5'}>Наши партнеры</h1>
      <div className={'partners__cards'}>
        {
          partners.map(( partner) => (
            <div key={partner.id} className={'w-100 h-100 relative'}>
              <Image src={partner.url} alt={'partner'} width={partner.id === 2 ? 200 : 300} height={200}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}