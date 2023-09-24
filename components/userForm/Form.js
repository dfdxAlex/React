import react, {useState} from "react";
import "./Form.css";

function Form()
{
    const [obj, setObj] = useState({nameA:'', 
                                    countA:'', 
                                    price:'', 
                                    closePrice:''});

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

    function formHungler(event)
    {
        event.preventDefault();

        console.log(obj);
    }

    return (
        <div className="user-form">
            <form className="user-form--form" onSubmit={formHungler}>
                <label 
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
                >
                </input>
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
                >
                </input>
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
