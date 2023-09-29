import react, {useState} from "react";
import "./Form.css";
import InputTextForm from "./InputTextForm.js";

function Form(props)
{
    const [obj, setObj] = useState({nameA:'', 
                                    countA:'', 
                                    price:'', 
                                    closePrice:''});
    const [selectPoz, setSelectPoz] = useState ("all");

    function nameHandlerChange(e)
    {
      setObj((obj)=>{
          return {...obj, nameA: e.target.value}
        }
        );
    }

    function countHandlerChange(e)
    {
      setObj((obj)=>{
        return {...obj, countA: e.target.value}
      }
      );
    }

    function priceHandlerChange(e)
    {
      setObj((obj)=>{
        return {...obj, price: e.target.value}
      }
      );
    }

    function closePriceHandlerChange(e)
    {
      setObj((obj)=>{
        return {...obj, closePrice: e.target.value}
      }
      );
    }

    function chanceSelectHungler(event)
    {
      setSelectPoz(event.target.value);
      props.getSelect(event.target.value);
    }

    function formHungler(event)
    {
        event.preventDefault();

        if (obj.nameA!=="" 
          && obj.countA!=="" 
            && obj.price!=="" 
              && obj.closePrice!=="" 
                ) {
                    setObj({nameA:'', 
                            countA:'', 
                            price:'', 
                            closePrice:''});
                    props.getObj(obj);
                  }
    }

    return (
        <div className="user-form">
            <form className="user-form--form" onSubmit={formHungler}>
                
                <InputTextForm 
                    nameInput={"Имя актива"}
                    typeInput={"text"}
                    obj={obj}
                    event={nameHandlerChange}
                />

                <InputTextForm 
                    nameInput={"Число акций"}
                    typeInput={"number"}
                    obj={obj}
                    event={countHandlerChange}
                />

                <InputTextForm 
                    nameInput={"Цена одной акции"}
                    typeInput={"number"}
                    obj={obj}
                    event={priceHandlerChange}
                />

                <InputTextForm 
                    nameInput={"Цена закрытия"}
                    typeInput={"number"}
                    obj={obj}
                    event={closePriceHandlerChange}
                />

                <div>
                  <select value = {selectPoz} onChange={chanceSelectHungler}>
                    <option value="all">Все</option>
                    <option value="profitable">Только прибыльные</option>
                    <option value="unProfitable">Только убыточнык</option>
                  </select>
                </div>
                <button
                  className="user-form--button"
                  type="submit"
                >
                Добавить
                </button>
            </form>
        </div>
    );
}

export default Form;
