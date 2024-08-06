import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const ServidorWeb = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
            Recursos de Animaciones Web Predefinidas
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={''}>
              <Card
                img='/images/fotos/unSplash.png'
                className='w-[600px] h-[300px]'
                description='Proporciona una vasta colección de fotos de alta calidad y libres de derechos para uso personal y comercial.'
                alt='Logo de Upsplash'
              />
            </Link>
           
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServidorWeb
