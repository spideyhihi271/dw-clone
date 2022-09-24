function Filter(inputArr,filterArr,pro) {
    let result = [];
    if(filterArr.length === 0){
        result = inputArr;
    }else{
        result = [];
        filterArr.map(color => {
            inputArr.map(item => {
                if(color ===  item[pro]){
                    result.push(item);
                }
            })
        })
    }   
    return result;
}
export default Filter;