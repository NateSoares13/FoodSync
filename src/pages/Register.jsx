import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Register.css";
import foodsync from "../assets/foodsync.png";
import foodsync_vertical from "../assets/foodsync_vertical.png";
import backgroundImage from "../assets/background.png";

const phoneRegex = /^(?:\(\d{2}\) \d{4,5}-\d{4}|\(\d{2}\) \d{4}-\d{4})$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const schemaDoador = yup
    .object({
        nome: yup.string().required("Nome é obrigatório!"),
        cpf: yup
            .string()
            .required("CPF é obrigatório!")
            .matches(cpfRegex, "CPF inválido!"),
        dataNascimento: yup
            .date()
            .nullable()
            .transform((value, originalValue) =>
                originalValue === "" ? null : value
            )
            .required("Data de nascimento é obrigatória!")
            .max(new Date(), "A data não pode estar no futuro!"),
        email: yup
            .string()
            .email("E-mail inválido!")
            .required("E-mail é obrigatório!"),
        telefone: yup.string().matches(phoneRegex, "Telefone inválido!"),
        endereco: yup.string().required("Endereço é obrigatório!"),
        senha: yup
            .string()
            .required("Senha é obrigatória!")
            .min(6, "A senha deve ter ao menos 6 caracteres!"),
    })
    .required();

const schemaReceptor = yup
    .object({
        nomeOrganizacao: yup
            .string()
            .required("Nome da organização é obrigatório!"),
        cnpj: yup
            .string()
            .required("CNPJ é obrigatório!")
            .matches(cnpjRegex, "CNPJ inválido!"),
        tipoOrganizacao: yup
            .string()
            .required("Selecione o tipo de organização!"),
        nomeResponsavel: yup
            .string()
            .required("Nome do responsável é obrigatório!"),
        emailInstitucional: yup
            .string()
            .email("E-mail inválido!")
            .required("E-mail institucional é obrigatório!"),
        telefoneReceptor: yup
            .string()
            .matches(phoneRegex, "Telefone inválido!"),
        enderecoColeta: yup
            .string()
            .required("Endereço de coleta é obrigatório!"),
        senhaReceptor: yup
            .string()
            .required("Senha é obrigatória!")
            .min(6, "A senha deve ter ao menos 6 caracteres!"),
    })
    .required();

function Register() {
    const [currentUserType, setCurrentUserType] = useState("doador");
    const schema = currentUserType === "doador" ? schemaDoador : schemaReceptor;
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    const navigate = useNavigate();

    const aplicarMascaraCPF = (raw) => {
        let value = raw.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return value;
    };

    const aplicarMascaraCNPJ = (raw) => {
        let value = raw.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
        return value;
    };

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

    const handleRegisterSubmit = (data) => {
        if (loading) return;
        setLoading(true);

        console.log(data);

        setTimeout(() => {
            alert(`Cadastro como ${currentUserType} realizado com sucesso!`);
            if (formRef.current) formRef.current.reset();
            setLoading(false);
        }, 1400);
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className="col-lg-7 d-flex justify-content-center align-items-center text-white row"
                    id="login_esquerda"
                >
                    <div className="d-flex flex-column col-lg-6 col-md-8 col-10">
                        <img
                            className="d-block mx-auto ms-0 mb-4"
                            src={foodsync_vertical}
                            alt="FoodSync vertical"
                        />
                        <p>
                            Somos a FoodSync, uma iniciativa que nasceu com o
                            propósito de unir tecnologia, responsabilidade
                            social e sustentabilidade. Nosso principal objetivo
                            é combater a insegurança alimentar por meio de uma
                            plataforma que conecta doadores de alimentos como
                            restaurantes, padarias e residências a organizações
                            que realizam a redistribuição para pessoas em
                            situação de vulnerabilidade. Acreditamos que a
                            tecnologia pode ser uma grande aliada na luta contra
                            a fome e o desperdício. Por isso, desenvolvemos uma
                            solução que facilita a identificação de pontos de
                            coleta de alimentos, tornando o processo mais ágil,
                            eficiente e acessível.
                        </p>
                    </div>
                </div>

                <div className="col-lg-5 d-flex justify-content-center align-items-center row">
                    <div
                        className="d-flex flex-column w-100 mx-auto px-3 px-md-4 px-lg-5"
                        style={{ maxWidth: 640 }}
                    >
                        <img
                            className="d-block mx-auto mb-5"
                            src={foodsync}
                            alt="FoodSync"
                        />

                        <div className="form-container">
                            <h2 className="form-title text-center">
                                Cadastro na Plataforma
                            </h2>
                            <p className="form-subtitle text-center">
                                Escolha se você é um doador ou receptor e
                                complete seu cadastro
                            </p>

                            <div
                                className="d-flex mb-4"
                                role="tablist"
                                aria-label="Tipo de usuário"
                            >
                                <button
                                    type="button"
                                    className={`btn flex-fill me-2 ${
                                        currentUserType === "doador"
                                            ? "btn-light shadow-sm"
                                            : "btn-outline-secondary"
                                    }`}
                                    onClick={() => setCurrentUserType("doador")}
                                    aria-pressed={currentUserType === "doador"}
                                >
                                    Doador
                                </button>

                                <button
                                    type="button"
                                    className={`btn flex-fill ${
                                        currentUserType === "receptor"
                                            ? "btn-light shadow-sm"
                                            : "btn-outline-secondary"
                                    }`}
                                    onClick={() =>
                                        setCurrentUserType("receptor")
                                    }
                                    aria-pressed={
                                        currentUserType === "receptor"
                                    }
                                >
                                    Receptor
                                </button>
                            </div>

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit(handleRegisterSubmit)}
                                className="fade-transition"
                                noValidate
                            >
                                {currentUserType === "doador" && (
                                    <div id="doadorForm">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nomeCompleto"
                                                name="nome"
                                                placeholder="Seu nome completo"
                                                {...register("nome")}
                                            />
                                            <label htmlFor="nomeCompleto">
                                                Nome Completo
                                            </label>
                                            {errors.nome && (
                                                <p style={{ color: "red" }}>
                                                    {errors.nome?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cpf"
                                                name="cpf"
                                                placeholder="000.000.000-00"
                                                {...register("cpf", {
                                                    onChange: (e) => {
                                                        const masked =
                                                            aplicarMascaraCPF(
                                                                e.target.value
                                                            );
                                                        e.target.value = masked;
                                                        setValue(
                                                            "cpf",
                                                            masked,
                                                            {
                                                                shouldValidate: true,
                                                                shouldDirty: true,
                                                            }
                                                        );
                                                    },
                                                })}
                                            />
                                            <label htmlFor="cpf">CPF</label>
                                            {errors.cpf && (
                                                <p style={{ color: "red" }}>
                                                    {errors.cpf?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="dataNascimento"
                                                name="dataNascimento"
                                                placeholder="Data de Nascimento"
                                                {...register("dataNascimento")}
                                            />
                                            <label htmlFor="dataNascimento">
                                                Data de Nascimento
                                            </label>
                                            {errors.dataNascimento && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.dataNascimento
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="seu@email.com"
                                                {...register("email")}
                                            />
                                            <label htmlFor="email">
                                                E-mail
                                            </label>
                                            {errors.email && (
                                                <p style={{ color: "red" }}>
                                                    {errors.email?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="telefone"
                                                name="telefone"
                                                placeholder="(00) 00000-0000"
                                                {...register("telefone", {
                                                    onChange: (e) => {
                                                        const masked =
                                                            aplicarMascaraTelefone(
                                                                e.target.value
                                                            );
                                                        e.target.value = masked;
                                                        setValue(
                                                            "telefone",
                                                            masked,
                                                            {
                                                                shouldValidate: true,
                                                                shouldDirty: true,
                                                            }
                                                        );
                                                    },
                                                })}
                                            />
                                            <label htmlFor="telefone">
                                                Telefone
                                            </label>
                                            {errors.telefone && (
                                                <p style={{ color: "red" }}>
                                                    {errors.telefone?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="endereco"
                                                name="endereco"
                                                placeholder="Rua, número, bairro, cidade - CEP"
                                                {...register("endereco")}
                                            />
                                            <label htmlFor="endereco">
                                                Endereço Completo
                                            </label>
                                            {errors.endereco && (
                                                <p style={{ color: "red" }}>
                                                    {errors.endereco?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="senha"
                                                name="senha"
                                                placeholder="Crie uma senha segura"
                                                {...register("senha")}
                                            />
                                            <label htmlFor="senha">Senha</label>
                                            {errors.senha && (
                                                <p style={{ color: "red" }}>
                                                    {errors.senha?.message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-success w-100"
                                            disabled={loading}
                                        >
                                            {loading
                                                ? "Cadastrando..."
                                                : "Cadastrar como Doador"}
                                        </button>
                                    </div>
                                )}

                                {currentUserType === "receptor" && (
                                    <div id="receptorForm">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nomeOrganizacao"
                                                name="nomeOrganizacao"
                                                placeholder="Nome da instituição/empresa"
                                                {...register("nomeOrganizacao")}
                                            />
                                            <label htmlFor="nomeOrganizacao">
                                                Nome da Organização
                                            </label>
                                            {errors.nomeOrganizacao && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.nomeOrganizacao
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cnpj"
                                                name="cnpj"
                                                placeholder="00.000.000/0000-00"
                                                {...register("cnpj", {
                                                    onChange: (e) => {
                                                        const masked =
                                                            aplicarMascaraCNPJ(
                                                                e.target.value
                                                            );
                                                        e.target.value = masked;
                                                        setValue(
                                                            "cnpj",
                                                            masked,
                                                            {
                                                                shouldValidate: true,
                                                                shouldDirty: true,
                                                            }
                                                        );
                                                    },
                                                })}
                                            />
                                            <label htmlFor="cnpj">CNPJ</label>
                                            {errors.cnpj && (
                                                <p style={{ color: "red" }}>
                                                    {errors.cnpj?.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <select
                                                className="form-select"
                                                id="tipoOrganizacao"
                                                name="tipoOrganizacao"
                                                {...register("tipoOrganizacao")}
                                            >
                                                <option value="">
                                                    Selecione o tipo
                                                </option>
                                                <option value="ong">ONG</option>
                                                <option value="associacao">
                                                    Associação
                                                </option>
                                                <option value="fundacao">
                                                    Fundação
                                                </option>
                                                <option value="outro">
                                                    Outro
                                                </option>
                                            </select>
                                            <label htmlFor="tipoOrganizacao">
                                                Tipo de Organização
                                            </label>
                                            {errors.tipoOrganizacao && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.tipoOrganizacao
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nomeResponsavel"
                                                name="nomeResponsavel"
                                                placeholder="Nome completo do responsável"
                                                {...register("nomeResponsavel")}
                                            />
                                            <label htmlFor="nomeResponsavel">
                                                Nome do Responsável
                                            </label>
                                            {errors.nomeResponsavel && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.nomeResponsavel
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="emailInstitucional"
                                                name="emailInstitucional"
                                                placeholder="contato@organizacao.org"
                                                {...register(
                                                    "emailInstitucional"
                                                )}
                                            />
                                            <label htmlFor="emailInstitucional">
                                                E-mail Institucional
                                            </label>
                                            {errors.emailInstitucional && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors
                                                            .emailInstitucional
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="telefoneReceptor"
                                                name="telefoneReceptor"
                                                placeholder="(00) 0000-0000"
                                                {...register(
                                                    "telefoneReceptor",
                                                    {
                                                        onChange: (e) => {
                                                            const masked =
                                                                aplicarMascaraTelefone(
                                                                    e.target
                                                                        .value
                                                                );
                                                            e.target.value =
                                                                masked;
                                                            setValue(
                                                                "telefoneReceptor",
                                                                masked,
                                                                {
                                                                    shouldValidate: true,
                                                                    shouldDirty: true,
                                                                }
                                                            );
                                                        },
                                                    }
                                                )}
                                            />
                                            <label htmlFor="telefoneReceptor">
                                                Telefone
                                            </label>
                                            {errors.telefoneReceptor && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.telefoneReceptor
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <textarea
                                                className="form-control"
                                                id="enderecoColeta"
                                                name="enderecoColeta"
                                                placeholder="Endereço completo onde as doações podem ser entregues. Inclua referências e horários de funcionamento."
                                                rows="3"
                                                {...register("enderecoColeta")}
                                            />
                                            <label htmlFor="enderecoColeta">
                                                Endereço/Ponto de Coleta
                                            </label>
                                            {errors.enderecoColeta && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.enderecoColeta
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="senhaReceptor"
                                                name="senhaReceptor"
                                                placeholder="Crie uma senha segura"
                                                {...register("senhaReceptor")}
                                            />
                                            <label htmlFor="senhaReceptor">
                                                Senha
                                            </label>
                                            {errors.senhaReceptor && (
                                                <p style={{ color: "red" }}>
                                                    {
                                                        errors.senhaReceptor
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-success w-100"
                                            disabled={loading}
                                        >
                                            {loading
                                                ? "Cadastrando..."
                                                : "Cadastrar como Receptor"}
                                        </button>
                                    </div>
                                )}
                            </form>

                            <div className="text-center mt-3">
                                Já tem uma conta?{" "}
                                <button
                                    type="button"
                                    className="btn btn-link p-0"
                                    onClick={() => navigate("/login")}
                                >
                                    Fazer login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
