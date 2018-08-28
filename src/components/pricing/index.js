import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {


state = {
  prices: [500, 1500, '4,000', '15,000'],
  positions: ['Balcony', 'Medium', 'Star', 'Executive'],
  desc:[
    'Lorem ipsum dolor sit amet, consectetur. Proin rutrum sem vitae ipsum faucibus consectetur.',
    'Maecenas faucibus nunc enim, a iaculis massa cursus ac. Nulla rhoncus sit amet lectus eget.',
    'Sed ut orci nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla rhoncus urna non vehicula.',
    'Lorem ipsum dolor amet etsy wolf glossier chia schlitz twee letterpress, shoreditch bicycle rights beard occupy. Schlitz VHS enamel pin thundercats trust fund. DIY keffiyeh artisan, occupy locavore unicorn VHS man braid ethical. Coloring book beard messenger bag, flannel 90s retro single-origin coffee meh. Forage bespoke listicle brooklyn before they sold out wayfarers gentrify neutra chicharrones +1 beard taxidermy.'
  ],
  linkto:['http://sales/b','http://sales/m','http://sales/s','http://sales/e'],
  delay:[500,0,500,1000]
}

showBoxes = () => (

  this.state.prices.map((box,i) => (
    <Zoom delay={this.state.delay[i]} key={i}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">
            <span>{this.state.desc[i]}</span>
          </div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              bck="#ffa800"
              link={this.state.linkto[i]}
            />
          </div>
        </div>
      </div>
    </Zoom>
  )
)


)


  render () {
    return(
   <div className="bck_black">
       <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
    </div>
  );
  }
}

export default Pricing
