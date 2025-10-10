import './DashboardPage.css';

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <header className="app-header">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <button className="btn-menu me-3"><i className="bi bi-list"></i></button>
            <a className="navbar-brand" href="#">FoodSync</a>
          </div>
          <nav className="d-none d-lg-flex">
            <a className="nav-link active" href="#">Início</a>
            <a className="nav-link" href="#">Minhas Doações</a>
            <a className="nav-link" href="#">Solicitações</a>
            <a className="nav-link" href="#">Mapa</a>
          </nav>
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="nav-link position-relative">
              <i className="bi bi-bell-fill"></i>
              <span className="notification-dot"></span>
            </a>
            <a href="#" className="nav-link profile-link">
              <img src="https://i.pravatar.cc/40" alt="Avatar" className="avatar" />
              <span>Perfil</span>
            </a>
          </div>
        </div>
      </header>

      <main className="dashboard-content container-fluid">
        <div className="mb-4">
          <h1 className="dashboard-title">Bem-Vindo!</h1>
          <p className="dashboard-subtitle">Continue fazendo a diferença na sua comunidade!</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-4">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="stat-card">
                    <p className="stat-title">Doações Realizadas</p>
                    <p className="stat-value">999</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="stat-card">
                    <p className="stat-title">Kgs doados este mês</p>
                    <p className="stat-value">999</p>
                  </div>
                </div>
              </div>
              <div className="solicitacoes-card">
                <div className="card-header">
                  <h5 className="mb-0">Solicitações Próximas</h5>
                  <a href="#">Ver todas</a>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="form-check"><input className="form-check-input" type="checkbox" /></div>
                    <div className="solicitacao-info">
                      <h6>Instituto A</h6>
                      <p>Arroz, feijão, óleo <span className="distancia">• 2.3 km de distância</span></p>
                    </div>
                    <span className="badge-urgente">Urgente</span>
                    <button className="btn btn-doar">Doar</button>
                  </li>
                  <li className="list-group-item">
                    <div className="form-check"><input className="form-check-input" type="checkbox" /></div>
                    <div className="solicitacao-info">
                      <h6>Instituto B</h6>
                      <p>Leite, açúcar, café <span className="distancia">• 4.7 km de distância</span></p>
                    </div>
                    <button className="btn btn-doar">Doar</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <aside className="conquistas-sidebar">
              <h5>Conquistas</h5>
              <p>Seu impacto na comunidade</p>
              <div className="conquista-item">
                <div className="conquista-icon"><i className="bi bi-heart-fill"></i></div>
                <div><h6>Herói da Comunidade</h6><p>50+ doações realizadas</p></div>
              </div>
              <div className="conquista-item">
                <div className="conquista-icon"><i className="bi bi-heart-fill"></i></div>
                <div><h6>Doador Frequente</h6><p>3 meses consecutivos</p></div>
              </div>
              <div className="conquista-item">
                <div className="conquista-icon"><i className="bi bi-heart-fill"></i></div>
                <div><h6>Impacto Coletivo</h6><p>200+ pessoas apoiadas</p></div>
              </div>
              <button className="btn btn-nova-doacao">Nova Doação</button>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
