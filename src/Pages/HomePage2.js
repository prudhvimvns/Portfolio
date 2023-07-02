import React from 'react';
import { Outlet} from "react-router-dom";

import './HomePage2.css';



const HomePage2 = () =>{
    return (<>
    <div className="body1">
        <h1>HomePage 2</h1>
    </div>

    {/* <header>
        <h1>momm</h1>
    </header> */}
{/* 
    <div className="aside">
        <p>iehi2hd3hi3hwdihdh3wu4h3ihdihjdi2 2hi </p>
    </div> */}
{/* 
<button className="but">iohd3ihil3
    <div id="boom">
        <h1>iuedh2iud</h1>
    </div>
    </button> */}

    <div id="boom">
        <h1>iuedh2iud</h1>
    </div>

    {/* <div className="para">
        <p>eoiwh3ieh</p>
    </div> */}



    <p class="text-2xl text-gray3">

    </p>
    
    <Outlet/>
    </>);
};

export default HomePage2;