import "./Profit.css";

function Profit(props) {

    let profitString;
    const spred = 5;
    let profit;
    let colorProfit;
    let outProfit;


  if (props.priceState!="") {
    if (props.el.priceClose>props.el.price) {
        profitString = "Прибыль:";
        profit = (props.el.priceClose - props.el.price) * props.el.number  - 2 * spred;
        colorProfit = "profit profit-plus";
        
    } else {
        profitString = "Убыток:";
        profit = (props.el.price - props.el.priceClose) * props.el.number  + 2 * spred;
        colorProfit = "profit profit-minus";
    }
        outProfit = profitString+profit;
    if (profit === 0) colorProfit = "profit";

  } 
  else {
    colorProfit='';
    outProfit='';
  }

    return (
          <div className={colorProfit}>{outProfit}</div>
      );
}
export default Profit;
