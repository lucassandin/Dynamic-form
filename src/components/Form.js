import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Progress from './ProgressBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';


class App extends Component {

    constructor() {
        super();
        this.state = {
            completed: false,
            answers: []
        }
    }

    onComplete(){
        this.state = {
            completed: true,
            answers: []
        }
    }

    onChange(questionId, event) {
        let answers = this.state.answers;
        answers[questionId] = event.target.value; 
        this.setState(
            answers
        )
        console.log(answers);
        
    }

    /*
    Exemplo de respostas das questions
        [
            {
                id: 0,
                answer: true
            },
            {
                id: 1,
                answer: 1
            }
        ]
    */

    componentDidMount() {
        console.log(this.props.questions); 
        console.log(this.state.answers);    
    }


  render() 
  {
        if(this.props.step === '1')
        {
            return (
                <div className="App">
                  <Progress Progress='1'>Seu Progresso.</Progress>
                  
                    {this.props.questions.map((question)=>{
                        console.log(question);
                        let selected = this.state.answers[question.id];
                        let options;
                        let input;
                        if(question.type === 'boolean')
                        {
                            options = [
                                {
                                    id: true,
                                    option: 'sim',
                                },
                                {
                                    id: false,
                                    option: 'nao',
                                }
                            ]                           
                        }
                        else if(question.type === 'select')
                        {
                            options = question.options;
                        }
                            input =
                                <select onChange={(event) =>this.onChange(question.id, event)}  value={selected}>
                                    {options.map((option)=>{
                                        return(   
                                            <option>{option.option}</option>                                       
                                        )
                                    })}
                                </select>
                        return(
                        <div>
                            <label>{question.title}</label>
                            <br />
                            {input}
                            <br />
                        </div>
                        
                        )
                       
                    })}
               
                  <Button 
                          type="submit" value="Submit"  
                          onClick={()=> {
                          this.props.onComplete()}}
                          variant="contained" color="secondary">
                          <strong>Próxima Pergunta!</strong>
                  </Button>
                  <br />
          
                  <small><strong>Criado por: App Masters</strong></small>
                </div>
              );
        }
        else if(this.props.step === '2')
        {
            return(
                <div className="App">
                  <Progress Progress='1'>Seu Progresso.</Progress>
                  
                    <strong>{this.props.results}</strong>
                    <br />
                  <small><strong>Criado por: App Masters</strong></small>
                </div>
            )
        }
  }
}

export default App;
