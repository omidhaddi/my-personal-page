import Image from "next/image"
import Typewriter from 'typewriter-effect'
import Navbar from "../../components/Navbar";
import Head from "next/head"
import faceBook from '../../public/images/facebook.png'
import instagram from '../../public/images/instagram.png'
import linkedin from '../../public/images/inkedin.png'
import twitter from '../../public/images/twitter.png'
import github from '../../public/images/github.png'
import Link from "next/link"




export default function About() {

    return (
        <>
            <Head>
                <title>about me</title>
            </Head>
            <Navbar />
            <div class="container-fluid py-5" id="about">
                <div class="container">
                    <div class=" d-flex align-items-center justify-content-center">
                        <h1 class="text-uppercase text-primary">
                            <strong>About Me</strong>
                        </h1>
                    </div>
                    <div class="d-sm-flex flex-row-reverse mb-3">
                        <div>
                            <Image class="img-fluid img-thumbnail rounded mx-auto d-block my-4" src='https://res.cloudinary.com/dgxasrrac/image/upload/v1672174728/personal-pics/pic_iukdmp.jpg'
                                alt="my pic" height={500} width={500} />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4 text-secondary fs-4 mt-5">
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
            <div class="container text-center">
                <Link className="mx-2 mb-3" href='https://www.facebook.com/haddi.omid/' target='_blank'>
                    <Image src={faceBook} alt='facebook' height={50} width={50} />
                </Link>
                <Link className="mx-2 mb-3" href='https://www.instagram.com/haddi_omid/' target='_blank'>
                    <Image src={instagram} alt='instagram' height={50} width={50} />
                </Link>
                <Link className="mx-2 mb-3" href='https://www.linkedin.com/in/omid-haddi-155581106/' target='_blank'>
                    <Image src={linkedin} alt='linkedin' height={50} width={50} />
                </Link>
                <Link className="mx-2 mb-3" href='https://twitter.com/omidhaddi' target='_blank'>
                    <Image src={twitter} alt='twitter' height={50} width={50} />
                </Link>
                <Link className="mx-2 mb-3" href='https://github.com/omidhaddi' target='_blank'>
                    <Image src={github} alt='github' height={50} width={50} />
                </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}