import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

porcentage = () => {
  if(this.state.discountStart < this.state.discountEnd){
    this.setState({
      discountStart: this.state.discountStart + 1
    })
  }
}


componentDidUpdate() {
  setTimeout(() => {
    this.porcentage()
  }, 40)
}

  render() {
    return (
        <div className="center_wrapper">
          <div className="discount_wrapper">

            <Fade onReveal={()=> this.porcentage()}>
              <div className="discount_porcentage">
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
              </div>
            </Fade>

            <Slide right>
              <div className="discount_description">
                <h3>Purchase tickets before 20th of November</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur dignissim diam a semper. Sed non mollis est. Proin rutrum sem vitae ipsum faucibus consectetur. Maecenas faucibus nunc enim, a iaculis massa cursus ac.</p>
                <MyButton
                    text="Purchase tickets"
                    bck="#ffa800"
                    color="#fff"
                    link="http://www.google.com"
                />
              </div>
          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;
