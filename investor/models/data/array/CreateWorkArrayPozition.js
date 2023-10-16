
const CreateWorkArrayPozition = (workArray, mas) => {
    return mas.filter((el)=>{

        if (workArray == "all") return true;
        const profit = (el.priceClose - el.price) * el.number - 10;
        if (workArray == "profitable" && profit>=0) return true;
        if (workArray == "unProfitable" && profit<0) return true;

    });

}

export default CreateWorkArrayPozition;
