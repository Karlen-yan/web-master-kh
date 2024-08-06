import Link from 'next/link'
import Container from '../shared/container'
import Logo from '../shared/logo'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#084faf] mt-40 p-12'>
      <Container className='flex flex-col justify-between lg:flex-row'>
        <section>
          <Logo />
          <p className='text-white'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section>
          <h1 className='mt-12 text-2xl text-white'>Redes</h1>
          <div className='flex flex-row justify-center gap-3 mt-5'>
          <Link
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-100 hover:text-blue-900'
          >
            <FaFacebook size={30} />
          </Link>
          <Link
            href='https://www.linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-100 hover:text-blue-900'

          >
            <FaLinkedin size={30} />
          </Link>
          </div>
        </section>
      </Container>
    </footer>
  )
}

export default Footer
