import bg from '@/public/img/main_sht.jpg'

interface Props {
  title: string;
  description: string;
}

export default function MainScreen({title, description}: Props):JSX.Element {

  return (
    <div style={{backgroundImage: `url(${bg.src})`}} id={'main-screen'}>
      <div className={'main-screen__content'}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  )
}
