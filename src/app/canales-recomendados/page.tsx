import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const Canals = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          {/* <h1 className='m-5 p-4 text-2xl font-bold'>
          Canales recomendadas para Desarrolladores web </h1> */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'youtube.com/c/midudev?sub_confirmation=1'}>
              <Card
                img='/images/canals/midulive.png'
                className='w-[600px] h-[300px]'
                description='Canal de YouTube dirigido por Miguel Ángel Durán, donde se comparten tutoriales, consejos y recursos sobre desarrollo web, programación y tecnología, ideal para desarrolladores que buscan aprender de manera práctica y entretenida.'
                alt='Logo de midulive'
              />
            </Link>
            <Link href={'https://www.youtube.com/@CarlosAzaustre'}>
              <Card
                img='/images/canals/Carlos-Azaustre.png'
                className='w-[600px] h-[300px]'
                description='Canal de YouTube dedicado a tutoriales y contenido educativo sobre desarrollo web y programación, centrado en tecnologías como JavaScript, React, Node.js y más, ideal para desarrolladores que buscan mejorar sus habilidades y mantenerse actualizados.'
                alt='logo de Carlos Azaustre - Aprende JavaScript'
              />
            </Link>
            <Link href={'https://www.youtube.com/@mouredev'}>
              <Card
                img='/images/canals/MoureDev-Brais-Moure.png'
                className='w-[600px] h-[300px]'
                description='Canal de YouTube especializado en desarrollo de aplicaciones móviles y software, donde Brais Moure comparte tutoriales, proyectos prácticos y consejos sobre programación, ideal para desarrolladores interesados en iOS, Android y desarrollo multiplataforma.'
                alt='logo de Carlos Azaustre - Aprende JavaScript'
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Canals
