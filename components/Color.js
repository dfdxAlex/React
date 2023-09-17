import "./Color.css";

const Color = (props) => 
{
    return (
        <div className="color">{props.children}</div>
    );
}

export default Color;
