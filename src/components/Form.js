import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Progress from "./ProgressBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      completed: false,
      answers: []
    };
  }

  onComplete() {
    // this.setLocalStorage();
    this.setState({ completed: true });
    this.props.onComplete(this.state.answers);
  }

  onChange(obj, event) {
    let answers = this.state.answers;
    answers[obj.id] = {
      title: obj.title,
      value: event.target.value
    };

    this.setState(answers);
    console.log(answers);
  }

  //   setLocalStorage() {
  //     localStorage.setItem("answers", JSON.stringify(this.state.answers));
  //   }

  render() {
    return (
      <div className="App">
        <Progress Progress="1">Seu Progresso.</Progress>

        {this.props.questions.map(question => {
          let selected = this.state.answers[question.id];
          let options;
          let input;
          console.log(question.id, selected);

          switch (question.type) {
            case "boolean":
              input = (
                <div>
                  <input
                    type="radio"
                    name="typeRadio"
                    value="sim"
                    onChange={event =>
                      this.onChange(
                        { id: question.id, title: question.title, value: "" },
                        event
                      )
                    }
                  />
                  Sim
                  <input
                    type="radio"
                    name="typeRadio"
                    value="nao"
                    onChange={event =>
                      this.onChange(
                        { id: question.id, title: question.title, value: "" },
                        event
                      )
                    }
                  />
                  Não
                </div>
              );
              break;

            case "select":
              options = question.options;
              input = (
                <select
                  onChange={event =>
                    this.onChange(
                      { id: question.id, title: question.title, value: "" },
                      event
                    )
                  }
                  value={selected && selected.value}
                >
                  {options.map(option => {
                    return <option>{option.option}</option>;
                  })}
                </select>
              );
              break;

            default:
              break;
          }

          return (
            <div style={{ margin: 40, color: "white" }}>
              <label>{question.title}</label>
              <br />
              {input}
              <br />
            </div>
          );
        })}

        <Button
          onClick={() => {
            this.onComplete();
          }}
          variant="contained"
          color="secondary"
        >
          <strong>Concluir</strong>
        </Button>
        <br />

        <small>
          <strong>Criado por: App Masters</strong>
        </small>
      </div>
    );
  }
}

export default App;
