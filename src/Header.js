import shop from "./img/shop.png"
import { Link } from "react-router-dom"

export default function Header({count}){
    return(
        <header>
            <div>
                <span className='logo'>HOUSE STAFF</span>
                <ul className='nav'>
                <Link  to="Про нас" className="link">Про нас</Link>
                    <li>Контакты</li>
                    <li>кабинет</li>
                    <img src={shop}></img><span className="card">{count}</span>
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}