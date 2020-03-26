import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = porps => {
    return(
        <NavLink activeStyle={{fontWeight: 'bold'}} {...porps} />
    );
}

export default LinkWrapper;