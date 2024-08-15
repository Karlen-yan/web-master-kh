import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Others = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
          Herramientas para Desarrollo web</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          <Link href={'https://www.tailwindcss-animated.com/'}>
              <Card
                img='/images/others/tailwindcssAnimated.png'
                className='w-[600px] h-[300px]'
                description='Biblioteca de animaciones prediseñadas para Tailwind CSS que permite a desarrolladores integrar fácilmente transiciones y efectos visuales dinámicos en sus proyectos web, mejorando la interacción y experiencia del usuario.'
                alt='Logo de tailwind css Animated '
              />
            </Link>
            <Link href={'https://uigradients.com/#WitchingHour'}>
              <Card
                img='/images/others/uiGradients.png'
                className='w-[600px] h-[300px]'
                description='Herramienta en línea que proporciona una amplia colección de gradientes de colores listos para usar, ideales para diseñadores y desarrolladores que buscan inspiración o necesitan aplicar gradientes atractivos en sus proyectos web.'
                alt='Logo de Ui Gradients'
              />
            </Link>
            <Link href={'https://www.w3schools.com/'}>
              <Card
                img='/images/others/wschools.png'
                className='w-[600px] h-[300px]'
                description='Plataforma educativa en línea que ofrece tutoriales, referencias y ejemplos prácticos sobre HTML, CSS, JavaScript, y otros lenguajes y tecnologías web, ideal para desarrolladores que buscan aprender o mejorar sus habilidades.'
                alt='Logo de w3schools'
              />
            </Link>
            <Link href={'https://bennettfeely.com/'}>
              <Card
                img='/images/others/bennettfeely.png'
                className='w-[600px] h-[300px]'
                description='Sitio web que ofrece herramientas y recursos interactivos para diseñadores y desarrolladores, incluyendo generadores de efectos CSS y ejemplos visuales, ideal para experimentar y aplicar estilos avanzados en proyectos web.'
                alt='Logo de w3schools'
              />
            </Link>
            <Link href={'https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections'}>
              <Card
                img='/images/others/smooth.png'
                className='w-[600px] h-[300px]'
                description='Plataforma en línea que ofrece herramientas y recursos para crear animaciones y transiciones suaves en CSS, facilitando la implementación de efectos visuales atractivos en proyectos web.'
                alt='Logo de smooth'
              />
            </Link>
            <Link href={'https://cssmatic.com/'}>
              <Card
                img='/images/others/css-matic.png'
                className='w-[600px] h-[300px]'
                description='Conjunto de herramientas en línea que permite a diseñadores y desarrolladores generar fácilmente efectos CSS como gradientes, sombras, bordes redondeados y texturas, agilizando el proceso de diseño web.'
                alt='Logo de cssmatic'
              />
            </Link>
       
            <Link href={'https://es.videezy.com/#google_vignette'}>
              <Card
                img='/images/others/videezy.png'
                className='w-[600px] h-[300px]'
                description='Plataforma en línea que ofrece una amplia colección de videos y clips de stock gratuitos y de alta calidad, ideales para usar en proyectos creativos y de desarrollo web.'
                alt='Logo de videezy'
              />
            </Link>
            <Link href={'https://giphy.com/gifs/code-coding-seamless-xT9IgzoKnwFNmISR8I'}>
              <Card
                img='/images/others/giphy.png'
                className='w-[600px] h-[300px]'
                description='Plataforma en línea que permite buscar, crear y compartir GIFs animados, proporcionando una vasta biblioteca de animaciones que se pueden integrar en sitios web, aplicaciones y redes sociales para añadir contenido visual dinámico.'
                alt='Logo de giphy'
              />
            </Link>
  
            <Link href={'https://www.awwwards.com/websites/sites_of_the_day/'}>
              <Card
                img='/images/others/awwwards.png'
                className='w-[600px] h-[300px]'
                description='Sitio web que celebra y premia el talento en diseño y desarrollo web, presentando ejemplos destacados de creatividad, innovación y calidad en proyectos digitales de todo el mundo, ideal para inspirarse y aprender de los mejores.'
                alt='Logo de awwwards'
              />
            </Link>

            <Link href={'https://caniuse.com/?search=has'}>
              <Card
                img='/images/others/caniuse.png'
                className='w-[600px] h-[300px]'
                description='Herramienta en línea que proporciona compatibilidad detallada de características web (HTML, CSS, JavaScript, etc.) en diferentes navegadores, ayudando a desarrolladores a verificar qué tecnologías son seguras de usar en sus proyectos.'
                alt='Logo de caniuse'
              />
            </Link>
            <Link href={'https://coolbackgrounds.io/'}>
              <Card
                img='/images/others/cool-Backgrounds.png'
                className='w-[600px] h-[300px]'
                description='Herramienta en línea que permite generar fondos personalizados y atractivos para proyectos web, ofreciendo una variedad de estilos visuales que pueden ser descargados o directamente utilizados en sitios web y aplicaciones.'
                alt='Logo de coolbackgrounds'
              />
            </Link>

            <Link href={'https://threejs.org/'}>
              <Card
                img='/images/others/three-js.png'
                className='w-[600px] h-[300px]'
                description='Biblioteca JavaScript que permite crear y mostrar gráficos 3D en el navegador, utilizando WebGL. Es ideal para desarrolladores que buscan agregar experiencias visuales interactivas y complejas en proyectos web.'
                alt='Logo de Three Js'
              />
            </Link>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Others
