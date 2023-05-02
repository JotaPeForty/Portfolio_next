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
import html from '../../public/icons/html5.png'
import css from '../../public/icons/CSS3.png'
import js from '../../public/icons/JavaScript.png'
import react from '../../public/icons/reactjs.png'
import redux from '../../public/icons/Redux.png'
import nodejs from '../../public/icons/node_icon.png'
import express from '../../public/icons/expressjs.png'
import postgres from '../../public/icons/psql.png'
import sequelize from '../../public/icons/sequelize.png'
import sass from '../../public/icons/sass.png'
import sc from '../../public/icons/styled-components.png'

export default function Projects()
{
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <hr className={styles.hr} />
          <h1 className={BigShouldersDisplay.className}>Proyectos</h1>
          <hr />
        </div>
        <div className={styles.cont}>
          <div className={styles.pro}>
            <h5 className={styles.h5}>ClimApp</h5>
            <div className={styles.image}>
              <Image src={climapp} alt='ClimApp' width='auto' height='180' />
            </div>
            <article className={styles.article}>
              <p>
                Es la version 1.0 de una app del clima.
              </p>
              <p>
                Se puede realizar busqueda de ciudades dandole datos del clima actual, como estado del
                tiempo, temperatura, pronostico, presion y humedad.
              </p>
              <p>
                Por otro lado el fondo cambia segun el estado del tiempo de
                la ciudad buscada.
              </p>
              <br />
              <hr />
              <h4>
                Tecnologias utilizadas:
              </h4>
              <div className={styles.log}>
                <div className={styles.div}>
                  <Image src={html} alt='html 5' width='auto' height='30' />
                  <h6>
                    HTML 5
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={js} alt='JavaScript' width='auto' height='30' />
                  <h6>
                    JavaScript
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={react} alt='React' width='auto' height='30' />
                  <h6>
                    ReactJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={redux} alt='Redux' width='auto' height='30' />
                  <h6>
                    Redux
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={sass} alt='Sass' width='auto' height='30' />
                  <h6>
                    Sass
                  </h6>
                </div>
              </div>
            </article>
            <div className={styles.container_link}>
              <div className={styles.link}>
                <Link href='https://youtu.be/Jp9z--CSqeI' target='_blank'>
                  <Image src={tube} alt='tube' width='40' height='auto' />
                </Link>
                <h5>Video</h5>
              </div>
              <div className={styles.link}>
                <Link href='https://clim-app-spa.vercel.app/' target='_blank'>
                  <Image src={link} alt='link' width='20' height='auto' />
                </Link>
                <h5>Enlace</h5>
              </div>
            </div>
          </div>
          <div className={styles.pro}>
            <h5 className={styles.h5}>Let´s cook!</h5>
            <div className={styles.image}>
              <Image src={letscook} alt='let´s cook' width='auto' height='180' />
            </div>
            <article className={styles.article}>
              <p>
                Es una app de recetas de comida junto con información relevante de las mismas utilizando la api externa spoonacular y a partir de ella poder, entre otras cosas:
              </p>
              <p>
                Buscar recetas || Filtrarlos / Ordenarlos || Crear nuevas recetas propias
              </p>
              <br />
              <hr />
              <h4>
                Tecnologias utilizadas:
              </h4>
              <div className={styles.log}>
                <div className={styles.div}>
                  <Image src={html} alt='html 5' width='auto' height='30' />
                  <h6>
                    HTML 5
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={css} alt='css 3' width='auto' height='30' />
                  <h6>
                    CSS Module
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={js} alt='JavaScript' width='auto' height='30' />
                  <h6>
                    JavaScript
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={react} alt='React' width='auto' height='30' />
                  <h6>
                    ReactJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={redux} alt='Redux' width='auto' height='30' />
                  <h6>
                    Redux
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={nodejs} alt='Node.js' width='auto' height='30' />
                  <h6>
                    NodeJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={express} alt='Express' width='auto' height='30' />
                  <h6>
                    ExpressJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={postgres} alt='PostgreSQL' width='auto' height='30' />
                  <h6>
                    PostgreSQL
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={sequelize} alt='Sequelize' width='auto' height='30' />
                  <h6>
                    Sequelize
                  </h6>
                </div>
              </div>
            </article>
            <div className={styles.container_link}>
              <div className={styles.link}>
                <Link href='https://' target='_blank'>
                  <Image src={tube} alt='tube' width='40' height='auto' />
                </Link>
                <h5>Video</h5>
              </div>
              <div className={styles.link}>
                <Link href='https://pi-food-back.up.railway.app' target='_blank'>
                  <Image src={link} alt='link' width='20' height='auto' />
                </Link>
                <h5>Enlace</h5>
              </div>
            </div>
          </div>
          <div className={styles.pro}>
            <h5 className={styles.h5}>Dogs World</h5>
            <div className={styles.image}>
              <Image src={dog} alt='DogWorld' width='auto' height='180' />
            </div>
            <article className={styles.article}>
              <p>
                Es una app de razas de perros junto con información relevante de cada una de ellas utilizando la api externa APIDOG y a partir de ella poder, entre otras cosas:
              </p>
              <p>
                Buscar razas|| Filtrarlas / Ordenarlas || Crear nuevas propias
              </p>
              <br />
              <hr />
              <h4>
                Tecnologias utilizadas:
              </h4>
              <div className={styles.log}>
                <div className={styles.div}>
                  <Image src={html} alt='html 5' width='auto' height='30' />
                  <h6>
                    HTML 5
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={sc} alt='Styled Components' width='auto' height='30' />
                  <h6>
                    Styled Components
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={js} alt='JavaScript' width='auto' height='30' />
                  <h6>
                    JavaScript
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={react} alt='React' width='auto' height='30' />
                  <h6>
                    ReactJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={redux} alt='Redux' width='auto' height='30' />
                  <h6>
                    Redux
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={nodejs} alt='Node.js' width='auto' height='30' />
                  <h6>
                    NodeJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={express} alt='Express' width='auto' height='30' />
                  <h6>
                    ExpressJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={postgres} alt='PostgreSQL' width='auto' height='30' />
                  <h6>
                    PostgreSQL
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={sequelize} alt='Sequelize' width='auto' height='30' />
                  <h6>
                    Sequelize
                  </h6>
                </div>
              </div>
            </article>
            <div className={styles.container_link}>
              <div className={styles.link}>
                <Link href='https://' target='_blank'>
                  <Image src={tube} alt='tube' width='40' height='auto' />
                </Link>
                <h5>Video</h5>
              </div>
              <div className={styles.link}>
                <Link href='project-dog-jotape.up.railway.app' target='_blank'>
                  <Image src={link} alt='link' width='20' height='auto' />
                </Link>
                <h5>Enlace</h5>
              </div>
            </div>
          </div>
          <div className={styles.pro}>
            <h5 className={styles.h5}>Gimme A Ride</h5>
            <div className={styles.image}>
              <Image src={gimme} alt='let´s cook' width='auto' height='180' />
            </div>
            <article className={styles.article}>
              <p>
                Es una aplicación de viaje compartido. Con la ayuda de las aplicaciones móviles ofrecen no solo comodidad, sino más claridad y seguridad que simplemente tomar un automóvil en la calle.
              </p>
              <p>
                Se ofrece una interfaz bilingüe Inglés-Castellano (inglés como idioma primario). Nuestro país es visitado por turistas de todo el mundo, por lo que agregar estos dos idiomas en la aplicación es algo muy interesante y valioso.
              </p>
              <p>
                Al revisar la lista de características de la aplicación, hay tres partes que participan en el viaje: un conductor, un pasajero y un mediador (administrador).
              </p>
              <br />
              <hr />
              <h4>
                Tecnologias utilizadas:
              </h4>
              <div className={styles.log}>
                <div className={styles.div}>
                  <Image src={html} alt='html 5' width='auto' height='30' />
                  <h6>
                    HTML 5
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={css} alt='css 3' width='auto' height='30' />
                  <h6>
                    CSS Module
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={js} alt='JavaScript' width='auto' height='30' />
                  <h6>
                    JavaScript
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={react} alt='React' width='auto' height='30' />
                  <h6>
                    ReactJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={redux} alt='Redux' width='auto' height='30' />
                  <h6>
                    Redux
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={nodejs} alt='Node.js' width='auto' height='30' />
                  <h6>
                    NodeJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={express} alt='Express' width='auto' height='30' />
                  <h6>
                    ExpressJS
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={postgres} alt='PostgreSQL' width='auto' height='30' />
                  <h6>
                    PostgreSQL
                  </h6>
                </div>
                <div className={styles.div}>
                  <Image src={sequelize} alt='Sequelize' width='auto' height='30' />
                  <h6>
                    Sequelize
                  </h6>
                </div>
              </div>
            </article>
            <div className={styles.container_link}>
              <div className={styles.link}>
                <Link href='https://' target='_blank'>
                  <Image src={tube} alt='tube' width='40' height='auto' />
                </Link>
                <h5>Video</h5>
              </div>
              <div className={styles.link}>
                <Link href='https://gimmearide.vercel.app/' target='_blank'>
                  <Image src={link} alt='link' width='20' height='auto' />
                </Link>
                <h5>Enlace</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
