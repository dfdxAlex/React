
import "./InputTextForm.css";

function InputTextForm(props)
{

    return (
        <div>
                <label 
                  className="user-form--label" 
                  htmlFor="inputModul"
                >
                  {props.nameInput}
                </label>
                <input 
                  className="user-form--input" 
                  id="inputModul" 
                  type={props.typeInput} 
                  onChange={props.event}
                  value={props.obj.nameA}
                >
                </input>
        </div>
    );
}


export default InputTextForm;
