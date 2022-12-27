import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";



export default function Education() {

    return (
        <>
            <Head>
                <title>education</title>
            </Head>
            <Navbar />
            <h1 className="m-3">Academic Education</h1>
            <div class="row m-3 mt-4">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card border-danger">
                        <div class="card-body">
                            <h5 class="card-title">MASTER IN ENGINEERING MANAGEMENT</h5>
                            <p class="card-text">02/2019 – 05/2021 – Kocaeli University, Turkey</p>
                            <Link href="http://www.kocaeli.edu.tr/" target="_blank" style={{ textDecoration: "none" }}>University Web Site </Link>
                            <br />
                            <Link href="/files/ME.pdf" target="_blank" style={{ textDecoration: "none" }}>Document </Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card border-danger">
                        <div class="card-body">
                            <h5 class="card-title">MASTER OF BUSINESS ADMINISTRATION</h5>
                            <p class="card-text">03/2014 – 11/2016 – ISBM University, India</p>
                            <Link href="https://isbm.org.in/" target="_blank" style={{ textDecoration: "none" }}>University Web Site </Link>
                            <br />
                            <Link href="/files/MBA.pdf" target="_blank" style={{ textDecoration: "none" }}>Document </Link>
                        </div>
                    </div>
                    <br />
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card border-danger">
                        <div class="card-body">
                            <h5 class="card-title">BACHELOR OF CIVIL ENGINEERING</h5>
                            <p class="card-text">03/2005 – 12/2009 – Al Beroni University, Afghanistan</p>
                            <Link href="https://au.edu.af/" target="_blank" style={{ textDecoration: "none" }}>University Web Site </Link>
                            <br />
                            <Link href="/files/BSc.pdf" target="_blank" style={{ textDecoration: "none" }}>Document </Link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card border-danger">
                        <div class="card-body">
                            <h5 class="card-title">HIGH SCHOOL</h5>
                            <p class="card-text">03/2002 – 12/2004 – Hateti High School, Afghanistan</p>
                            <Link href="#" target="_blank" style={{ textDecoration: "none" }}>School Web Site </Link>
                            <br />
                            <Link href="/files/12th.pdf" target="_blank" style={{ textDecoration: "none" }}>Document </Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h1 className="m-3 mb-5">Certificates and Seminars</h1>
            <div class="row m-3 mt-4">
                <Link className="mb-3" href="/files/safety.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN GENERAL SAFETY AND HIGH RISK</strong>For.Ma. Formazione Mantova
                        2022 Mantua Italy
                    </li>
                </Link>
                <Link className="mb-3" href="/files/liber.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN PROJECT MANAGEMENT SOFTWARE PROJECT LIBER</strong>Middle East Technical University
                        2022 Turkey
                    </li>
                </Link>
                <Link className="mb-3" href="/files/bodyLang.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN EFFECTIVE COMMUNICATION STRATEGIES AND BODY LANGUAGE</strong>Istanbul Işletme Enstitutu
                        2020 Istanbul Turkey
                    </li>
                </Link>
                <Link className="mb-3" href="/files/PMbasic.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN BASIC INFORMATION ABOUT PROJECT MANAGEMENT</strong>Middle East Technical University
                        2020 Turkey
                    </li>
                </Link>
                <Link className="mb-3" href="/files/Managament.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN MANAGEMENT AND ORGANIZATION</strong>Istanbul Işletme Enstitutu
                        2020 Istanbul Turkey
                    </li>
                </Link>
                <Link className="mb-3" href="/files/leadership.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN LEADERSHIP</strong>Istanbul Işletme Enstitutu
                        2020 Istanbul Turkey
                    </li>
                </Link>
                <Link className="mb-3" href="/files/QC.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN CONSTRUCTION QUALITY MANAGEMENT</strong>Faculty of Engineering Kabul University
                        2011 kabul, Afghanistan
                    </li>
                </Link>
                <Link className="mb-3" href="/files/CPM.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN CONSTRUCTION MANAGEMENT</strong>Faculty of Engineering Kabul University
                        2011 kabul, Afghanistan
                    </li>
                </Link>
                <Link className="mb-3" href="/files/autoCad.pdf" style={{ textDecoration: "none" }} target="_blank">
                    <li class="card border-danger col-sm-9 mb-3 mb-sm-0 p-2">
                        <strong>CERTIFICATE IN AUTOCAD 2D-3D PROGRAM</strong>Kabul Polytechnic University
                        2010 kabul, Afghanistan
                    </li>
                </Link>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )

}