import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import Navbar from '../../components/Navbar'

export default function Greeting() {

    return (
        <>
        <Head>
            <title>greeting</title>
        </Head>
            <Navbar />
            <div className="font-weight-bold fs-1 center"
                style={{
                    textAlign: "center",
                    marginTop: "300px",
                    fontFamily: "auto",
                    color: "rebeccapurple"
                }}>
                <Typewriter
                    options={{
                        strings: ['Thanks for your message'],
                        autoStart: true,
                        loop: true,

                    }}
                />
            </div>

        </>
    )



}