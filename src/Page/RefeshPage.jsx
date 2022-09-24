import React from 'react';

const RefeshPage = () => {
    localStorage.clear('cartList');
    localStorage.clear('wishList');
    return (
        <div>
            This is Refeshed
        </div>
    );
};

export default RefeshPage;