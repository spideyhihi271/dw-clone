const handelClick = (e) => {
    let target = e.target.parentElement.parentElement;
    let listFilter = document.getElementsByClassName('filter__item');
    let idx = target.getAttribute('index');
    listFilter = Object.values(listFilter);
    listFilter.map( (item,index) => {
      if(index != idx){
          item.classList.remove('active');
      }
    })
    target.classList.toggle('active');
}

export default handelClick;