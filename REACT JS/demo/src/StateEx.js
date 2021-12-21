import React, { Component } from 'react';
import StatePrint from './StatePrint';
export default class StateEx extends React.Component{
             constructor()
             {
                 super()
                 this.state = {
                     name : "Pasha MD",
                     subject : "ReactJS",
                     fees:9898.98,
                     duration:15,
                     isCertified:true,
                     address :{doorNo : '11-145 ',street : 'East ',city: 'Hyderabad'}
                 }
             }
             render()
             {
                 return <div>
                    <StatePrint data = {this.state}/> 
                 </div>
             }
}