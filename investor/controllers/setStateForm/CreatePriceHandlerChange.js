function CreatePriceHandlerChange(obj, setObj)
{
    return function priceHandlerChange(e)
    {
      setObj((obj)=>{
        return {...obj, price: e.target.value}
      }
      );
    }
}

export default CreatePriceHandlerChange;
