import {FaPhoenixSquadron} from 'react-icons/fa'
export function BarMenu(){
    return (
        <div className="bg-black rounded-lg text-white p-5 m-5 font-bold font-Montserrat">
            <nav className="flex">
                <ul className="flex list-none">
                    <FaPhoenixSquadron className=''color='#f97316' size={25}/>
                    <li><a className="p-5 m-3 hover:text-orange-500" target="_blank" href="#">Chessmaw-Beta</a></li>
                    <li><a className="p-5 m-3 hover:text-orange-500" target="_blank" href="#">Content</a></li>
                    <li><a className="p-5 m-3 hover:text-orange-500" target="_blank" href="#">Projects</a></li>
                    <li><a className="p-5 m-3 hover:text-orange-500" target="_blank" href="#">About</a></li>
                </ul>
            </nav>
        </div>
    )
}