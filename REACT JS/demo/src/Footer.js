import React, {Component} from "react"
export default class Footer extends React.Component{
  render()
  //function Footer()
  {
    return (
      <div>
        <h1> This is Footer Component</h1>
        <h2>Thanks to {this.props.name}</h2>
        <h3>Received Children Props is: {this.props.children}</h3>
        
      </div>
    );
  }
  //export default Footer;
}