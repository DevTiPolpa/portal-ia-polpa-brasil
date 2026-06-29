import { Link } from "react-router-dom";
import "./Documents.css";

interface Document {
  id: number;
  title: string;
  description: string;
  file: string;
  route: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Política de Governança de Inteligência Artificial",
    description: "Documento para consulta",
    file: "https://drive.google.com/file/d/1D4kMCQJadOA-rEJvOS7JLD2mdqHYWheo/view?usp=sharing",
    route: "https://drive.google.com/file/d/1D4kMCQJadOA-rEJvOS7JLD2mdqHYWheo/view?usp=sharing",
   },
  {
    id: 2,
    title: "Diagnóstico de Maturidade em IA",
    description: "Em construção",
    file: "",
    route: "",
  }, 
  {
    id: 3,
    title: "Funil de IA",
    description: "Portal de Análise de Projetos IA",
    file: "",
    route: "https://polpaia-iyny5pyo.manus.space/",
  }


];

function Documents() {
  return (
    <div className="documents">

      <div className="documents-list">
        {documents.map((document) => (
          <div className="document-card" key={document.id}>
            <h3>{document.title}</h3>
            <p>{document.description}</p>

            <Link to={document.route} target="_blank">
              Visualizar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;