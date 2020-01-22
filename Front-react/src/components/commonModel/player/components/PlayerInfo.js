import React, { Component } from 'react';
import { connect } from 'react-redux';


class PlayerInfo extends Component{

    constructor(props){
        super(props);
        this.state={
         
            
        }
    }
    render(){

        if(this.props.playerState.champions === undefined){
            return(<div></div>)
        }
        else {
            return(
                <div>
                    <div>Id:{this.props.playerState.id}</div>
                    <div>Name:{this.props.playerState.name}</div>
                    <div>RankTier:{this.props.rank_tier}</div>
                    <img src = {"https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon"+ this.props.playerState.profileIconId +".png"}/>
                    <img src = {"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + this.props.playerState.champions[0].championId +".png"} key="champ1-img"/>
                    <img src = {"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + this.props.playerState.champions[1].championId +".png"} key="champ2-img"/>                    
                    <img src = {"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" + this.props.playerState.champions[2].championId +".png"} key="champ3-img"/>            
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       playerState: state.playerReducer
    }
  };

  
  //export the current classes in order to be used outside
export default connect(mapStateToProps)(PlayerInfo);