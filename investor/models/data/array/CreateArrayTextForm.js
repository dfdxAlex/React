import HadlerForm from "../../../controllers/setStateForm/HadlerForm.js";

const CreateArrayTextForm = (obj, setObj) => {
    
    const {nameHandlerChange, countHandlerChange, 
           priceHandlerChange, closePriceHandlerChange
          } = HadlerForm(obj, setObj);

    return [
        {
            nameInput:"Имя актива",
            typeInput:"text",
            obj:obj.nameA,
            event:nameHandlerChange
        },
        {
            nameInput:"Число акций",
            typeInput:"number",
            obj:obj.number,
            event:countHandlerChange
        },
        {
            nameInput:"Цена одной акции",
            typeInput:"number",
            obj:obj.price,
            event:priceHandlerChange
        },
        {
            nameInput:"Цена закрытия",
            typeInput:"number",
            obj:obj.priceClose,
            event:closePriceHandlerChange
        }
    ]
}

export default CreateArrayTextForm;
