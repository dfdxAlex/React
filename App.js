import Portfel from './investor/views/position/Portfel.js';
import Color from "./investor/views/Color.js";
import Form from "./investor/views/form/Form.js"
import MAS from "./investor/models/data/array/MasDefaultPosition.js"
import react, {useState} from "react";
import GetFormSelect from  "./investor/controllers/userControllers/GetFormSelect.js"
import GetObjUp from  "./investor/controllers/userControllers/GetObjUp.js"
import CreateWorkArrayPozition from "./investor/models/data/array/CreateWorkArrayPozition.js"


function App() {

  const [mas, setMas] = useState(MAS);

  const [workArray, setWorkArray] = useState("all");

  const newWorkArray=CreateWorkArrayPozition(workArray, mas);

  return (
    <Color>
      <Form 
        getSelect={getSelectInForm => GetFormSelect(getSelectInForm, setWorkArray)}
        getObj={obj => GetObjUp (obj, setMas)}
      >
      </Form>
      {(newWorkArray.length == 0) && <h1>Массив пуст</h1>}
      {(newWorkArray.length != 0) && newWorkArray.map((el, index)=>(
            <Portfel  
              key={index}
              el={el}
              mas={newWorkArray} 
              setMas={setMas}
            />
          ))}

  </Color>
  );
}

export default App;
