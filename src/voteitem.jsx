import React, { Component } from 'react'

export class VoteItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="image"><img src={this.props.splash} /></div>
                <div class="votebutton"><button>Vote</button></div>
                <div class="info">

                    <h3>{this.props.name}</h3>
                    <p>Released on {this.props.releasedate}</p>
                    <p>Designed by {this.props.designer}</p>
                    <p>Marksman type: {this.props.classification}</p>
                </div>
            </div>
        )
    }
}

export default VoteItem
