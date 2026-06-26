import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <header className="menu">
      <div className="menu__logo">
        <img
          src="https://polpabrasil.com.br/wp-content/uploads/2025/10/logo-polpabrasil.svg"
          alt="Polpa Brasil"
        />
      </div>

      <nav className="menu__nav">
        <Link to="/documents">Documentos</Link>

        <Link to="/">Home</Link>

        <Link to="/opcao1">Opção</Link>
        <Link to="/opcao2">Opção</Link>
        <Link to="/opcao3">Opção</Link>
      </nav>
    </header>
  );
}

export default Menu;