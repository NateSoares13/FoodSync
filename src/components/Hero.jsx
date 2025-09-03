import "./Hero.css";
import { useNavigate } from "react-router-dom";
import foodsync_horizontal from "../assets/foodsync_horizontal.png";

function Hero() {
    const navigate = useNavigate();

    const handleDonateClick = () => {
        navigate("/login");
    };

    return (
        <div className="d-flex justify-content-center align-items-center align-self-center vh-100">
            <div className="d-flex flex-column">
                <img src={foodsync_horizontal} alt="FoodSync" />
                <p className="text-white">
                    Conectando doações. Alimentando Esperanças.
                </p>
                <button
                    className="btn text-white w-75 m-auto"
                    style={{ backgroundColor: "#23942c" }}
                    onClick={handleDonateClick}
                >
                    Quero doar!
                </button>
            </div>
        </div>
    );
}

export default Hero;
