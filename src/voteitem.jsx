import React from 'react'


const VoteItem = (props) => {

  return (
    <div className="container">
      <div><img className="image" src={props.info.splash} /></div>
      <div className="votebutton"><button onClick={() => props.clickHandler(props.info.id)}>Vote! Total votes: {props.info.votes}</button></div>
      <div className="info">

        <h3>{props.info.name}</h3>
        <a href={props.info.info}>More Info</a>
        <p>Released on {props.info.releasedate}</p>
        <p>Designed by {props.info.designer}</p>
        <p>Marksman type: {props.info.classification}</p>
      </div>
    </div>
  )
}
export default VoteItem
