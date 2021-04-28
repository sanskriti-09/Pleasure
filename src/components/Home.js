import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import background from 'F:/Pleasure ice cream/pleasure-ice-cream/src/bg.jpg'
import icecream3 from 'F:/Pleasure ice cream/pleasure-ice-cream/src/ice-cream.jpg'


function Home() {
    return (
        <div>
            <div className="home-page" style={{ backgroundImage: `url(${background})` }}>

                <div className='row'>
                    <div className='col s6'><br></br><br></br>
                        <h3 style={{ marginLeft: '124px', marginTop: '80px', color: '#37474f' }}><b>PLEASURE</b> is the</h3>
                        <h3 style={{ marginLeft: '120px', color: '#37474f' }}>path to ice-cream  <br></br></h3>
                    </div>
                    <div className='col s6'>
                        <aside><img className="circle responsive-img hide-on-med-and-down" src={icecream3} style={{ height: '200px', width: '240px', marginLeft: '100px', marginTop: '90px' }} /></aside>
                    </div>

                    <h2 style={{ marginLeft: '170px' }}> <br></br></h2>
                    <h1 style={{ marginLeft: '170px' }}> <br></br></h1>
                    <h1 style={{ marginLeft: '170px' }}> <br></br></h1>
                    <h1 style={{ marginLeft: '170px' }}> <br></br></h1>

                </div>

            </div><br></br>
            <center><h4><b>SCOOPING & SERVING HAPPINESS INTO YOUR LIFE  <i class="material-icons" style={{ fontSize: '37px' }}>bubble_chart</i></b></h4></center><br></br>
            <center><h5>Get delicious ice creams available in a variety of flavours.</h5></center>
            <center><h5>Made with fine ingredients. No preservatives or artificial flavours added. Stay indoors and enjoy!</h5></center>
            <center><h5> Explore our mouth-watering collections and order yours today.</h5></center><br></br><br></br>

        </div>
    )
}
export default Home