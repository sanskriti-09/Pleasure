import React, { useState } from 'react'
import chocolate from 'F:/Pleasure ice cream/pleasure-ice-cream/src/chocolate.jpg'
import vanilla from 'F:/Pleasure ice cream/pleasure-ice-cream/src/vanilla.jpg'
import strawberry from 'F:/Pleasure ice cream/pleasure-ice-cream/src/strawberry.jpg'
import oreo from 'F:/Pleasure ice cream/pleasure-ice-cream/src/oreo.jpg'

import Cart from './Cart'

function Parlour() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)


    return (
        <div>
            <div style={{ backgroundColor: '#90caf9' }}><br></br><br></br>

                <div class="row">
                    <div class="col s12 m3">
                        <div class="card hoverable" style={{ marginLeft: '30px' }}>
                            <div class="card-image">
                                <img src={chocolate} />
                            </div>
                            <div class="card-content">
                                <span>  <a class="btn waves-effect waves-light pink" type="submit" name="action" onClick={() => setCount(count + 1)}> <i class="material-icons">add</i></a>
                                    <a class="btn halfway-fab waves-effect waves-light deep-purple lighten-2" onClick={() => setCount(count > 0 && count - 1)}><i class="material-icons">remove</i></a><br></br><br></br>
                                    {count > 0 && <p>Quantity - {count}</p>}
                                </span>

                                <h6><b>Chocolate</b></h6>
                                <p>&#8377; 220</p>

                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card hoverable" style={{ marginLeft: '25px' }}>
                            <div class="card-image">
                                <img src={vanilla} />
                            </div>
                            <div class="card-content">
                                <span><a class="btn halfway-fab waves-effect waves-light pink" type="submit" name="action" onClick={() => setCount2(count2 + 1)}><i class="material-icons">add</i></a>
                                    <a class="btn halfway-fab waves-effect waves-light deep-purple lighten-2" onClick={() => setCount2(count2 > 0 && count2 - 1)}><i class="material-icons">remove</i></a><br></br><br></br>
                                    {count2 > 0 && <p>Quantity - {count2}</p>}
                                </span>

                                <h6><b>Vanilla</b></h6>
                                <p>&#8377; 200</p>

                            </div>
                        </div>
                    </div>

                    <div class="col s12 m3">
                        <div class="card hoverable" style={{ marginLeft: '25px' }}>
                            <div class="card-image">
                                <img src={oreo} />
                            </div>
                            <div class="card-content">
                                <span><a class="btn halfway-fab waves-effect waves-light pink" onClick={() => setCount3(count3 + 1)}><i class="material-icons" >add</i></a>
                                    <a class="btn halfway-fab waves-effect waves-light deep-purple lighten-2" onClick={() => setCount3(count2 > 0 && count3 - 1)}><i class="material-icons">remove</i></a><br></br><br></br>
                                    {count3 > 0 && <p>Quantity - {count3}</p>}
                                </span>

                                <h6><b>Oreo</b></h6>
                                <p>&#8377; 250</p>

                            </div>
                        </div>

                    </div>
                    <div class="col s12 m3">
                        <div class="card hoverable" style={{ marginLeft: '25px' }}>
                            <div class="card-image">
                                <img src={strawberry} />
                            </div>
                            <div class="card-content">
                                <span><a class="btn halfway-fab waves-effect waves-light pink" onClick={() => setCount4(count4 + 1)}><i class="material-icons">add</i></a>
                                    <a class="btn halfway-fab waves-effect waves-light deep-purple lighten-2" onClick={() => setCount4(count2 > 0 && count4 - 1)}><i class="material-icons">remove</i></a><br></br><br></br>
                                    {count4 > 0 && <p>Quantity - {count4}</p>}
                                </span>
                                
                                <h6><b>Strawberry</b></h6>
                                <p>&#8377; 210</p>

                            </div>
                        </div>
                    </div>

                </div><br></br>
                <div style={{ backgroundColor: '#ce93d8' }}><br></br>
                    <h3><center><b>CART  </b><i class="material-icons" style={{ fontSize: '36px' }}>shopping_cart</i></center></h3><br></br></div>
                {count > 0 && <Cart addChocolate={`Chocolate: ${count} * 220 = Rs. ${count * 220}`} />}
                {count2 > 0 && <Cart addVanilla={`Vanilla: ${count2} * 200 = Rs. ${count2 * 200}`} />}
                {count3 > 0 && <Cart addOreo={`Oreo: ${count3} * 250 = Rs. ${count3 * 250}`} />}
                {count4 > 0 && <Cart addStrawberry={`Strawberry: ${count4} * 210 = Rs. ${count4 * 210}`} />}

                {<Cart total={`Total Amount = Rs. ${count * 220 + count2 * 200 + count3 * 250 + count4 * 210}`} />}

            </div>
        </div>
    )
}

export default Parlour;