import "./Login.css";
import foodsync from "../assets/foodsync.png";
import foodsync_vertical from "../assets/foodsync_vertical.png";
import backgroundImage from "../assets/background.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        login: yup.string().required("Seu CPF/CNPJ é obrigatório!"),
        senha: yup.string().required("Sua senha é obrigatória!"),
    })
    .required();

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register");
    };

    const handleLoginSubmit = (data) => {
        localStorage.setItem("usuarioLogado", "true");
        console.log(data);
        navigate("/dashboard");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                        id="login_esquerda"
                        className="justify-content-center align-items-center d-flex col-lg-7 text-white h-100 row"
                    >
                        <div className="d-flex flex-column col-lg-6 col-md-8 col-10">
                            <img
                                className="d-block mx-auto ms-0 mb-4"
                                src={foodsync_vertical}
                                alt="FoodSync"
                            />
                            <div>
                                <p>
                                    Somos a FoodSync, uma iniciativa que nasceu
                                    com o propósito de unir tecnologia,
                                    responsabilidade social e sustentabilidade.
                                    Nosso principal objetivo é combater a
                                    insegurança alimentar por meio de uma
                                    plataforma que conecta doadores de alimentos
                                    como restaurantes, padarias e residências a
                                    organizações que realizam a redistribuição
                                    para pessoas em situação de vulnerabilidade.
                                    Acreditamos que a tecnologia pode ser uma
                                    grande aliada na luta contra a fome e o
                                    desperdício. Por isso, desenvolvemos uma
                                    solução que facilita a identificação de
                                    pontos de coleta de alimentos, tornando o
                                    processo mais ágil, eficiente e acessível.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-content-center align-items-center d-flex col-lg-5 text-white h-100 row">
                        <form
                            className="d-flex flex-column w-75"
                            onSubmit={handleSubmit(handleLoginSubmit)}
                        >
                            <img
                                className="d-block mx-auto mb-5"
                                src={foodsync}
                                alt="FoodSync"
                            />
                            <input
                                type="text"
                                name="login"
                                className="border rounded form-control mb-2 mt-5"
                                placeholder="Seu CPF/CNPJ"
                                {...register("login")}
                            />
                            {errors.login && (
                                <p style={{ color: "red" }}>
                                    {errors.login?.message}
                                </p>
                            )}
                            <input
                                type="password"
                                name="senha"
                                className="border rounded form-control mt-2"
                                placeholder="Sua senha"
                                {...register("senha")}
                            />
                            {errors.senha && (
                                <p style={{ color: "red" }}>
                                    {errors.senha?.message}
                                </p>
                            )}
                            <br className="mt-5" />
                            <button
                                type="submit"
                                id="btn_entrar"
                                className="btn p-2 text-white mb-2 mt-5"
                            >
                                Entrar
                            </button>
                            <button
                                id="btn_criar_conta"
                                className="btn p-2 text-body mt-2"
                                onClick={handleRegisterClick}
                            >
                                Não tenho uma conta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
