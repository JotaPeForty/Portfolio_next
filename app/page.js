import styles from '../styles/modules/home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import yo from '../public/jotape.jpg'
import { avenir } from '../styles/fonts.js'
import cv from '../public/png/file_download.png'
import gh from '../public/png/github.png'
import tw from '../public/png/twitter.png'
import lin from '../public/png/linkedin.png'
import mail from '../public/png/mail.png'
import tel from '../public/png/telephone.png'
import pin from '../public/png/locate.png'
import Aboutme from '../app/aboutme/page'
import Projects from '../app/projects/page'


export default function Home()
{
  return (
      <div className={avenir.className}>
    <div className={styles.container} >
        <div className={styles.image}>
          <Image src={yo} alt='jotape' width='350' height='auto' className={styles.img} />
        </div>
        <div className={styles.context}>
          <h1 className={styles.h1}>Juan Pablo Benavente</h1>
          <p className={styles.p}>DESARROLLADOR FULL STACK / FOTOGRAFO</p>
          <div className={styles.info}>
            <p className={styles.infop}>
              <Image src={mail}  alt='Twitter' width='auto' height='20'/>
              <Link href='mailto:juanp.benavente@gmail.com' target='_blank' className={styles.link}>
                juanp.benavente@gmail.com
              </Link>
            </p>
            <p className={styles.infop}>
              <Image src={tel}  alt='Twitter' width='auto' height='20'/>
              <Link href='https://wa.link/avju3n' target='_blank' className={styles.link}>+543515946885</Link>
            </p>
            <p className={styles.infop}>
              <Image src={pin}  alt='Twitter' width='auto' height='20'/>
              <span className={styles.link}>Córdoba, Argentina</span>
            </p>
          </div>
          <div className={styles.icons}>
            <Link href='https://www.linkedin.com/in/juan-pablo-benavente-dev/' target='_blank'>
              <Image src={lin}  alt='Twitter' width='auto' height='40'/>
            </Link>
            <Link href='https://twitter.com/JuanP_Benavente' target='_blank'>
            <Image src={tw}  alt='Twitter' width='auto' height='40'/>
            </Link>
            <Link href='https://github.com/JotaPeForty' target='_blank'>
            <Image src={gh}  alt='Github' width='auto' height='40'/>
            </Link>
            <Link href='https://drive.google.com/file/d/1GyGWZuaIUX1IrmELN7NkfwJ6lJBizWZw/view?usp=sharing' target='_blank'>
              <Image src={cv}  alt='download cv' width='auto' height='40'/>
              <h6></h6>
            </Link>
          </div>
        </div>
      </div>
        <Aboutme />
        <Projects />
    </div>
  )
}
