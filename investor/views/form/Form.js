import react, {useState} from "react";
import "./Form.css";
import InputTextForm from "../../../components/userForm/InputTextForm.js";
import SelectOptionForm from "../../../components/userForm/SelectOptionForm.js";
import ButtonForm from "../../../components/userForm/ButtonForm";

function Form(props)
{
    const [obj, setObj] = useState({nameA:'', 
                                    number:'', 
                                    price:'', 
                                    priceClose:''});
                                    
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
        return {...obj, number: e.target.value}
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
        return {...obj, priceClose: e.target.value}
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
