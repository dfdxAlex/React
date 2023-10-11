import Portfel from './components/VievPosition/Portfel.js';
import Color from "./components/VievPosition/Color.js";
import Form from "./components/userForm/Form.js"
import MAS from "./investor/models/data/array/MasDefaultPosition.js"
import react, {useState} from "react";

function App() {

   const [mas, setMas] = useState(MAS);

  function getObjUp(obj)
  {
    setMas((oldMas)=>[...oldMas, obj]);
  }

  function getFormSelect(getSelectInForm)
  {
    console.log(getSelectInForm);
  }

  return (
    <Color>
      <Form 
        getSelect={getFormSelect}
        getObj={getObjUp}
      >
      </Form>

      {
          mas.map((el, index)=>(
            <Portfel  
              key={index}
              el={el}
            />
          ))
      }

  </Color>
  );
}

export default App;
