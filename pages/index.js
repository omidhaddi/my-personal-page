import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import myPic from '../public/images/myPic.jpg'

export default function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className={styles.main2}
        style={{
          backgroundImage: `url(${myPic.src})`,
          width: '100vw',
          height: '94vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <br />
        <div className="text-left" style={{ marginLeft: '500px' }} >
          <h3 className="text-black font-weight-normal fs-2">I&apos;m</h3>
          <h1
            className="text-uppercase text-primary mb-2 fs-1"
          >
            <strong>Omid Haddi</strong>
          </h1>
          <div className="text-black font-weight-normal fs-4">
            <Typewriter
              options={{
                strings: ['Civil Engineer', 'Project Manager', 'Web Developer'],
                autoStart: true,
                loop: true,

              }}
            />
          </div>
        </div>

      </div>
    </>
  )
}
