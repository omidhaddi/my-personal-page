import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Omid Haddi
          </Link>
          <div className="collapse navbar-collapse">
            <Link className="nav-link active" aria-current="page" href="/">
              Home
            </Link>
          </div>
          <div
            className="collapse navbar-collapse "
            id="navbarNavAltMarkup"
            style={{ justifyContent: "space-around" }}
          >
            <Link className="nav-link" href="/about">
              About Me
            </Link>
            <Link className="nav-link" href="/experiences">
              My Experience
            </Link>
            <Link className="nav-link" href="/educations">
              My Education
            </Link>
            <Link className="nav-link" href="/skills">
              My Skills
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" href="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
