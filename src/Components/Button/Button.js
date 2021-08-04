import React from "react";
import {Link} from "react-router-dom";

const Button=()=> {
return(
    <div>
    <Link to='/'>
        <button>
            Home
        </button>
    </Link>
    <Link to='/Categories'>
        <button>
            Categories
        </button>
    </Link>
    </div>
)
}

export default Button;