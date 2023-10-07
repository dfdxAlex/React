import "./Element.css";

function Element(props)
{
    return (
        <div>
            <input 
              type="hidden" 
              name={props.nameForPost}
              value="0"
            />
            <label>
            <input 
              className="name-checkbox" 
              type="checkbox" 
              name={props.nameForPost}
              value="1"
            /> 
            <span className="name">{props.namePunkt}</span> </label>
        </div>
    );
}

export default Element;
