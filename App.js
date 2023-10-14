import Portfel from './components/VievPosition/Portfel.js';
import Color from "./components/VievPosition/Color.js";
import Form from "./investor/views/form/Form.js"
import MAS from "./investor/models/data/array/MasDefaultPosition.js"
import react, {useState} from "react";
import getFormSelect from  "./investor/controllers/userControllers/GetFormSelect.js"
import getObjUp from  "./investor/controllers/userControllers/GetObjUp.js"



function App() {

   const [mas, setMas] = useState(MAS);

  return (
    <Color>

      <Form 
        getSelect={getFormSelect}
        getObj={(obj) => getObjUp (obj, setMas)}
      >
      </Form>

      {mas.map((el, index)=>(
            <Portfel  
              key={index}
              el={el}
            />
          ))}

  </Color>
  );
}

export default App;
