import React, {Component} from 'react';
import {Button,Card,CardGroup, Accordion} from 'react-bootstrap';
import './css/AutresTournois.css';



import {DisplayTournaments} from '../../actions';
import {connect} from 'react-redux';
import {setTournamentIdAction} from '../../actions';
var axios=require('axios') ;


class AutresTournois extends Component{
    constructor(props){
        super(props);
        this.state={
            idTournoi: null
        }
        this.sendRequestUpdate= this.sendRequestUpdate.bind(this);
        this.sendRequestUpdate();
    }

    setTournamentId(tournamentId){
        this.state.idTournoi= tournamentId;
        console.log(this.state.idTournoi)
    }
    handleSubmit(event) {
        event.preventDefault();
      }
    sendRequestUpdate() {
        let self = this;
        /*user.name=name;
        user.surname=surname;
        user.isAdmin=isAdmin;
        user.email=email;
        user.password= password;*/
        axios.get("http://localhost:8083/tournaments")
                        .then(function (response) {
                            self.props.dispatch(DisplayTournaments(response.data))
                            })
                            .catch(function(error){
                                console.log(error);
                            })
                        }

    render(){
        let self = this;
        if(this.props.tournaments.allTournaments === undefined){
            return(<div> Pas défini</div>)
        } else {
        return(
           
            <div>
                <h1>Autres tournois</h1>

                {/* <div>{this.props.tournaments.allTournaments}</div> */}
                {this.props.tournaments.allTournaments.map((tournament,i)=>{
                    return(
                        <Accordion className="accordion">

                    <Card className="cardTournoi">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="tournamentName">
                        <div id="tournamentName"> {tournament.name} </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <div id="hehe">
                        <div id="tournamentDes"> {tournament.description} </div>
                        <Button  href='/inscriptionTournoi' id="inscription">S'inscrire</Button>
                        </div>
                        </Accordion.Collapse>
                </Card>
                </Accordion>
                    )
                })}
               
            </div>
        )}
    }

}

const mapStateToProps = (state,ownProps) => {
    return{
        tournaments: state.displayTournamentsReducer,
        tournamentId: state.setTournamentIdReducer
    }
}
export default connect(mapStateToProps)(AutresTournois);