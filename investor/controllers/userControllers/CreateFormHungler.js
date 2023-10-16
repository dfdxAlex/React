const CreateFormHungler = (obj, setObj, props) => {
    return function formHungler(event)
    {
        event.preventDefault();

        if (obj.nameA!=="" 
          && obj.number!=="" 
            && obj.price!=="" 
              && obj.priceClose!=="" 
                ) {
                    setObj({nameA:'', 
                            number:'', 
                            price:'', 
                            priceClose:''});
                    
                    props.getObj(obj);
                  }
    };
}

export default CreateFormHungler;
