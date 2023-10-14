import react, {useState} from "react";
import "./Form.css";
import InputTextForm from "../../../components/userForm/InputTextForm.js";
import SelectOptionForm from "../../../components/userForm/SelectOptionForm.js";
import ButtonForm from "../../../components/userForm/ButtonForm";
import PositionInfoState from "../../models/data/state/PositionInfoState.js";
import CreateNameHandlerChange from "../../controllers/setStateForm/CreateNameHandlerChange.js";
import CreateCountHandlerChange from "../../controllers/setStateForm/CreateCountHandlerChange.js";
import CreatePriceHandlerChange from "../../controllers/setStateForm/CreatePriceHandlerChange.js";
import CreateClosePriceHandlerChange from "../../controllers/setStateForm/CreateClosePriceHandlerChange.js";

function Form(props)
{
    const {obj, setObj} = PositionInfoState();

    const [selectPoz, setSelectPoz] = useState ("all");

    const nameHandlerChange = CreateNameHandlerChange(obj, setObj);

    const countHandlerChange = CreateCountHandlerChange(obj, setObj);

    const priceHandlerChange = CreatePriceHandlerChange(obj, setObj);

    const closePriceHandlerChange = CreateClosePriceHandlerChange(obj, setObj);


    
    function chanceSelectHungler(event)
    {
      setSelectPoz(event.target.value);
      props.getSelect(event.target.value);
    }

    function formHungler(event)
    {
        event.preventDefault();

        if (obj.nameA!=="" 
          && obj.number!=="" 
            && obj.price!=="" 
              && obj.priceClose!=="" 
                ) {
                    setObj({nameA:'', 
                            number:'', 
                            price:'', 
                            priceClose:''});
                    props.getObj(obj);
                  }
    }

    return (
        <div className="user-form">
            <form className="user-form--form" onSubmit={formHungler}>
                
                <InputTextForm 
                    nameInput={"Имя актива"}
                    typeInput={"text"}
                    obj={obj.nameA}
                    event={nameHandlerChange}
                />

                <InputTextForm 
                    nameInput={"Число акций"}
                    typeInput={"number"}
                    obj={obj.number}
                    event={countHandlerChange}
                />

                <InputTextForm 
                    nameInput={"Цена одной акции"}
                    typeInput={"number"}
                    obj={obj.price}
                    event={priceHandlerChange}
                />

                <InputTextForm 
                    nameInput={"Цена закрытия"}
                    typeInput={"number"}
                    obj={obj.priceClose}
                    event={closePriceHandlerChange}
                />

                <SelectOptionForm 
                    selectPoz={selectPoz}
                    onChange={chanceSelectHungler}
                />
                
                <ButtonForm>
                </ButtonForm>


            </form>
        </div>
    );
}

export default Form;
