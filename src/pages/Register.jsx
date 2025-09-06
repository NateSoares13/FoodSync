import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import foodsync from "../assets/foodsync.png";
import foodsync_vertical from "../assets/foodsync_vertical.png";

function Register() {
  const [currentUserType, setCurrentUserType] = useState("doador");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const aplicarMascaraCPF = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
  };

  const aplicarMascaraCNPJ = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
  };

  const aplicarMascaraTelefone = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      value = value.replace(/(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
    e.target.value = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      alert(`Cadastro como ${currentUserType} realizado com sucesso!`);
      if (formRef.current) formRef.current.reset();
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-7 d-flex justify-content-center align-items-center text-white row" id="login_esquerda">
          <div className="d-flex flex-column col-lg-6 col-md-8 col-10">
            <img className="d-block mx-auto ms-0 mb-4" src={foodsync_vertical} alt="FoodSync vertical" />
            <p>
              Somos a FoodSync, uma iniciativa que nasceu com o propósito de unir tecnologia, responsabilidade social e sustentabilidade. Nosso principal objetivo é combater a insegurança alimentar por meio de uma plataforma que conecta doadores de alimentos como restaurantes, padarias e residências a organizações que realizam a redistribuição para pessoas em situação de vulnerabilidade. Acreditamos que a tecnologia pode ser uma grande aliada na luta contra a fome e o desperdício. Por isso, desenvolvemos uma solução que facilita a identificação de pontos de coleta de alimentos, tornando o processo mais ágil, eficiente e acessível.
            </p>
          </div>
        </div>

        <div className="col-lg-5 d-flex justify-content-center align-items-center row">
          <div className="d-flex flex-column w-100 mx-auto px-3 px-md-4 px-lg-5" style={{ maxWidth: 640 }}>
            <img className="d-block mx-auto mb-5" src={foodsync} alt="FoodSync" />

            <div className="form-container">
              <h2 className="form-title text-center">Cadastro na Plataforma</h2>
              <p className="form-subtitle text-center">
                Escolha se você é um doador ou receptor e complete seu cadastro
              </p>

              <div className="d-flex mb-4" role="tablist" aria-label="Tipo de usuário">
                <button
                  type="button"
                  className={`btn flex-fill me-2 ${currentUserType === "doador" ? "btn-light shadow-sm" : "btn-outline-secondary"}`}
                  onClick={() => setCurrentUserType("doador")}
                  aria-pressed={currentUserType === "doador"}
                >
                  Doador
                </button>

                <button
                  type="button"
                  className={`btn flex-fill ${currentUserType === "receptor" ? "btn-light shadow-sm" : "btn-outline-secondary"}`}
                  onClick={() => setCurrentUserType("receptor")}
                  aria-pressed={currentUserType === "receptor"}
                >
                  Receptor
                </button>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="fade-transition" noValidate>
                {currentUserType === "doador" && (
                  <div id="doadorForm">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="nomeCompleto" name="nomeCompleto" placeholder="Seu nome completo" required />
                      <label htmlFor="nomeCompleto">Nome Completo</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="cpf" name="cpf" placeholder="000.000.000-00" maxLength="14" onChange={aplicarMascaraCPF} required />
                      <label htmlFor="cpf">CPF</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="date" className="form-control" id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" required />
                      <label htmlFor="dataNascimento">Data de Nascimento</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="email" name="email" placeholder="seu@email.com" required />
                      <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="tel" className="form-control" id="telefone" name="telefone" placeholder="(00) 00000-0000" maxLength="15" onChange={aplicarMascaraTelefone} required />
                      <label htmlFor="telefone">Telefone</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="endereco" name="endereco" placeholder="Rua, número, bairro, cidade - CEP" required />
                      <label htmlFor="endereco">Endereço Completo</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="senha" name="senha" placeholder="Crie uma senha segura" required />
                      <label htmlFor="senha">Senha</label>
                    </div>

                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                      {loading ? "Cadastrando..." : "Cadastrar como Doador"}
                    </button>
                  </div>
                )}

                {currentUserType === "receptor" && (
                  <div id="receptorForm">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="nomeOrganizacao" name="nomeOrganizacao" placeholder="Nome da instituição/empresa" required />
                      <label htmlFor="nomeOrganizacao">Nome da Organização</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="cnpj" name="cnpj" placeholder="00.000.000/0000-00" maxLength="18" onChange={aplicarMascaraCNPJ} required />
                      <label htmlFor="cnpj">CNPJ</label>
                    </div>

                    <div className="form-floating mb-3">
                      <select className="form-select" id="tipoOrganizacao" name="tipoOrganizacao" required>
                        <option value="">Selecione o tipo</option>
                        <option value="ong">ONG</option>
                        <option value="associacao">Associação</option>
                        <option value="fundacao">Fundação</option>
                        <option value="outro">Outro</option>
                      </select>
                      <label htmlFor="tipoOrganizacao">Tipo de Organização</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="nomeResponsavel" name="nomeResponsavel" placeholder="Nome completo do responsável" required />
                      <label htmlFor="nomeResponsavel">Nome do Responsável</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="emailInstitucional" name="emailInstitucional" placeholder="contato@organizacao.org" required />
                      <label htmlFor="emailInstitucional">E-mail Institucional</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="tel" className="form-control" id="telefoneReceptor" name="telefoneReceptor" placeholder="(00) 0000-0000" maxLength="15" onChange={aplicarMascaraTelefone} required />
                      <label htmlFor="telefoneReceptor">Telefone</label>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="enderecoColeta" name="enderecoColeta" placeholder="Endereço completo onde as doações podem ser entregues. Inclua referências e horários de funcionamento." rows="3" required />
                      <label htmlFor="enderecoColeta">Endereço/Ponto de Coleta</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="senhaReceptor" name="senhaReceptor" placeholder="Crie uma senha segura" required />
                      <label htmlFor="senhaReceptor">Senha</label>
                    </div>

                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                      {loading ? "Cadastrando..." : "Cadastrar como Receptor"}
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
