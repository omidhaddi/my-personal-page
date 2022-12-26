import Navbar from "../../components/Navbar";

export default function Contact() {

    return (
        <>
            <Navbar />
            <h1 className="m-3">Contact me</h1>

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
                <input className="btn btn-primary col-4 mx-auto ms-5" type="submit" value="Send"  />
                </div>
            </form>
        </>
    )


}