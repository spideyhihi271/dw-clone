import { v4 as uuidv4 } from 'uuid';

const addCart = (product,size) => {
    // Getdata
    let data = localStorage.getItem('cartList');
    data = JSON.parse(data);
    let idForRemove = uuidv4();
    let newPro = {...product,size,idForRemove};
    //addCart
    if(data.length === 0){
        data.push(newPro);
    }else{
        let index = data.findIndex( item => {
            return item.id === product.id;
        })
        data.splice(index,0,newPro);
    } 
    console.log("New Data",data);
    data = JSON.stringify(data);
    localStorage.setItem('cartList',data);
};

export default addCart;