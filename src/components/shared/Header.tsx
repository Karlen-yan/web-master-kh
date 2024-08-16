import Link from 'next/link'
import Container from './container'
import Logo from './logo'
import MainMenu from './main-menu'

const Header = () => {
  return (
    <section>
      <div className='flex flex-col justify-center items-center bg-[#e6edf79f] border-b-[1px] border-[#3973bf63] p-8 '>
      <Link
          href='/'
          className='menu-booten-link rounded-md  text-white pt-1 pb-1 pr-3 pl-3 mt-3 shadow-sm'
        >
        <Logo />

        </Link>

      </div>
      <div className=''>
        <Container>
          <div className='mt-6 mb-12'>
          <MainMenu />

          </div>
        </Container>
      </div>
    </section>
  )
}

export default Header
