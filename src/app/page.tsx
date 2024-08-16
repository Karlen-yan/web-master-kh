import Container from '@/components/shared/container'
import Image from 'next/image'

export default function Home () {
  return (
    <Container>
      <main className='flex flex-col justify-between items-center gap-12 lg:flex-row mt-5 bg-gray-50 border border-gray-100 p-5'>
        <div className='max-w-[60%]'>
        <h1 className='m-5 p-4 text-3xl text-[#3972BF] font-bold'>Descripción de la página </h1>
        <p className='text-xl max-w-[100%] p-5 text-gray-600'><b>Web Master KH</b> es una plataforma integral diseñada para desarrolladores y estudiantes que buscan herramientas para mejorar sus proyectos web y fortalecer sus habilidades. La página ofrece una colección curada de herramientas útiles para el desarrollo web, desde generadores de colores hasta bibliotecas de animaciones, así como recursos educativos que ayudan a comprender y dominar estas herramientas. Es el lugar perfecto para descubrir, aprender y aplicar tecnologías que optimizan y enriquecen el proceso de desarrollo web.</p>
        </div>
        
        <Image src={"/images/herramientas.png"} alt='Logo de Herramientas'  width={450} height={350}/>
      </main>
    </Container>
  )
}
