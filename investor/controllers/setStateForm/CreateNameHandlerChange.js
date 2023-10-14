
function CreateNameHandlerChange(obj, setObj)
{
return function NameHandlerChange(e)
{
  setObj((obj)=>{
      return {...obj, nameA: e.target.value}
    }
    );
}
}

export default CreateNameHandlerChange;
