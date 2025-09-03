import "./Contact.css";
import { useState } from "react";
import { validarNome, validarMensagem } from "../utils/validation";

function Contact() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nomeValido = validarNome(formData.nome);
        const mensagemValida = validarMensagem(formData.mensagem);

        if (nomeValido && mensagemValida) {
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                mensagem: "",
            });
        } else {
            setErrors({
                nome: nomeValido
                    ? ""
                    : "Nome é obrigatório e deve conter pelo menos 2 caracteres",
                mensagem: mensagemValida
                    ? ""
                    : "Mensagem é obrigatória e deve conter pelo menos 10 caracteres",
            });
        }
    };

    return (
        <div id="fale_conosco" className="container py-5">
            <div className="row g-4">
                <div className="col-md-7 me-5">
                    <h2 className="fw-bold mb-4">Fale Conosco</h2>
                    <p className="mb-4">
                        Tem dúvidas, sugestões ou precisa de ajuda? Envie sua
                        mensagem e responderemos em breve.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control"
                                    placeholder="Seu Nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.nome && (
                                    <p style={{ color: "red" }}>
                                        {errors.nome}
                                    </p>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="seuemail@exemplo.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefone</label>
                            <input
                                type="tel"
                                name="telefone"
                                className="form-control"
                                placeholder="(11) 91234-5678"
                                value={formData.telefone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="mensagem">
                                Mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                className="form-control"
                                rows="5"
                                placeholder="Digite sua mensagem aqui..."
                                value={formData.mensagem}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.mensagem && (
                                <p style={{ color: "red" }}>
                                    {errors.mensagem}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn px-4 py-2"
                            style={{
                                backgroundColor: "#23942c",
                                color: "white",
                            }}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="bg-body-secondary p-4 rounded shadow-sm">
                        <h4 className="fw-bold mb-2">Central de Atendimento</h4>
                        <p>
                            <i
                                className="bi bi-telephone fs-5 me-2"
                                style={{ color: "#23942c" }}
                            ></i>
                            <strong>+55 (11) 99264-9785</strong>
                        </p>
                        <p>
                            <i
                                className="bi bi-envelope fs-5 me-2"
                                style={{ color: "#23942c" }}
                            ></i>
                            <strong>foodsync@gmail.com</strong>
                        </p>
                        <p>
                            <i
                                className="bi bi-clock fs-5 me-2"
                                style={{ color: "#23942c" }}
                            ></i>
                            <strong>Horário de Atendimento</strong>
                            <br />
                            <span className="d-block mt-2">
                                Seg a Sex, das 9h às 22h
                            </span>
                            <span className="d-block">
                                Sáb e feriados: 10h às 14h
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
