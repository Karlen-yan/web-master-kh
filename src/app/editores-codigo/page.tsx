import Card from '@/components/shared/card'
import Container from '@/components/shared/container'
import Link from 'next/link'

const EditoresCodigo = () => {
  return (
    <section>
      <Container>
        <div className=' mt-5 bg-gray-50 border border-gray-100 p-12'>
          <h1 className='m-5 p-4 text-2xl font-bold'>
          Herramientas para Trabajar con APIs en el Lado del Servidor
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <Link href={'https://www.apicur.io/studio/'}>
              <Card
                img='/images/editores-codigo/vs-code.png'
                className='w-[600px] h-[300px]'
                description='Editor de código fuente gratuito desarrollado por Microsoft. Ofrece soporte para depuración, control de versiones Git, resaltado de sintaxis, IntelliSense, fragmentos de código y personalización con extensiones.'
                alt='Logo de Visual Studio Code (VS Code)'
              />
            </Link>           
            <Link href={'https://sublimetext.com/'}>
              <Card
                img='/images/editores-codigo/sublime-text.png'
                className='w-[600px] h-[300px]'
                description='Editor de texto sofisticado para código, marcado y prosa. Conocido por su velocidad y una gran cantidad de características útiles como edición dividida, Goto Anything y comandos rápidos.'
                alt='Logo de Sublime Text'
              />
            </Link>           
            <Link href={'https://atom-editor.cc/'}>
              <Card
                img='/images/editores-codigo/atom.png'
                className='w-[600px] h-[300px]'
                description='Editor de código fuente gratuito y de código abierto, desarrollado por GitHub. Es altamente personalizable con temas y paquetes, y está construido con tecnologías web.'
                alt='Logo de Atom'
              />
            </Link>           
            <Link href={'https://notepad-plus-plus.org/downloads/'}>
              <Card
                img='/images/editores-codigo/notepad++.png'
                className='w-[600px] h-[300px]'
                description=' Editor de texto y código fuente gratuito para Windows. Soporta varios lenguajes de programación y es conocido por su simplicidad y eficiencia.'
                alt='Logo de Notepad++'
              />
            </Link>           
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EditoresCodigo