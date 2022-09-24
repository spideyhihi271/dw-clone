const removeCart = (id) => {
    console.log("ID Remove: ",id);
    let returnArr = [];
    let data = localStorage.getItem('cartList');
    data = JSON.parse(data);
    let idx = data.findIndex( item => item.idForRemove === id);
    console.log("Index", idx);
    data.splice(idx,1);
    returnArr = data;
    console.log("Result: ",returnArr);
    // Save
    data = JSON.stringify(data);
    localStorage.setItem('cartList',data);
    return returnArr;
}

export default removeCart;