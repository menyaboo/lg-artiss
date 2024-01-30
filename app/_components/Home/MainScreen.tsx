import {images} from "@/app/_data";

interface Props {
  title: string;
  description: string;
}

export default function MainScreen({title, description}: Props):JSX.Element {

  return (
    <div style={{backgroundImage: `url(${images.bg})`}} id={'main-screen'}>
      <div className={'main-screen__content'}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  )
}
