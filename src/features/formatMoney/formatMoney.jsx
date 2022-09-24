function formatMoney(money) {
    let moneyReturn = 0;
    moneyReturn = Number(money);
    moneyReturn = moneyReturn.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
    })
    return moneyReturn;
}

export default formatMoney;