import "./Portfel.css";
import Profit from "../../models/profit/Profit";
import CreateClickKill from "../../controllers/userControllers/CreateClickKill";

function Portfel(props) {

  let nameProps=props.el.nameA;
  let propsNumber = props.el.number+' акций';
  let priceProps = props.el.price+'$';

  let styleButton='';

  const clickKillModul = CreateClickKill(props);
  
    return (
      <div>
        <div className="invest">{nameProps}</div>
        <div className="invest">{propsNumber}</div>
        <div className="invest">{priceProps}</div>
        <Profit
          priceState={nameProps}
          el={props.el}
        />
        <button name={nameProps} className={styleButton} onClick={clickKillModul}>Удалить</button>
        <br></br>
        <br></br>
      </div>
    );
  }

export default Portfel;
  
