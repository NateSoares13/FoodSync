import "./Home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <div id="quero_doar" className="vh-100">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Contact />
        </>
    );
}

export default Home;
