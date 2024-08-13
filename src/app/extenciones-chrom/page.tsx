import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const ExtencioneChrom = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Extensiones de Chrome para Desarrolladores Web
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://developer.chrome.com/docs/devtools?hl=es-419'}>
              <Card
                img='/images/extenciones/dev-tools.png'
                className='w-[600px] h-[300px]'
                description='Aunque no es una extensión, las DevTools de Chrome son esenciales para cualquier desarrollador web. Ofrecen herramientas avanzadas para depuración, análisis de rendimiento, inspección de código y mucho más.'
                alt='Logo de developer chrom'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'
              }
            >
              <Card
                img='/images/extenciones/react-developer-tools.png'
                className='w-[600px] h-[300px]'
                description='Extensión que proporciona herramientas adicionales para inspeccionar y depurar aplicaciones React, incluyendo el árbol de componentes y el estado de cada uno.'
                alt='Logo de react developer tools'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es'
              }
            >
              <Card
                img='/images/extenciones/Lighthouse.png'
                className='w-[600px] h-[300px]'
                description='Herramienta automatizada para mejorar la calidad de las páginas web. Audita el rendimiento, accesibilidad, PWA y más, proporcionando recomendaciones de mejora.'
                alt='Logo de Lighthouse'
              />
            </Link>

            <Link
              href={
                'https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?hl=es'
              }
            >
              <Card
                img='/images/extenciones/wappalyzer.png'
                className='w-[600px] h-[300px]'
                description=' Analiza el sitio web que estás visitando y detecta las tecnologías que utiliza, como frameworks, CMS, herramientas de análisis y más.'
                alt='Logo de wappalyzer'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=es'
              }
            >
              <Card
                img='/images/extenciones/webDeveloper.png'
                className='w-[600px] h-[300px]'
                description='Barra de herramientas con una amplia variedad de utilidades para desarrolladores web, incluyendo opciones para manipular CSS, formularios, imágenes y más.'
                alt='Logo de web developer'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=Es'
              }
            >
              <Card
                img='/images/extenciones/WhatFont.png'
                className='w-[600px] h-[300px]'
                description='Permite identificar fácilmente las fuentes utilizadas en cualquier página web simplemente pasando el cursor sobre el texto.'
                alt='Logo de WhatFont'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=es-419'
              }
            >
              <Card
                img='/images/extenciones/ColorZilla.png'
                className='w-[600px] h-[300px]'
                description='Herramienta de selección de color que permite obtener colores de cualquier parte de una página web y generar gradientes CSS, además de otras utilidades relacionadas con el color.'
                alt='Logo de ColorZilla'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/jsonview/gmegofmjomhknnokphhckolhcffdaihd?hl=es'
              }
            >
              <Card
                img='/images/extenciones/JSONView.png'
                className='w-[600px] h-[300px]'
                description='Formatea y colorea archivos JSON crudos en el navegador para facilitar su lectura y depuración.'
                alt='Logo de JSONView'
              />
            </Link>
            <Link
              href={
                'https://chromewebstore.google.com/detail/css-peeper/mbnbehikldjhnfehhnaidhjhoofhpehk'
              }
            >
              <Card
                img='/images/extenciones/CSSpeeper.png'
                className='w-[600px] h-[300px]'
                description='Extensión para obtener rápidamente el CSS de cualquier elemento en una página web, diseñada para simplificar la inspección de estilos'
                alt='Logo de css peeper'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExtencioneChrom
