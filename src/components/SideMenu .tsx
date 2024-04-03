import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

const SideMenu = ({ children }: Props) => {
  return (
    <main className='flex'>
      <ul className='hidden sticky top-0 sm:flex flex-col items-center justify-evenly h-screen w-1/12 bg-primary text-white text-lg [&>li]:border-b-2 [&>li]:border-white [&>li]:p-3'>
        <li><a href="/top">Home {'>'}</a></li>
        <li><a href="/products">Products {'>'}</a></li>
        <li><a href="/learning">Learning {'>'}</a></li>
        <li><a href="/profile">Profile {'>'}</a></li>
        <li><a href="/contact">Contact {'>'}</a></li>
        <li><a href="/login">Logout {'>'}</a></li>
      </ul>
      {children}
    </main>
  )
}

export default SideMenu 