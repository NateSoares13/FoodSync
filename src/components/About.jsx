import styled from 'styled-components';

const Cabecalho = styled.div`
    background-color: #23942c;
    color: white;
    text-align: justify;
`;

const FeatureCardWrapper = styled.div`
    text-align: center;
`;

const FeatureIcon = styled.i`
    font-size: 2.5rem;
    color: #23942c;
    margin-bottom: 1rem;
`;

function FeatureCard({ title, description, icon }) {
    return (
        <FeatureCardWrapper className="col-lg container mx-2">
            <h2>{title}</h2>
            <p>{description}</p>
            <FeatureIcon className={`bi ${icon}`}></FeatureIcon>
        </FeatureCardWrapper>
    );
}

function About() {
    const features = [
        {
            title: "Cadastro de doações",
            description:
                "Doadores podem cadastrar facilmente alimentos disponíveis para doação na nossa plataforma. O processo é rápido, intuitivo e garante que o alimento chegue a quem realmente precisa.",
            icon: "bi-truck",
        },
        {
            title: "Notificações",
            description:
                "ONGs e instituições cadastradas recebem notificações em tempo real sobre novas doações disponíveis em sua região. Isso agiliza a coleta e evita o desperdício, garantindo que os alimentos sejam redistribuídos a tempo.",
            icon: "bi-phone-vibrate",
        },
        {
            title: "Entrega Ágil",
            description:
                "Com base na localização dos doadores e das instituições, facilitamos uma logística rápida e eficiente para a retirada dos alimentos, priorizando rotas curtas e entregas pontuais. Mais agilidade, menos desperdício.",
            icon: "bi-mailbox",
        },
    ];

    return (
        <div id="sobre_nos">
            <Cabecalho className="p-md-5 p-3">
                <div className="container">
                    <h1 className="mx-2 mt-2">Sobre Nós</h1>
                    <p className="mx-2 mb-2">
                        Somos a FoodSync, uma iniciativa que nasceu com o
                        propósito de unir tecnologia, responsabilidade social e
                        sustentabilidade. Nosso principal objetivo é combater a
                        insegurança alimentar por meio de uma plataforma que
                        conecta doadores de alimentos como restaurantes,
                        padarias e residências a organizações que realizam a
                        redistribuição para pessoas em situação de
                        vulnerabilidade. Acreditamos que a tecnologia pode ser
                        uma grande aliada na luta contra a fome e o desperdício.
                        Por isso, desenvolvemos uma solução que facilita a
                        identificação de pontos de coleta de alimentos, tornando
                        o processo mais ágil, eficiente e acessível.
                    </p>
                </div>
            </Cabecalho>
            
            <div className="container mt-5">
                <div className="row gap-5 pt-sm-4 align-items-center">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;