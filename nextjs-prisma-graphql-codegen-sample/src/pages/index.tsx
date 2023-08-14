import { Inter } from 'next/font/google'
import { signIn } from 'next-auth/react'
import { Container } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <main className="p-10">
        {process.env.NODE_ENV === 'development' && (
          <button onClick={() => signIn()}>Login</button>
        )}
      </main>
    </Container>
  )
}
