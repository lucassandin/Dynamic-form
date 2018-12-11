import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Progress from './ProgressBar';
import logo from '../logo.svg';
import '../App.css';

class Welcome extends Component{

      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <h1>Seja bem-vindo ao Recommend-Me</h1>
                <p>{this.props.sugestion.welcomeTitle}</p>
                
                <Button 
                onClick={()=> {
                this.props.onStart()}}
                title="Go to Form"
                variant="contained" color="secondary">
                  <strong>Comece Agora!</strong>
                </Button>
            </header>
            <Progress Progress='0'>Seu Progresso.</Progress>
            <small><strong>Criado por: App Masters</strong></small>
          </div>
        );
      }  

}

export default Welcome;
