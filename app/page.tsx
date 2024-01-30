import MainScreen from "@/app/_components/Home/MainScreen";
import 'aos/dist/aos.css'
import {gallery, partners, services} from "@/app/_data";
import Services from "@/app/_components/Home/Services";
import Gallery from "@/app/_components/Home/Gallery";
import Partners from "@/app/_components/Home/Partners";
import Contacts from "@/app/_components/Home/Contacts";

export default function Home():JSX.Element {
  return (
    <main className={'min-h-0'}>
      <MainScreen
        title={'Лэгэ Артис'}
        description={'ваше оформление начинается здесь'}
      />
      <Services services={services}/>
      <Gallery gallery={gallery}/>
      <Partners partners={partners}/>
      <Contacts />
    </main>
  )
}
