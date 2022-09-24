function color(color) {
    let colorReturn = "black";
    switch (color) {
        case 'Xanh lục':
            colorReturn = '#C2DED2'
            break;
        case 'Đen':
            colorReturn = '#474441'
            break;
        case 'Hồng':
            colorReturn = '#EAC6C5'
            break;
        case 'Vàng hồng':
            colorReturn = '#e2ae89'
        break;
        case 'Hổ phách':
            colorReturn = '#815a25'
        break;
        case 'Bạc':
            colorReturn = '#6E6E6E'
        break;
        default:
            colorReturn = "white"
            break;
    }
    return colorReturn;
}

export default color;