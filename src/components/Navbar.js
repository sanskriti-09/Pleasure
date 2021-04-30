import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

function Navbar(){
    return(
    <div>            
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo" style={{fontSize:'32px'}} > <i class="material-icons" style={{ marginLeft: '22px' }}>favorite</i>Pleasure </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#" style={{fontSize:'24px'}} id='home'>Home</a></li>
                    <li><a href="#" style={{fontSize:'24px'}} id='shop'>Parlour</a></li>
                    <li><a href="#" style={{fontSize:'24px'}} id='contact'>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </div>
    )
}
export default Navbar
