import React, { useState } from "react";

import "../style/Contact.css";

const props = {
  icons: [
    {
      cName: "fab fa-github fa-5x",
      url: "https://github.com/jordan-liubenov",
    },
    {
      cName: "fab fa-linkedin fa-5x",
      url: "https://www.linkedin.com/in/jordan-liubenov-a92b81228/",
    },
  ],
  email: "jordan.liubenov62@gmail.com",
};

const Contact = () => {
  const [textToShow, setTextToShow] = useState(false);

  const handleClick = () => {
    //navigator.clipboard.writeText("jordan.liubenov62@gmail.com");
    setTextToShow(!textToShow);
  };

  return (
    <section id="Contact">
      <h1>Say hi!</h1>
      <div className="icon">
        {props.icons.map((icon) => (
          <a key={icon.cName} href={icon.url}>
            <i className={icon.cName}></i>
          </a>
        ))}
        <a href="mailto:johndoe@fakeemail.com">
          <i
            onClick={handleClick}
            id="envelope"
            className="fas fa-envelope-square fa-5x"
          ></i>
        </a>
      </div>

      <p id="text" className="adresses">
        Find me on the following platforms!
      </p>
      {textToShow ? (
        <div className="emailBox">
          <p id="email" className="mail">
            {props.email}
          </p>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Contact;
