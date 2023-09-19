import "./Form.css";

function Form()
{
    function handlerChange(e)
    {
        console.log(e.target.value);
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
                  onChange={handlerChange}
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
