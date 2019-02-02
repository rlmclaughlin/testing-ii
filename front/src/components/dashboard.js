import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <div>
              <div>
                <button onClick={this.props.ballHandler}>Ball</button>
                <button onClick={this.props.strikeHandler}>Strike</button>
                <button onClick={this.props.foulHandler}>Foul</button>
                <button onClick={this.props.hitHandler}>Hit</button>
              </div>
            </div> 
        )
    }
}