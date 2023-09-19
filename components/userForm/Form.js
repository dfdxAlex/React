import react, {useState} from "react";
import "./Form.css";

function Form()
{
    const [name, setName] = useState('');
    const [count, setCount] = useState('');
    const [price, setPrice] = useState('');
    const [closePrice, setClosePrice] = useState('');

    function nameHandlerChange(e)
    {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    function countHandlerChange(e)
    {
        // console.log(e.target.value);
        setCount(e.target.value);
    }

    function priceHandlerChange(e)
    {
        // console.log(e.target.value);
        setPrice(e.target.value);
    }

    function closePriceHandlerChange(e)
    {
        // console.log(e.target.value);
        setClosePrice(e.target.value);
    }

    return (
        <div className="user-form">
            <form className="user-form--form">
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
                >
                Добавить
                </button>
            </form>
        </div>
    );
}

export default Form;
