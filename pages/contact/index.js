import Head from "next/head";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import db from "../../database"

export default function Contact({ allMessages }) {

    return (
        <>
            <Head>
                <title>contact</title>
            </Head>
            <Navbar />
            <h1 className="m-3">Contact me</h1>
            <h5 className="text-danger m-3 ms-5">Please fill all field </h5>
            <form action='/api' method="POST">
                <div class="row ">
                    <div class="col-4 ms-5">
                        <input type="text" class="form-control" placeholder="Your name" name="name" />
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Your email" name="email" />
                        <br />
                    </div>
                    <div class="col-8 ms-5">
                        <input type="text" class="form-control" placeholder="Subject" name="title" />
                        <br />
                    </div>
                    <div class="form-floating col-8 ms-5">
                        <textarea class="form-control" placeholder="Leave a comment here" id="message" name="message" style={{ height: "200px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div>
                </div>
                <br />
                <div>
                    <input className="btn btn-primary col-4 mx-auto ms-5" type="submit" value="Send" />
                </div>
            </form>
            <br />
            <br />
            <br />
            <div className="row ms-3">
                {allMessages.map(message => <Card key={message.id} message={message} />)}
            </div>
        </>
    )
}

export async function getServerSideProps(req, res) {

    const messages = await db.Message.findAll()
    const allMessages = JSON.parse(JSON.stringify(messages))

    return {

        props: { allMessages }
    }
}