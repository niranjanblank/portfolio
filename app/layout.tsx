import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Navbar from './Components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Niranjan Shah Portfolio',
  description: 'Showcasing the projects done by me',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
 
      <body className={inter.className}>
        <Providers>
          <main className=" dark:bg-zinc-900" style={{colorScheme:'dark'}}>
          <Navbar  />
          {children}
          </main>
        </Providers>
        </body>
    </html>
  )
}
