import "./Portfel.css";
import Profit from "./Profit";
import ClickKill from "./ClickKill";
import react, {useState} from "react"

function Portfel(props) {

  let propsNumber = props.number+' акций';
  let priceProps = props.price+'$';
  let style='';
  let styleButton='';

  const [obj,setObj] = useState({nameProps:propsNumber,
                                 propsNumber:propsNumber,
                                 priceProps:priceProps
                                });

  if (obj.nameProps!='') {
    style="invest";
  } else {
    styleButton="display-non";
  }

  function clickKillModul()
  {
    ClickKill(setObj);
  }
  
    return (
      <div>
        <div className={style}>{obj.nameProps}</div>
        <div className={style}>{obj.propsNumber}</div>
        <div className={style}>{obj.priceProps}</div>
        <Profit
          priceState={obj.nameProps}
          price={props.price}
          priceClose={props.priceClose}
          number={props.number}
        />
        <button className={styleButton} onClick={clickKillModul}>Удалить</button>
        <br></br>
        <br></br>
      </div>
    );
  }

export default Portfel;
  
