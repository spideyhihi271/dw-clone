import React from 'react';
import NavBarMoblie from '../NavBarItem/NavBarMoblie';
import NavBarPC from '../NavBarItem/NavBarPc';

const NavBar = () => {
    return (
        <div>
            <NavBarPC/>
            <NavBarMoblie/>
        </div>
    );
};

export default NavBar;