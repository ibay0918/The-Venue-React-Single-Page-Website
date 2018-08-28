import React from 'react';
import Fade from 'react-reveal/Fade';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';


const Description = () => {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2>Highlights</h2>
        <div className="highlight_description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur dignissim diam a semper. Sed non mollis est. Proin rutrum sem vitae ipsum faucibus consectetur. Maecenas faucibus nunc enim, a iaculis massa cursus ac. Nulla rhoncus sit amet lectus eget posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, risus et vestibulum rutrum, magna sapien pharetra quam, vel eleifend mauris ipsum sed mi. Sed ut orci nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla rhoncus urna non vehicula.</p>
        </div>
      </div>
    </Fade>
  );
};

export default Description ;
