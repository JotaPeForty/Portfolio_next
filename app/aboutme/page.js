import styles from '../../styles/modules/aboutme.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BigShouldersDisplay } from '../../styles/fonts.js'
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
import git from '../../public/icons/git.png'
import next from '../../public/icons/nextjs.png'
import sc from '../../public/icons/styled-components.png'
import npm from '../../public/icons/Npm.png'
import axios from '../../public/icons/axios.png'
import postman from '../../public/icons/postman.png'
import salesforce from '../../public/icons/salesforce.png'
import apex from '../../public/icons/apex.png'
import github from '../../public/icons/github.png'
import wordpress from '../../public/icons/wordpress.png'
import coreldraw from '../../public/icons/corel-draw.png'
import Dreamweaver from '../../public/icons/Dreamweaver.png'
import photoshop from '../../public/icons/photoshop.png'
import lightroom from '../../public/icons/lightroom.png'
import flash from '../../public/icons/flash.png'
import illustrator from '../../public/icons/illustrator.png'
import spark from '../../public/icons/spark.png'
import premiere from '../../public/icons/premiere_pro.png'
import audition from '../../public/icons/audition.png'
import captivate from '../../public/icons/captivate.png'
import adap from '../../public/icons/Soft/Adaptabilidad.png'
import auto from '../../public/icons/Soft/Automotivacion.png'
import com from '../../public/icons/Soft/Comunicacion.png'
import crea from '../../public/icons/Soft/Creatividad.png'
import deper from '../../public/icons/Soft/Desarrollo_Personal.png'
import empa from '../../public/icons/Soft/Empatía.png'
import esac from '../../public/icons/Soft/Escucha_Activa.png'
import flex from '../../public/icons/Soft/Flexibilidad.png'
import gesti from '../../public/icons/Soft/Gestion_del_Tiempo.png'
import ini from '../../public/icons/Soft/Iniciativa.png'
import men from '../../public/icons/Soft/Mentalidad_Abierta.png'
import opti from '../../public/icons/Soft/Optimismo.png'
import puntu from '../../public/icons/Soft/Puntualidad.png'
import resoc from '../../public/icons/Soft/Resolucion_de_Conflicto.png'
import resop from '../../public/icons/Soft/Resolucion_de_Problema.png'
import trae from '../../public/icons/Soft/Trabajo_en_Equipo.png'
import volu from '../../public/icons/Soft/Voluntad_de_Aprender.png'



export default function AboutMe()
{
  return (
    <>
      <div className={styles.container}>
        <article className={styles.art}>
          <div className={styles.title1}>
            <hr className={styles.hr} />
            <h1 className={BigShouldersDisplay.className}>INTRODUCCION</h1>
            <hr />
          </div>
          <br />
          <p>
            👉Hola, mi nombre es Juan Pablo, siempre curioso y con facilidad para
            aprender, gracias a eso he adquirido muchos conocimientos y con aun
            más por descubrir! Siendo un gran entusiasta de la tecnología desde el
            primer curso.{' '}
          </p>
          <br />
          <p>
            Me orienté hacia el diseño y desarrollo web. Comencé en 1997
            aprendiendo lo básico de manejo de PC, luego reparación de pc (2003)y
            redes, ahí descubrí el diseño y aprendí de forma autodidacta algunas
            herramientas, hasta mi primer curso de diseño web (2009). En el 2005
            curse el ingreso a ingeniería en Computación, no pudiendo ingresar por
            temas de fuerza mayor.
          </p>
          <br />
          <p>
            Luego en el 2013 curse la carrera de Técnico Superior en Fotografía,
            que me dio más herramientas y experiencia en diseño.
          </p>
          <br />
          <p>
            En mis años como supervisor en una empresa, me dio la experiencia de
            transformar un sector de esta y formar un equipo de trabajo excelente
            como así también aprender y hacer crecer mis soft skills,
            (Adaptabilidad, Resolución de problemas, Creatividad, Liderazgo,
            Trabajo en equipo).
          </p>
          <br />
          <p>
            Hoy ya terminado (2021) un el bootcamp de soyhenry, y retomando mi
            camino inicial le sumo los siguientes conocimientos JavaScript, React,
            Redux, NodeJs, Express, PostgreSQL y aún más lenguajes por seguir
            aprendiendo, es momento de poner mi experiencia junto a mis
            conocimientos a disposición de quien la requiera y comenzar una nueva
            etapa, logrando reunir todo lo aprendido con el fin de poder crecer
            como desarrollador, por eso estoy en búsqueda de ese grupo de trabajo
            que me brinde la oportunidad de demostrarle mis aptitudes y
            predisposición para llevar a cabo los objetivos propuestos
          </p>
        </article>
        <div className={styles.contlogos}>
          <div className={styles.title2}>
            <hr className={styles.hr} />
            <h1 className={BigShouldersDisplay.className}>TECNOLOGIAS Y HERRAMIENTAS</h1>
            <hr />
          </div>
          <div className={styles.logos}>
            <div className={styles.div}>
              <Link href='https://html5.org/' target='_blank'>
                <Image src={html} alt='html 5' width='auto' height='40' />
              </Link>
              <h5>
                HTML 5
              </h5>
            </div>
            <div className={styles.div}>
              <Link
                href='https://developer.mozilla.org/es/docs/Web/CSS'
                target='_blank'
              >
                <Image src={css} alt='css 3' width='auto' height='40' />
              </Link>
              <h5>
                CSS 3
              </h5>
            </div>
            <div className={styles.div}>
              <Link
                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                target='_blank'
              >
                <Image src={js} alt='JavaScript' width='auto' height='40' />
              </Link>
              <h5>
                JavaScript
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                <Image src={react} alt='React' width='auto' height='40' />
              </Link>
              <h5>
                ReactJS
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://redux.js.org/' target='_blank'>
                <Image src={redux} alt='Redux' width='auto' height='40' />
              </Link>
              <h5>
                Redux
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://nodejs.org/en/' target='_blank'>
                <Image src={nodejs} alt='Node.js' width='auto' height='40' />
              </Link>
              <h5>
                NodeJS
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://expressjs.com/' target='_blank'>
                <Image src={express} alt='Express' width='auto' height='40' />
              </Link>
              <h5>
                ExpressJS
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.postgresql.org/' target='_blank'>
                <Image src={postgres} alt='PostgreSQL' width='auto' height='40' />
              </Link>
              <h5>
                PostgreSQL
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://sequelize.org/' target='_blank'>
                <Image src={sequelize} alt='Sequelize' width='auto' height='40' />
              </Link>
              <h5>
                Sequelize
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://sass-lang.com/' target='_blank'>
                <Image src={sass} alt='Sass' width='auto' height='40' />
              </Link>
              <h5>
                Sass
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://git-scm.com/' target='_blank'>
                <Image src={git} alt='Git' width='auto' height='40' />
              </Link>
              <h5>
                Git
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://nextjs.org' target='_blank'>
                <Image src={next} alt='Next' width='auto' height='40' />
              </Link>
              <h5>
                Next.js
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://styled-components.com/' target='_blank'>
                <Image src={sc} alt='Styled Components' width='auto' height='40' />
              </Link>
              <h5>
                Styled Components
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.npmjs.com/' target='_blank'>
                <Image src={npm} alt='Npm' width='auto' height='20' />
              </Link>
              <h5>
                Npm
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://axios-http.com/docs/intro' target='_blank'>
                <Image src={axios} alt='Npm' width='auto' height='40' />
              </Link>
              <h5>
                Axios
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.postman.com/' target='_blank'>
                <Image src={postman} alt='Postman' width='auto' height='40' />
              </Link>
              <h5>
                Postman
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.salesforce.com/' target='_blank'>
                <Image src={salesforce} alt='salesforce' width='auto' height='40' />
              </Link>
              <h5>
                Salesforce
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.salesforce.com/' target='_blank'>
                <Image src={apex} alt='apex' width='auto' height='40' />
              </Link>
              <h5>
                Apex
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.github.com/' target='_blank'>
                <Image src={github} alt='github' width='auto' height='40' />
              </Link>
              <h5>
                Github
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.wordpress.com/' target='_blank'>
                <Image src={wordpress} alt='wordpress' width='auto' height='40' />
              </Link>
              <h5>
                Wordpress
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.corel.com/' target='_blank'>
                <Image src={coreldraw} alt='corel draw' width='auto' height='40' />
              </Link>
              <h5>
                Corel Draw
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={Dreamweaver} alt='Dreamweaver' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Dreamweaver
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={photoshop} alt='Photoshop' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Photoshop
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={lightroom} alt='lightroom' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Lightroom
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={flash} alt='flash' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Flash
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={illustrator} alt='illustrator' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Illustrator
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={spark} alt='spark' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Spark
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={premiere} alt='premiere pro' width='auto' height='40' />
              </Link>
              <h5>
                Adobe premiere pro
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={audition} alt='audition' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Audition
              </h5>
            </div>
            <div className={styles.div}>
              <Link href='https://www.adobe.com/' target='_blank'>
                <Image src={captivate} alt='captivate' width='auto' height='40' />
              </Link>
              <h5>
                Adobe Captivate
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.contlogos}>
          <div className={styles.title2}>
            <hr className={styles.hr} />
            <h1 className={BigShouldersDisplay.className}>SOFT SKILL</h1>
            <hr />
          </div>
          <div className={styles.logos}>
            <div className={styles.div}>
                <Image src={adap} alt='Adaptabilidad' width='auto' height='50' />
              <h5>
                Adaptabilidad
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={auto} alt='Automotivacion' width='auto' height='50' />
              <h5>
              Automotivacion              </h5>
            </div>
            <div className={styles.div}>
                <Image src={com} alt='Comunicacion' width='auto' height='50' />
              <h5>
              Comunicacion
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={crea} alt='Creatividad' width='auto' height='50' />
              <h5>
              Creatividad
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={deper} alt='Desarrollo Personal' width='auto' height='50' />
              <h5>
              Desarrollo Personal
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={empa} alt='Empatía' width='auto' height='50' />
              <h5>
              Empatía
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={esac} alt='Escucha Activa' width='auto' height='50' />
              <h5>
              Escucha Activa              </h5>
            </div>
            <div className={styles.div}>
                <Image src={flex} alt='Flexibilidad' width='auto' height='50' />
              <h5>
              Flexibilidad
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={gesti} alt='Gestion del Tiempo' width='auto' height='50' />
              <h5>
              Gestion del Tiempo
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={ini} alt='Iniciativa' width='auto' height='50' />
              <h5>
              Iniciativa
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={men} alt='Mentalidad Abierta' width='auto' height='50' />
              <h5>
              Mentalidad Abierta
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={opti} alt='Optimismo' width='auto' height='50' />
              <h5>
              Optimismo              </h5>
            </div>
            <div className={styles.div}>
                <Image src={puntu} alt='Puntualidad' width='auto' height='50' />
              <h5>
              Puntualidad
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={resoc} alt='Resolucion de Conflicto' width='auto' height='50' />
              <h5>
              Resolucion de Conflicto
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={resop} alt='Resolucion de Problema' width='auto' height='50' />
              <h5>
              Resolucion de Problema
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={trae} alt='Trabajo en Equipo' width='auto' height='50' />
              <h5>
              Trabajo en Equipo
              </h5>
            </div>
            <div className={styles.div}>
                <Image src={volu} alt='Voluntad de Aprender' width='auto' height='50' />
              <h5>
              Voluntad de Aprender
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
