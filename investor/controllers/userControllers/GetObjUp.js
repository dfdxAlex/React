function GetObjUp(obj, setMas)
{
  obj.number = Number(obj.number);
  obj.price = Number(obj.price);
  obj.priceClose = Number(obj.priceClose);
  setMas((oldMas)=>[...oldMas, obj]);
}

export default GetObjUp;
