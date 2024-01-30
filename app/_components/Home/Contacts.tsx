
export default function Contacts():JSX.Element {
  return (
    <div id={'contacts'}>
      <div className={'container mx-auto pt-10 pb-5'}>
        <h1 className={'accent'}>Связь с нами</h1>
      </div>
      <div style={{backgroundImage: `url(/img/map.png)`}}>
        <div className={'contacts-wrapper container mx-auto'}>
          <div className={'contacts__info'}>
            <div className={'contacts__info-card'}>
              <h4>E-mail:</h4>
              <h5>ssartis@yandex.ru</h5>
            </div>
            <div className={'contacts__info-card'}>
              <h4>Телефон:</h4>
              <div className={''}>
                <h5>8(921)-937-70-81</h5>
              </div>
            </div>
            <div className={'contacts__info-card flex-col'} style={{alignItems: "flex-start"}}>
              <h4>Адрес офиса:</h4>
              <h5>ул. Марата 86, Санкт-Петербург</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.94850661218373!2d30.33844974423906!3d59.918965668484574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963052d4a9be47%3A0x700de0db962c9467!2z0YPQuy4g0JzQsNGA0LDRgtCwLCA4Niwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTExOQ!5e0!3m2!1sru!2sru!4v1700676383977!5m2!1sru!2sru"
                className={'map'} style={{border: 0}} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <form className={'contacts-form contacts__info-card'}>
            <h4>Написать письмо на почту:</h4>
            <div className={'flex gap-[25px] w-[100%]'}>
              <input className={'w-[50%]'} type={'text'} aria-label={'name'} placeholder={'Ваше имя:'}/>
              <input className={'w-[50%]'} type={'email'} aria-label={'email'} placeholder={'Ваш e-mail:'}/>
            </div>
            <textarea className={'w-[100%] min-h-[300px]'} placeholder={'Ваше сообщение'}></textarea>

            <button type={'submit'}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}