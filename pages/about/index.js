import Image from "next/image";
import pic from '../../public/images/pic.jpg'
import styles from '../../styles/About.module.css'
import Typewriter from 'typewriter-effect'
import Navbar from "../../components/Navbar";
import Head from "next/head";




export default function About() {

    return (
        <>
            <Head>
                <title>about me</title>
            </Head>
            <Navbar />
            <div class="container-fluid py-5" id="about">
                <div class="container">
                    <div
                        class="position-relative d-flex align-items-center justify-content-center"
                    >
                        <h1
                            class="display-1 text-uppercase text-white"
                        >
                            About
                        </h1>
                        <h1 class="position-absolute text-uppercase text-primary">
                            About Me
                        </h1>
                    </div>
                    <div className={styles.main}>
                        <div >
                            <Image src='https://res.cloudinary.com/dgxasrrac/image/upload/v1672174728/personal-pics/pic_iukdmp.jpg'
                                alt="" height={500} width={500} style={{ borderRadius: '250px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4 text-secondary fs-4">
                                Civil Engineer,Project Manager & Web Developer
                            </h3>
                            <div className="text-black font-weight-normal fs-4 mb-5">
                                <Typewriter
                                    options={{
                                        strings: ['With 10 years of experience'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">Name: <span className="text-secondary fs-4">Omid Haddi</span></h6>
                                </div>
                                <br />
                                <div class="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">
                                        Birthday: <span className="text-secondary fs-4">4 Noveber 1984</span>
                                    </h6>
                                </div>
                                <br />
                                <div class="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">Degree: <span className="text-secondary fs-4">Master of Engineering</span></h6>
                                </div>
                                <br />
                                <div class="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">
                                        Experience: <span className="text-secondary fs-4">10 Years</span>
                                    </h6>
                                </div>
                                <br />
                                <div class="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">
                                        Phone: <span className="text-secondary fs-4">+39 331 256 2485</span>
                                    </h6>
                                </div>
                                <br />
                                <div class="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">
                                        Email: <span className="text-secondary fs-4">omid.haddi@gmail.com</span>
                                    </h6>
                                </div>
                                <br />
                                <div className="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">
                                        Address:
                                        <span className="text-secondary fs-4">Mantova, Lombardia , Italy</span>
                                    </h6>
                                </div>
                                <br />
                                <div className="col-sm-6 ">
                                    <h6 className="text-secondary fs-4 mb-5">
                                        Freelance: <span className="text-secondary fs-4">Available</span>
                                    </h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )



}