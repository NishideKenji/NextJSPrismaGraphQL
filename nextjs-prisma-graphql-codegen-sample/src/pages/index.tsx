import { Inter } from 'next/font/google'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="p-10">
      {process.env.NODE_ENV === 'development' && (
        <button onClick={() => signIn()}>Login</button>
      )}
    </main>
  )
}
