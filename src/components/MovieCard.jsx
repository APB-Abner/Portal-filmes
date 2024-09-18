import { Link } from "react-router-dom";

export default function MovieCard({titulo, id, imagem_destaque}) {
    return(
        <>
        
            <div className="p-5">
                <h2>{titulo}</h2>
                <img src={`${imagem_destaque}`} className="max-h-40"/>
                <Link to={`movies/${id}`}>Saiba mais</Link>
            </div>
        </>
    )

}