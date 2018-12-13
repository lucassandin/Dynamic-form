import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField
} from "@material-ui/core";
import Progress from "./ProgressBar";
import logo from "../logo.svg";
import "../App.css";

class Finish extends Component {
  readStorage() {
    const aux = JSON.parse(localStorage.getItem("answers"));

    return aux;
  }

  componentDidMount() {
    console.log(this.props.answers);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.result.resultsTitle}</h1>

          <div>
            <h1>Resultado</h1>
            {this.props.answers.map(e => {
              return (
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {e.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {e.value}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Button
            onClick={() => {
              this.props.onStart();
            }}
            title="Go to Form"
            variant="contained"
            color="secondary"
          >
            <strong>Começar novamente</strong>
          </Button>
        </header>
        <Progress Progress="0">Seu Progresso.</Progress>
        <small>
          <strong>Criado por: App Masters</strong>
        </small>
      </div>
    );
  }
}

export default Finish;
