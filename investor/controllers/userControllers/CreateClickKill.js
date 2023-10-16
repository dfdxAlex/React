
const CreateClickKill = (props) => {
    return function ClickKill(el)
    {
      const newArray = props.mas.filter(
        (elArray) => {
          if (elArray.nameA!=el.target.name) return true;
        }
      );
      props.setMas(newArray);
    }  
}

export default CreateClickKill;
