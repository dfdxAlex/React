
const CreateClickKill = (setObj) => {
    return function ClickKill()
    {
      setObj({
        nameProps:'',
        propsNumber:'',
        priceProps:''
      });
    }  
}

export default CreateClickKill;
