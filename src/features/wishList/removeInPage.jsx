const removeInPage = (id) => {
   console.log(" This is ID Remove",id);
   let mask = [];
    // Get data
    let data = localStorage.getItem('wishList');
    data = JSON.parse(data);
    // Logic
    let idx = data.findIndex( (item) => {
        return item.id === Number(id);
    })
    data.splice(idx,1);
    mask = data;
    data = JSON.stringify(data);
    localStorage.setItem("wishList", data);
    return mask;
};

export default removeInPage;