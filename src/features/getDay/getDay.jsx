const getDay = () => {
    // curDate sẽ lưu trữ thời gian hiện tại
    var curDate = new Date();
    
    // Lấy ngày hiện tại
    var curDay = curDate.getDate();
    console.log(curDay);
    
    // Lấy tháng hiện tại
    var curMonth = curDate.getMonth() + 1;
    console.log(curMonth);
    
    // Lấy năm hiện tại
    var curYear = curDate.getFullYear();
    console.log(curYear);

    // Nối ngày
    let result = `${curDay} thg ${curMonth}, ${curYear}`;
    return result;
}

export default getDay;