import React from 'react';
import TableGlass from '../TableSpec/TableGlass';
import TableJewels from '../TableSpec/TableJewels';
import TableStrap from '../TableSpec/TableStrap';
import TableCLock from '../TableSpec/TableWatch';
import './style.css';

const DetailsSpecitial = ({product}) => {
    return (
        <div className='detailspec'>
            <p className="detailsspec__title">THÔNG SỐ CHI TIẾT</p>
            <div className="detailspec__container">
                <div className="detailspec__container-item">
                    <p>{product.description}</p>
                </div>
                <div className="detailspec__container-item">
                    {product.classify === "clock" &&
                        <TableCLock product={product}/>
                    }
                    {product.classify === "jewels" &&
                        <TableJewels product={product}/>
                    }
                    {product.classify === "glass" &&
                        <TableGlass product={product}/>
                    }
                    {product.classify === "strap" &&
                        <TableStrap product={product}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailsSpecitial;