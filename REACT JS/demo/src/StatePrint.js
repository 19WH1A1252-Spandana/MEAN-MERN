import React from "react";
export default class StatePrint extends React.Component{
    render()
    {
              return(
                  <div>
                        <h1>Your Name is :{this.props.data.name}</h1>
                        <h1>Your Subject is :{this.props.data.subject}</h1>
                        <h1>Your fees is :{this.props.data.fees}</h1>
                        <h1>Your duration is :{this.props.data.duration}</h1>
                        <h1>Is it Certified :{JSON.stringify(this.props.data. isCertified)}</h1>
                        <h1>Your Address is :{this.props.data.address.doorNo}{this.props.data.address.street} {this.props.data.address.city}</h1>
                  </div>
                
              )
    }
}
