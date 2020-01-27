import React, { Component } from 'react';
import Header from "./header";
import VoteItem from "./voteitem";

export class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <Header />
                </div>
                <div className="items">
                    <VoteItem
                        splash="https://cdn.discordapp.com/attachments/526524488280702976/670313953758281750/2Q.png"
                        name="Jinx, the Loose Cannon"
                        releasedate="October 10, 2013"
                        classification="Hypercarry"
                        designer="RiotAugust"
                    />
                    <VoteItem
                        splash="https://cdn.discordapp.com/attachments/526524488280702976/671053717688025100/KogMaw_Splash_0.png"
                        name="Kog'Maw, the Mouth of the Abyss"
                        releasedate="June 24, 2010"
                        classification="Hypercarry"
                        designer="RiotPenDragon" />
                    <VoteItem
                        splash="https://cdn.discordapp.com/attachments/526524488280702976/671053899288805376/9k.png"
                        name="Ezreal, the Prodigal Explorer"
                        releasedate="March 16, 2010"
                        classification="Artillery Marksman"
                        designer="RiotEzreal" />
                    <VoteItem
                        splash="https://cdn.discordapp.com/attachments/526524488280702976/671054026388930570/Z.png"
                        name="Caitlyn, the Sheriff of Piltover"
                        releasedate="January 4, 2011"
                        classification="Siege Marksman"
                        designer="RiotCertainlyT" />
                    <VoteItem
                        splash="https://cdn.discordapp.com/attachments/526524488280702976/671054259713736734/Lucian-Classic.png"
                        name="Lucian, the Purifier"
                        releasedate="August 22, 2013"
                        classification="Burst Marksman"
                        designer="RiotJag" />
                </div>
            </div>
        )
    }
}

export default App
