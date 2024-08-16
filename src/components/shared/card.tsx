import Image from 'next/image'
import { FC } from 'react'
import { cn } from '../../../libs/utils'

interface CardProps {
  img: string
  description: string
  alt:string
  className?: string
}

const Card: FC<CardProps> = ({ img, description,alt, className }) => {
  return (
    <div className='animate-fade animate-once '>
      <Image
        src={img}
        alt={alt}
        width={300}
        height={300}
        className={cn('rounded-xl shadow-lg hover:shadow-gray-400 hover:pt-2',className)}
      />
      <p className='max-w-[100%] p-5 text-gray-600'>{description}</p>
    </div>
  )
}

export default Card
