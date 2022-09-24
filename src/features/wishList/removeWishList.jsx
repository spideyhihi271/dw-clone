function removeWishList(e) {
   let container = e.target;
   let parentContainer = container.parentElement;
   let id = parentContainer.getAttribute('idpro');
   let wishList = localStorage.getItem('wishList');
   wishList = JSON.parse(wishList);
   let idx = 0;
   wishList.findIndex((item, index) => {
      if(item.id === Number(id)){
         idx = index;
      }
   })
   wishList.splice(idx,1);
   //Lưu lại local
   wishList = JSON.stringify(wishList);
   localStorage.setItem("wishList",wishList);
   //UnActive
   parentContainer.classList.remove('active'); 

}
export default removeWishList;