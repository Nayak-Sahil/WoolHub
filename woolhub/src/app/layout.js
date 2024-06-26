import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets:["latin"],
  weight:["600"]
});

export const metadata = {
  title: 'Wool Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
