import React from 'react';

function Cart({addChocolate, addVanilla, addOreo, addStrawberry, total}){   
    
        return (            
            <div>                
            <div style={{ backgroundColor: '#ce93d8' }}><br></br>
                    
                <h5 className="center-align">{addChocolate}{addVanilla}{addOreo}{addStrawberry}</h5>
                <h4 class="center-align"><b>{total}</b></h4>
                <br></br>              

                </div>
                </div>                   
            )
    
}
export default Cart;