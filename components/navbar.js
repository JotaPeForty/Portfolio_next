import styles from '../styles/modules/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import sp from '../public/lang/spain.png'
import uk from '../public/lang/united-kingdom.png'


export default function Navbar() {
    return (
        <>
            <nav className={styles.container}>
                <ul className={styles.ul}>
                    <Link href='/' className={styles.li}>Inicio</Link>
                    <Link href='/aboutme' className={styles.li}>Sobre mi</Link>
                    <Link href='/projects' className={styles.li}>Proyectos</Link>
                </ul>
                <div className={styles.icons}>
                    <Image src={sp} alt='SP' width='auto' height='20' />
                    <hr/>
                    <Image src={uk} alt='UK' width='auto' height='20' />
                </div>
            </nav>
        </>
    )
}