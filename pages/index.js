import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
// import myPic from '../public/images/myPic.jpg'

export default function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />

      <div className={styles.main2}>
        <div className="text-left"  >
          <h3 className="text-black font-weight-normal fs-2">I&apos;m</h3>
          <h1
            className="text-uppercase  mb-2 fs-1"
          >
            <strong className='text-primary fs-2'>Omid</strong ><strong className='text-danger fs-2'> Haddi</strong>
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
