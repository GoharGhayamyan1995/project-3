import shop from "./img/shop.png"

export default function Header(){
    return(
        <header>
            <div>
                <span className='logo'>HOUSE STAFF</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>кабинет</li>
                    <img src={shop}></img><span id='card'>_</span>
                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}