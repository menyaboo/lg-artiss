import MainScreen from "@/_components/Home/MainScreen";
import 'aos/dist/aos.css'
import {gallery, partners, services} from "@/_data";
import Services from "@/_components/Home/Services";
import Gallery from "@/_components/Home/Gallery";
import Partners from "@/_components/Home/Partners";
import Contacts from "@/_components/Home/Contacts";

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
