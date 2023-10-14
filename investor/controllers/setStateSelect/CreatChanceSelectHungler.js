const CreatChanceSelectHungler=(selectPoz, setSelectPoz, props) => {
    return function chanceSelectHungler(event)
    {
      setSelectPoz(event.target.value);
      props.getSelect(event.target.value);
    }
}

export default CreatChanceSelectHungler;
