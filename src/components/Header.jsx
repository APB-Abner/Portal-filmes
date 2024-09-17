import { NavLink } from "react-router-dom"


export default function Header(){
    return(
        <>
            <header className="flex w-full h-14 bg-purple-800 justify-around text-white items-center">
                <div>
                    <h1 className="font-bold text-lg">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-40">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movie">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}