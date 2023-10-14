import react, {useState} from "react";
import "./Form.css";
import InputTextForm from "../../../components/userForm/InputTextForm.js";
import SelectOptionForm from "../../../components/userForm/SelectOptionForm.js";
import ButtonForm from "../../../components/userForm/ButtonForm";
import PositionInfoState from "../../models/data/state/PositionInfoState.js";
import HadlerForm from "../../controllers/setStateForm/HadlerForm.js";
import CreatChanceSelectHungler from "../../controllers/setStateSelect/CreatChanceSelectHungler.js";

function Form(props)
{
    const {obj, setObj} = PositionInfoState();

    const [selectPoz, setSelectPoz] = useState ("all");

    const {nameHandlerChange, countHandlerChange, 
           priceHandlerChange, closePriceHandlerChange
          } = HadlerForm(obj, setObj);

    const chanceSelectHungler = CreatChanceSelectHungler(selectPoz, 
                                                         setSelectPoz, 
                                                         props);
    

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
