import "./Navbar.css";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#23942c" }}
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <a className="navbar-brand text-white h1 my-auto" href="/">
                    FoodSync
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <a
                                className="nav-link active text-white"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a
                                className="nav-link text-white"
                                href="#sobre_nos"
                            >
                                Sobre nós
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a
                                className="nav-link text-white"
                                href="#fale_conosco"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                    <a
                        className="nav-link text-white"
                        href="https://www.youtube.com/watch?v=rQJPT7P9F7Q"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
