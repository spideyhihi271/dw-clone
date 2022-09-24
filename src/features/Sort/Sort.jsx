const Sort = (input,value) => {
    switch (value) {
        case 'min':
            input = input.sort( (a,b) => a.price - b.price);
            
            break;
        case 'max':
            input = input.sort( (a,b) => b.price - a.price);
            break;
        default:
            break;
    }
    return input;
};

export default Sort;