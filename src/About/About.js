import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="about-wrapper">
          <div className="about-inner-wrapper">
            <h2>Welcome to Tiny Lunches!</h2>
            <p>
              This app was designed with the intention of giving new sleep
              deprived parents an easier way to create lunches for their kids
            </p>
            <p>
              You can access the basic features and demo for this app by
              clicking this link: <Link to="/main">Main Page</Link>
            </p>
            <p>
              For more advanced features and the ability to save your lunches,
              items, and create shopping lists, please create an account or sign
              in by clicking the icon in the top right corner.
            </p>
            <p>
              Once logged in, you will have access to your Pantry. Your pantry
              is your list of saved items that will also include quantities so
              that they can be tracked and added to your shopping list
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
