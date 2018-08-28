import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1476.9310497434844!2d-75.14542708779484!3d39.92953260816314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c8a4e89419e7%3A0x4cabf966c7c0d943!2sWarmdaddy&#39;s!5e0!3m2!1sen!2sus!4v1534513988768"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
