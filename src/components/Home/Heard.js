import React from 'react'
import HomeSection from './HomeSection';
import { homeObjOne } from './Data';


function Heard() {
    return (
        <>
            <HomeSection {...homeObjOne} />
        </>
    )
}

export default Heard