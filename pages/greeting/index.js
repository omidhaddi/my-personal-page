import Typewriter from 'typewriter-effect'
import Navbar from '../../components/Navbar'

export default function Greeting() {

    return (
        <>
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