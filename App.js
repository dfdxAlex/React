import Portfel from './components/VievPosition/Portfel.js';
import Color from "./components/VievPosition/Color.js";
import Form from "./components/userForm/Form.js"

function App() {


  function getObjUp(obj)
  {
    console.log(obj);
  }

  function getFormSelect(getSelectInForm)
  {
    console.log(getSelectInForm);
  }

  let mas = [
    {
      nameA:"Google",
      number:10,
      price:200,
      priceClose:190
    },
    {
      nameA:"Apple",
      number:20,
      price:150,
      priceClose:190
    },
    {
      nameA:"Tesla",
      number:4,
      price:900,
      priceClose:990
    },
    {
      nameA:"Приват",
      number:1,
      price:230,
      priceClose:240
    }
  ];

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
              name={el.nameA}
              number={el.number}
              price={el.price}
              priceClose={el.priceClose}
            />
          ))
      }

  </Color>
  );
}

export default App;
