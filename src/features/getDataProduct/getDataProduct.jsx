import React from 'react';
import clockList from '../../data/clock';
import glassList from '../../data/glass';
import jewelsList from '../../data/jewels';
import strapList from '../../data/strap';

const getDataProduct =  (id) => {
    id = Number(id);
    let data = [];
    let result;
    data =  data.concat(clockList, glassList, jewelsList, strapList);
    data.map( item => {
        if(item.id === id) result = item;
    })
    return result;
};

export default {getDataProduct};