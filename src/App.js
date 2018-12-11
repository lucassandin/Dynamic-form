import React, { Component } from 'react';

import Welcome from './components/Welcome';
import Form from './components/Form';

const sugestions = [
  {
    welcomeTitle: 'bem vindo, vamos achar seu jogo',
    questions: [
      {
      id: 0,  
      title: 'Você gosta de interagir com as pessoas?',
      type: 'boolean',
      },
      {
        id: 1,
        title: 'Quanto tempo você quer jogar?',
        type: 'select',
        options: [
          {
           id: 0,
            option: '15 minutos',      
          },
          {
           id: 1,
            option: 'mais de 30 minutos',      
          },
          {
           id: 2,
            option: 'mais de 1 hora',      
          }
        ]
      }
    ],
    results: ['mario','zelda','topgear','cs','metalslug','gta'],
    results2: [
      {
        title: 'mario',
        categories: ['ação', 'aventura', 'single-player'],
      },
      {
        title: 'zelda',
        categories: ['ação', 'aventura', 'single-player'],
      },
      {
        title: 'cs',
        categories: ['ação', 'fps', 'multi-player'],
      }
    ]

  }
];



class App extends Component {

  constructor(){
    super();
    this.state={
        sugestion: sugestions[0],
        step: 0,
    }
}


  render() {

      if(this.state.step === 0){
        return (
          <Welcome sugestion={this.state.sugestion} onStart={()=> this.setState({step: 1})}></Welcome>
        );
      }
      else if(this.state.step === 1)
      {
        return(
         <Form step='1' questions={this.state.sugestion.questions} onComplete={()=> this.setState({step:2})} ></Form>
        )
      }
      else if(this.state.step === 2)
      {
        return(
         <Form results={this.state.sugestion.results} step='2'></Form>
        )
      }

      this.state.step.map((step)=> {
        return( 
        
        <Form questions={this.state.sugestion.questions} step={step}></Form>
        
        )
       
      })
  }
}

export default App;
