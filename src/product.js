import photo6 from "./img/photo6.jpg"
import photo4 from "./img/photo4.jpg"
import photo2 from "./img/photo2.jpg"
import photo5 from  "./img/photo5.jpg"
import photo3 from "./img/photo3.jpg"
import photo1 from "./img/photo1.jpg"
import {useParams } from "react-router-dom";
const data = [
    {id:0,
    img:photo1,
    name: "Удобные дизайнерские стулья",
     price:"$120 USD",
     info:"Этот стул заслуживает отдельного внимания. Его часто можно встретить в современном интерьере – и все благодаря его строгому, но такому по-домашнему уютному дизайну. В моде простота и минимализм, но ни в коем случае не в ущерб комфорту. Поэтому эта модель с мягкой обивкой формованного сиденья популярна во многих дизайнерских интерьерах."
     },
    {id:1,
    img:photo2,
    name:"Кресло в скандинавском стиле" , 
    price: "$300 USD",
    info:"Стильное и яркое кресло Френсис. Достоинствами модели является его исполнение в универсальном стиле, оно идеально впишется как в скандинавский, классический, прованс и даже в стиле лофт будет смотреться гармонично при правильном подборе цвета ткани. Данное кресло подарит его владельцу комфорт и уют, а качественный велюр не придаст забот в уборке мебели. "
     }, 
    {id:2,
    img:photo3,
    name:"Обеденный стол из дерева",
     price: "$1000 USD",
     info:"Роскошный массив одним лишь видом говорит о надёжности и долговечности. Гостиная наполнится особым шиком, а кухня определённой степенью уюта. Дерево всегда выглядит дорого и, несомненно, с ним поспорить другому материалу в этом сложно. Оттенки и цвета могут быть самыми разными. Дерево – легко окрашивается или тонируется в нужный цвет, а также отлично сочетается абсолютно с любыми другими материалами и фактурами, будь то метал, стекло или камень."
     },
    {id:3,
    img:photo4,
    name: "Журнальный столик из карагача", 
    price: "$600 USD",
    info:"Купить журнальный столик из карагача в любимую гостиную значит добавить изюминку в интерьер вашей квартиры или дома. Столы от мастерской «House Staff» всегда притягивают к себе внимание и не только радуют домочадцев, но и удивляют каждого из ваших гостей. Стиль, экологичность материалов, качество выполнения и долговечность столика из слэба не оставляют равнодушным , к такому изделию хочется прикасаться, изучать его и рассматривать часами. Все это создает особенную атмосферу в вашем доме и отражает безукоризненный вкус."
     },
    {id:4,
     img:photo5,
     name: "Стол обеденный Piyanca Inari", 
     price: "$3000 USD",
     info:"Особенностью роскошного обеденного стола является необычная форма основания. Ножки из нержавеющей стали в цвете золото подчеркивают красоту столешницы из искусственного мрамора (на основе искусственного камня), придавая столу элегантность и шик.Материалы: столешница - иск.мрамор(МДФ+иск.камень+пленка),основание - нержсталь, цвет золото."
     },
    {id:5,
     img:photo6,
     name: "Диван трехместный кремовый", 
     price: "$1200 USD",
     info: "Элегантный дизайн дивана Ланкастер создавался на основе нестареющей классики. Его изящные формы прекрасно дополнят классический интерьер и добавят в него нотки роскоши. Наполнитель этой модели подобран так, чтобы обеспечить повышенный комфорт и мягкость. Каркас выполнен из натуральных материалов: хвойного бруса, березовой фанеры и высококачественной ДСП. При желании вы можете заказать модель с механизмом трансформации, подходящий как для гостевого использования, так и для ежедневного сна. Несмотря на компактные размеры, диван Ланкастер станет центром гостиной и любимым местом отдыха."
     },]
   
   
    export default function Product(){
    const {id}=useParams();
    const product=data[id];

    return(
    <div className="more_info">
        <img src={product.img} alt="" className="images"/> 
        <div className="info">
        <h2>{product.name}</h2> 
        <p>{product.info}</p>
        <h3>{product.price}</h3>
        <button className="btn">оформить заказ</button> 
        </div>
        
    </div>
)
}
