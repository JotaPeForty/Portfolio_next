import '../styles/modules/globals.css'
import { avenir } from '../styles/fonts.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={avenir.className}>
      <head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BTLDXSYRW1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BTLDXSYRW1');
      </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
