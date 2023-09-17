import Portfel from './components/Portfel.js';
import Color from "./components/Color.js";

function App() {

  return (
    <Color>
  <Portfel  
    name={"Google"}
    number={10}
    price={200}
    priceClose={190}
  >
  </Portfel>

  <Portfel 
    name={"Apple"}
    number={20}
    price={150}
    priceClose={190}
  />

  <Portfel 
    name={"Tesla"}
    number={4}
    price={900}
    priceClose={990}
  />

  <Portfel 
    name={"Приват"}
    number={1}
    price={230}
    priceClose={240}
  />
  </Color>
  );
}

export default App;
