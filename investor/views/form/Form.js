import react, {useState} from "react";
import "./Form.css";
import InputTextForm from "../../../components/userForm/InputTextForm.js";
import SelectOptionForm from "../../../components/userForm/SelectOptionForm.js";
import ButtonForm from "../../../components/userForm/ButtonForm";
import PositionInfoState from "../../models/data/state/PositionInfoState.js";
import CreatChanceSelectHungler from "../../controllers/setStateSelect/CreatChanceSelectHungler.js";
import CreateFormHungler from "../../controllers/userControllers/CreateFormHungler.js";
import CreateArrayTextForm from "../../models/data/array/CreateArrayTextForm.js";

function Form(props)
{
    const {obj, setObj} = PositionInfoState();

    const [selectPoz, setSelectPoz] = useState ("all");

    const chanceSelectHungler = CreatChanceSelectHungler(selectPoz, 
                                                         setSelectPoz, 
                                                         props);
                                                         
    const formHungler = CreateFormHungler(obj, setObj, props);

    return (
        <div className="user-form">
            <form className="user-form--form" onSubmit={formHungler}>
                {
                    CreateArrayTextForm(obj, setObj).map((el,index)=>(
                      <InputTextForm 
                          key={index}
                          nameInput={el.nameInput}
                          typeInput={el.typeInput}
                          obj={el.obj}
                          event={el.event}
                      />
                    )
                    )
                }

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
