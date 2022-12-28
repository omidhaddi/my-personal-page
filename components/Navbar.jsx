import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-info">
        <div class="container-fluid">
          <Link class="navbar-brand me-5" href="/">
            <strong className="text-black fs-2">OMID</strong>
            <strong className="text-danger fs-2">Haddi</strong>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="nav-link active mx-5" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active mx-5"
                  aria-current="page"
                  href="/about"
                >
                  About me
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active mx-5"
                  aria-current="page"
                  href="/experiences"
                >
                  My Experience
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active mx-5"
                  aria-current="page"
                  href="/educations"
                >
                  My Education
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active mx-5"
                  aria-current="page"
                  href="/skills"
                >
                  My Skills
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active mx-5"
                  aria-current="page"
                  href="/contact"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
