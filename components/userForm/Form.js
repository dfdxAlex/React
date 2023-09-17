import "./Form.css";

function Form()
{
    return (
        <div>
            <form>
                <label for="name">Имя актива</label>
                <input id="name" type="text" ></input>
                <label for="num">Число акций</label>
                <input id="num" type="number" ></input>
                <label for="price">Цена одной акции</label>
                <input id="price" type="number" ></input>
                <label for="price-close">Цена закрытия</label>
                <input id="price-close" type="number" ></input>
                <button>Добавить</button>
            </form>
        </div>
    );
}

export default Form;
