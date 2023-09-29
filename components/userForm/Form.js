import react, {useState} from "react";
import "./Form.css";
import InputText from "./InputText.js";

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
                
                {/* <label 
                  className="user-form--label" 
                  htmlFor="name"
                >
                  Имя актива
                </label>
                <input 
                  className="user-form--input" 
                  id="name" 
                  type="text" 
                  onChange={nameHandlerChange}
                  value={obj.nameA}
                >
    </input> */}

                <InputText 
                    nameInput={"Имя актива"}
                    typeInput={"text"}
                    obj={obj}
                    event={nameHandlerChange}
                />

                <label 
                  className="user-form--label" 
                  htmlFor="num"
                >
                  Число акций
                </label>
                <input 
                  className="user-form--input" 
                  id="num" 
                  type="number" 
                  onChange={countHandlerChange}
                  value={obj.countA}
                >
                </input>
                <label 
                  className="user-form--label" 
                  htmlFor="price"
                >
                  Цена одной акции
                </label>
                <input 
                  className="user-form--input" 
                  id="price" 
                  type="number" 
                  onChange={priceHandlerChange}
                  value={obj.price}
                >
                </input>
                <label 
                  className="user-form--label" 
                  htmlFor="price-close"
                >
                  Цена закрытия
                </label>
                <input 
                  className="user-form--input" 
                  id="price-close" 
                  type="number" 
                  onChange={closePriceHandlerChange}
                  value={obj.closePrice}
                >
                </input>
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
