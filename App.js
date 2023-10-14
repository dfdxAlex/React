import Portfel from './components/VievPosition/Portfel.js';
import Color from "./components/VievPosition/Color.js";
import Form from "./investor/views/form/Form.js"
import MAS from "./investor/models/data/array/MasDefaultPosition.js"
import react, {useState} from "react";
import GetFormSelect from  "./investor/controllers/userControllers/GetFormSelect.js"
import GetObjUp from  "./investor/controllers/userControllers/GetObjUp.js"



function App() {

   const [mas, setMas] = useState(MAS);

  return (
    <Color>

      <Form 
        getSelect={GetFormSelect}
        getObj={(obj) => GetObjUp (obj, setMas)}
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
