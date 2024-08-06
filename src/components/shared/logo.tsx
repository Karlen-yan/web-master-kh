import Image from 'next/image'


const Logo = () => {
  return (
    
      <Image
        src={"/icons/Web-MasterKH.png"}
        width={250}
        height={300}
        alt='Web Master logo'
        className=' p-5 rounded-[100%]'
      />
    
  )
}

export default Logo;
