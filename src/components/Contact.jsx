import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegex = /^(?:\(\d{2}\) \d{4,5}-\d{4}|\(\d{2}\) \d{4}-\d{4})$/;

const schema = yup
    .object({
        nome: yup.string().required("O nome é obrigatório!"),
        email: yup
            .string()
            .email("E-mail inválido!")
            .required("O e-mail é obrigatório!"),
        telefone: yup.string().matches(phoneRegex, "Telefone inválido!"),
        mensagem: yup.string().required("A mensagem é obrigatória"),
    })
    .required();

function Contact() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const aplicarMascaraTelefone = (raw) => {
        let value = raw.replace(/\D/g, "");
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            value = value.replace(/(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d{5})(\d)/, "$1-$2");
        }
        return value;
    };

    function saveContact(data) {
        console.log(data);
    }

    return (
        <div id="fale_conosco" className="container py-5">
            <div className="row g-4">
                <div className="col-md-7 me-5">
                    <h2 className="fw-bold mb-4">Fale Conosco</h2>
                    <p className="mb-4">
                        Tem dúvidas, sugestões ou precisa de ajuda? Envie sua
                        mensagem e responderemos em breve.
                    </p>
                    <form onSubmit={handleSubmit(saveContact)}>
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control"
                                    placeholder="Seu Nome"
                                    {...register("nome")}
                                />
                                {errors.nome && (
                                    <p style={{ color: "red" }}>
                                        {errors.nome?.message}
                                    </p>
                                )}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">E-mail</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="seuemail@exemplo.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p style={{ color: "red" }}>
                                        {errors.email?.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefone</label>
                            <input
                                type="text"
                                name="telefone"
                                className="form-control"
                                placeholder="(11) 91234-5678"
                                {...register("telefone", {
                                    onChange: (e) => {
                                        const masked = aplicarMascaraTelefone(
                                            e.target.value
                                        );
                                        e.target.value = masked;
                                        setValue("telefone", masked, {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                        });
                                    },
                                })}
                            />
                            {errors.telefone && (
                                <p style={{ color: "red" }}>
                                    {errors.telefone?.message}
                                </p>
                            )}
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
                                {...register("mensagem")}
                            ></textarea>
                            {errors.mensagem && (
                                <p style={{ color: "red" }}>
                                    {errors.mensagem?.message}
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
