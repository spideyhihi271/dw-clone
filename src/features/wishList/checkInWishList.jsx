function checkWishList(product,index) {
    let wishList = localStorage.getItem('wishList');
    wishList = JSON.parse(wishList);
    let child;
    let isExist = false;
    wishList.map(item => {
        if(item.id === product.id){
            if(index === undefined){
                child = document.querySelector('.wishList__child');
            }else{
                child = document.querySelectorAll('.wishList__child')[index];
            }
            child.parentElement.classList.add('active');
            isExist = true;
        }
    })
    return isExist;
    
}
export default checkWishList;