import { Link } from "react-router-dom"
import photo6 from "./img/photo6.jpg"
import photo4 from "./img/photo4.jpg"
import photo2 from "./img/photo2.jpg"
import photo5 from  "./img/photo5.jpg"
import photo3 from "./img/photo3.jpg"
import photo1 from "./img/photo1.jpg"
export default function Main({handleClick}){
  
    const data = [
        {id:0,img:photo1,name: "Удобные дизайнерские стулья", price:"$120 USD"},
        {id:1,img:photo2,name:"Кресло в скандинавском стиле" , price: "$300 USD" }, 
        {id:2,img:photo3,name: "Обеденный стол из дерева", price: "$1000 USD"},
        {id:3,img:photo4,name: "Журнальный столик из карагача", price: "$600 USD"},
        {id:4,img:photo5,name: "Стол обеденный Piyanca Inari", price: "$3000 USD"},
        {id:5,img:photo6,name: "Диван трехместный кремовый", price: "$1200 USD"},]

         return(<div className="photo_box">
            {
                data.map((el)=>(
                <div key={el.id}>
                <Link  to={`/product/${el.id}`}>
                <img className="photo" src={el.img}alt={el.name}/></Link>
                <h4>{el.name}</h4>
                <h5>{el.price}</h5>
                <button className="btn" onClick={handleClick}>в корзину</button>
                </div>
                ))}
         </div>)
    }