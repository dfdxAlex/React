function CreateClosePriceHandlerChange(obj, setObj)
{
    return function closePriceHandlerChange(e)
    {
      setObj((obj)=>{
        return {...obj, priceClose: e.target.value}
      }
      );
    }
}

export default CreateClosePriceHandlerChange;
