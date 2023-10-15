import "./Portfel.css";
import Profit from "../../models/profit/Profit";
import CreateClickKill from "../../controllers/userControllers/CreateClickKill";
import react, {useState} from "react"

function Portfel(props) {

  let propsNumber = props.el.number+' акций';
  let priceProps = props.el.price+'$';

  let style='';
  let styleButton='';
  let delPozition="";

  const [obj,setObj] = useState({nameProps:props.el.nameA,
                                 propsNumber:propsNumber,
                                 priceProps:priceProps
                                });

  if (obj.nameProps!='') {
    style="invest";
  } else {
    styleButton="display-non";
    delPozition="delPozition";
  }

  const clickKillModul = CreateClickKill(setObj);
  
    return (
      <div className={delPozition}>
        <div className={style}>{obj.nameProps}</div>
        <div className={style}>{obj.propsNumber}</div>
        <div className={style}>{obj.priceProps}</div>
        <Profit
          priceState={obj.nameProps}
          el={props.el}
        />
        <button className={styleButton} onClick={clickKillModul}>Удалить</button>
        <br></br>
        <br></br>
      </div>
    );
  }

export default Portfel;
  
