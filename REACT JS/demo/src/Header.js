import React, {Component} from "react"
//export default class Header extends React.Component{
 //render(name)
 //{
function Header(props) 
{
    return (
      <div>
        <h1> This is Header Component </h1>
        <h2> Learning with {props.name}</h2>
        <h2> Subject is : {props.subject}</h2>
      </div>
    );
  }
export default Header;