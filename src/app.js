import React, { Component } from 'react';
import Header from "./header";
import VoteItem from "./voteitem";

export class App extends Component {
  state = {
    information: [
      {
        id: 1,
        info: "https://leagueoflegends.fandom.com/wiki/Jinx",
        splash: "https://cdn.discordapp.com/attachments/526524488280702976/670313953758281750/2Q.png",
        name: "Jinx, the Loose Cannon",
        releasedate: "October 10, 2013",
        classification: "Hypercarry",
        designer: "RiotAugust",
        votes: 0
      },
      {
        id: 2,
        info: "https://leagueoflegends.fandom.com/wiki/Kog'Maw",
        splash: "https://cdn.discordapp.com/attachments/526524488280702976/671053717688025100/KogMaw_Splash_0.png",
        name: "Kog'Maw, the Mouth of the Abyss",
        releasedate: "June 24, 2010",
        classification: "Hypercarry",
        designer: "RiotPenDragon",
        votes: 0
      },
      {
        id: 3,
        info: "https://leagueoflegends.fandom.com/wiki/Ezreal",
        splash: "https://cdn.discordapp.com/attachments/526524488280702976/671053899288805376/9k.png",
        name: "Ezreal, the Prodigal Explorer",
        releasedate: "March 16, 2010",
        classification: "Artillery Marksman",
        designer: "RiotEzreal",
        votes: 0
      },
      {
        id: 4,
        info: "https://leagueoflegends.fandom.com/wiki/Caitlyn",
        splash: "https://cdn.discordapp.com/attachments/526524488280702976/671054026388930570/Z.png",
        name: "Caitlyn, the Sheriff of Piltover",
        releasedate: "January 4, 2011",
        classification: "Siege Marksman",
        designer: "RiotCertainlyT",
        votes: 0
      },
      {
        id: 5,
        info: "https://leagueoflegends.fandom.com/wiki/Lucian",
        splash: "https://cdn.discordapp.com/attachments/526524488280702976/671054259713736734/Lucian-Classic.png",
        name: "Lucian, the Purifier",
        releasedate: "August 22, 2013",
        classification: "Burst Marksman",
        designer: "RiotJag",
        votes: 0
      }
    ]
  }
  clickHandler = (signature) => {
    this.setState({
      votes: this.state.information.map(elem => {
        if (signature === elem.id) {
          elem.votes = elem.votes + 1;
        }
        return elem;
      })
    })

  };

  render() {
    return (
      <div className="wrapper" >
        <div className="header">
          <Header />
        </div>
        <div className="items">
          {this.state.information.map((element) => <VoteItem clickHandler={this.clickHandler} key={element.name} info={element} />)}


        </div>
      </div>
    )
  }
}

export default App
