import CreateNameHandlerChange from "../../controllers/setStateForm/CreateNameHandlerChange.js";
import CreateCountHandlerChange from "../../controllers/setStateForm/CreateCountHandlerChange.js";
import CreatePriceHandlerChange from "../../controllers/setStateForm/CreatePriceHandlerChange.js";
import CreateClosePriceHandlerChange from "../../controllers/setStateForm/CreateClosePriceHandlerChange.js";

const HadlerForm = (obj, setObj)=>{

    const nameHandlerChange = CreateNameHandlerChange(obj, setObj);    

    const countHandlerChange = CreateCountHandlerChange(obj, setObj);    

    const priceHandlerChange = CreatePriceHandlerChange(obj, setObj);    

    const closePriceHandlerChange = CreateClosePriceHandlerChange(obj, setObj);    

    return {nameHandlerChange, 
            countHandlerChange, 
            priceHandlerChange,
            closePriceHandlerChange
           };

}

export default HadlerForm;
