import clockList from '../../data/clock';
import glassList from '../../data/glass';
import jewelsList from '../../data/jewels';
import strapList from '../../data/strap';
function addWishList(e) {
    // Get data
    let allData = [];
    allData = allData.concat(clockList, glassList, jewelsList, strapList);
    let container = e.target;
    let parentContainer = container.parentElement;
    let id = parentContainer.getAttribute('idpro');
    let product;
    let wishList = localStorage.getItem('wishList');
    wishList = JSON.parse(wishList);
    // Logic
    allData.map( item => {
        if(item.id === Number(id)) product = item;
    })
    wishList.push(product);
    // Lưu vào local
    wishList = JSON.stringify(wishList);
    localStorage.setItem("wishList",wishList);
    // Active
    parentContainer.classList.add('active');
    
}
export default addWishList;