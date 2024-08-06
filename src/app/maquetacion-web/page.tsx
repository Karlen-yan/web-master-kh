import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const WebsiteLayout = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Herramientas de Diseño y Prototipado
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://www.figma.com/es-es/'}>
              <Card
                img='/images/maquetacion-web/s-1024x529-1.webp'
                className='w-[500px] h-[300px]'
                description='Figma es una herramienta de diseño colaborativa basada en la web que permite a los desarrolladores y diseñadores crear, prototipar y compartir interfaces de usuario en tiempo real.'
                alt='Logo de Figma'
              />
            </Link>
            <Link href={'https://www.sketch.com/'}>
              <Card
                img='/images/maquetacion-web/sketch_sntx.jpg'
                className='w-[500px] h-[300px]'
                description='Sketch es una herramienta de diseño vectorial y prototipado para macOS que permite a los diseñadores crear, iterar y compartir interfaces de usuario y gráficos con facilidad.'
                alt='Logo de sketch'

              />
            </Link>
            <Link href={'https://www.invisionapp.com/'}>
              <Card
                img='/images/maquetacion-web/invisionStudioAnimation-1014x487.jpg'
                className='w-[500px] h-[300px]'
                description='InVision Studio es una herramienta de diseño y prototipado que permite a los diseñadores crear interfaces de usuario interactivas y animadas con facilidad, ofreciendo una plataforma para el diseño colaborativo y la revisión de proyectos.'
                alt='Logo de InVision Studio'

              />
            </Link>
            <Link href={'https://penpot.app/'}>
              <Card
                img='/images/maquetacion-web/penpot.png'
                className='w-[500px] h-[300px]'
                description='Penpot es una herramienta de diseño y prototipado de código abierto y gratuita que permite a los diseñadores crear, iterar y colaborar en interfaces de usuario y prototipos interactivos de forma accesible.'
                alt='Logo de Penpot'

              />
            </Link>

           
          </div>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Herramientas de Construcción y Personalización de Páginas Web
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://wordpress.org/es/'}>
              <Card
                img='/images/maquetacion-web/wordpress.png'
                className='w-[500px] h-[300px]'
                description='WordPress es un sistema de gestión de contenidos (CMS) flexible y ampliamente utilizado que permite a los desarrolladores crear, personalizar y gestionar sitios web y blogs mediante una interfaz intuitiva y una amplia gama de plugins y temas.'
                alt='Logo de woordpress'

              />
            </Link>
            <Link href={'https://es.wix.com/'}>
              <Card
                img='/images/maquetacion-web/wix.png'
                className='w-[500px] h-[300px]'
                description='Wix es una plataforma de creación de sitios web basada en la web que permite a los desarrolladores diseñar y lanzar sitios web rápidamente usando un editor visual de arrastrar y soltar, sin necesidad de conocimientos de codificación.'
                alt='Logo de Wix'

              />
            </Link>
            <Link href={'https://es.squarespace.com/'}>
              <Card
                img='/images/maquetacion-web/image-asset.png'
                className='w-[500px] h-[300px]'
                description='Squarespace es una plataforma de creación de sitios web que permite a los desarrolladores diseñar y lanzar sitios con facilidad utilizando plantillas elegantes y un editor visual intuitivo, sin requerir conocimientos de codificación.'
                alt='Logo de Squarespace'

              />
            </Link>
            <Link href={'https://www.weebly.com/?lang=es_ES'}>
              <Card
                img='/images/maquetacion-web/weebly.png'
                className='w-[500px] h-[300px]'
                description='Weebly es una plataforma de creación de sitios web que facilita a los desarrolladores el diseño y la publicación de sitios utilizando un editor visual de arrastrar y soltar y herramientas integradas para comercio electrónico y SEO.'
                alt='Logo de Weebly'

              />
            </Link>
            <Link href={'https://webflow.com/'} >
              <Card
                img='/images/maquetacion-web/webflow.png'
                className='w-[500px] h-[300px] '
                description='Webflow es una plataforma de diseño y desarrollo web que permite a los desarrolladores crear sitios web personalizados y complejos con un editor visual y control completo sobre el código, con opciones de publicación y hosting integradas.'
                alt='Logo de Webflow'

              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WebsiteLayout
