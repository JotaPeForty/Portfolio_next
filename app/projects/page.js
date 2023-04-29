import styles from '../../styles/modules/projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import link from '../../public/icons/link.png'
import tube from '../../public/icons/YouTube.png'
import { BigShouldersDisplay } from '../../styles/fonts.js'
import climapp from '../../public/proyect/climapp.jpg'
import letscook from '../../public/proyect/letscook.jpg'
import gimme from '../../public/proyect/gimmearide.jpg'
import dog from '../../public/proyect/dogsworld.jpg'

export default function Projects() {


  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <hr className={styles.hr} />
          <h1 className={BigShouldersDisplay.className}>Proyectos</h1>
        </div>
        <div className={styles.cont}>
          <div className={styles.pro}>
            <h5 className={styles.h5}>ClimApp</h5>
            <div>
              <Image src={climapp} alt='ClimApp' width='400' height='auto' />
            </div>
            <div className={styles.link}>
              <Link href='https://youtu.be/Jp9z--CSqeI' target='_blank'>
              <Image src={tube} alt='tube' width='40' height='auto' />
              </Link>
              <h5> Video | Enlace</h5>
              <Link href='https://clim-app-spa.vercel.app/' target='_blank'>
              <Image src={link} alt='link' width='20' height='auto' />
              </Link>
            </div>
          </div>
          <div className={styles.pro}>
            <h5 className={styles.h5}>Let´s cook!</h5>
            <div>
              <Image src={letscook} alt='let´s cook' width='400' height='auto' />
            </div>
            <div className={styles.link}>
              <Link href='https://' target='_blank'>
                <Image src={tube} alt='tube' width='40' height='auto' />
              </Link>
              <h5>Video | Enlace</h5>
              <Link href='https://pi-food-back.up.railway.app' target='_blank'>
                <Image src={link} alt='link' width='20' height='auto' />
              </Link>
            </div>
          </div>
          <div className={styles.pro}>
            <h5 className={styles.h5}>Dogs World</h5>
            <div>
              <Image src={dog} alt='ClimApp' width='400' height='auto' />
            </div>
            <div className={styles.link}>
              <Link href='https://' target='_blank'>
              <Image src={tube} alt='tube' width='40' height='auto' />
              </Link>
              <h5>Video | Enlace</h5>
              <Link href='project-dog-jotape.up.railway.app' target='_blank'>
              <Image src={link} alt='link' width='20' height='auto' />
              </Link>
            </div>
          </div>
          <div className={styles.pro}>
            <h5 className={styles.h5}>Gimme A Ride</h5>
            <div>
              <Image src={gimme} alt='let´s cook' width='400' height='auto' />
            </div>
            <div className={styles.link}>
              <Link href='https://' target='_blank'>
              <Image src={tube} alt='tube' width='40' height='auto' />
              </Link>
              <h5>Video | Enlace</h5>
              <Link href='https://gimmearide.vercel.app/' target='_blank'>
              <Image src={link} alt='link' width='20' height='auto' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
