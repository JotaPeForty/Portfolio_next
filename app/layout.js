import '../styles/modules/globals.css'
import {avenir} from '../styles/fonts.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={avenir.className}>
      <head />
      <body>
      {children}
      </body>
    </html>
  )
}
