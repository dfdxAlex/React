
function CreateCountHandlerChange(obj, setObj)
{
    return function countHandlerChange(e)
    {
      setObj((obj)=>{
        return {...obj, number: e.target.value}
      }
      );
    }
}

export default CreateCountHandlerChange;
