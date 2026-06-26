import "./Documents.css";

interface Document {
  id: number;
  title: string;
  description: string;
  file: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Manual do Sistema",
    description: "Manual completo de utilização.",
    file: "https://drive.google.com/file/d/1D4kMCQJadOA-rEJvOS7JLD2mdqHYWheo/view?usp=sharing",
  }
];

function Documents() {
  return (
    <div className="documents">
      <h1>Documentos</h1>

      <div className="documents-list">
        {documents.map((document) => (
          <div className="document-card" key={document.id}>
            <h3>{document.title}</h3>
            <p>{document.description}</p>

            <a href={document.file} target="_blank" rel="noreferrer">
              Visualizar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documents;