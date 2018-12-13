import React, { Component } from "react";
import Questions from "./components/Questions";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Finish from "./components/Finish";

const sugestions = [
  {
    welcomeTitle: "bem vindo, vamos achar seu jogo",
    questions: [
      {
        id: 0,
        title: "Você gosta de interagir com as pessoas?",
        type: "boolean"
      },
      {
        id: 1,
        title: "Quanto tempo você quer jogar?",
        type: "select",
        options: [
          {
            id: 0,
            option: "15 minutos"
          },
          {
            id: 1,
            option: "mais de 30 minutos"
          },
          {
            id: 2,
            option: "mais de 1 hora"
          }
        ]
      }
    ],
    results: ["mario", "zelda", "topgear", "cs", "metalslug", "gta"],
    resultsTitle: "Encontramos o seu jogo.",
    results2: [
      {
        title: "mario",
        categories: ["ação", "aventura", "single-player"]
      },
      {
        title: "zelda",
        categories: ["ação", "aventura", "single-player"]
      },
      {
        title: "cs",
        categories: ["ação", "fps", "multi-player"]
      }
    ],
    finalResult: [
      {
        interagir: "true",
        categories: ["acao", "aventura", "puzzle"],
        games: ["gta", "cs"],
        time: "30"
      },
      {
        interagir: "false",
        categories: ["acao", "aventura", "puzzle"],
        games: ["mario", "zelda"],
        time: "60"
      }
    ]
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      sugestion: sugestions[0],
      step: 0,
      answers: []
    };
  }

  render() {
    switch (this.state.step) {
      case 0:
        return (
          <Welcome
            sugestion={this.state.sugestion}
            onStart={() => this.setState({ step: 1 })}
          />
        );
        break;
      case 1:
        return (
          <Form
            step="1"
            questions={this.state.sugestion.questions}
            onComplete={answers => {
              this.setState({ step: 2 });
              this.setState({ answers: answers });
            }}
          />
        );
        break;
      case 2:
        return (
          <Finish
            result={this.state.sugestion}
            answers={this.state.answers}
            onStart={() => this.setState({ step: 0 })}
          />
        );
        break;
      default:
        break;
    }

    this.state.step.map(step => {
      return <Form questions={this.state.sugestion.questions} step={step} />;
    });
  }
}

export default App;
