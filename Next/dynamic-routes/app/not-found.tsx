import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex h-screen justify-center items-center flex-col'>
      <div>
      <Image
          src="/no-page.svg"
          alt="Image"
          width={400}
          height={400} />
      </div>
      <Link className='border-1 p-2 rounded-2xl' href="/">Return Home</Link>
    </div>
  )
}