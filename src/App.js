import React, { Component } from 'react';
import Lettre from './Lettre';
import './App.css';
import shuffle from 'lodash.shuffle';
import LISTEMOT from './ListeMot';
import Clavier from './clavier';

const testMot= ["s","a","l","u","t"]; //Mot Test
const TabLettre= 'ABCDEFGHIJKLMNOPQRSTUWXYZ' //Liste de l'alphabet



class App extends Component {

  //L'Etat Local
  state = {
    mot: this.generateMot(), //Le Mot a trouver
    clavier: this.generateClavier(), //Le clavier pour le choix
    usedLetters: [], //Le tableau des choix déjà utiliser
    guesses: 0, //Le nombre d'essai
  }

// Produit une représentation textuelle de l’état de la partie,
// chaque lettre non découverte étant représentée par un _underscore_.
// (CSS assurera de l’espacement entre les lettres pour mieux
// visualiser le tout).
 computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : '_')
    )
  }

  // Genere un mot de la Liste de Mot (LISTEMOT)
  generateMot() {
    const candidates = shuffle(LISTEMOT)  
    const mot = candidates.pop()        
    return mot
  }

  //Genere le clavier avec l'alphabet
  generateClavier() {
    const TabTouche = []
    for(var i = 0; i < TabLettre.length; i++)
    {
      TabTouche.push(TabLettre[i]);
    }
    return TabTouche
  }

  //Retourne le feedback de la lettre si elle est visible ou non
  getFeedBackForLettre(index){
    const {usedLetters, mot} = this.state
    var statu = "hidden"
    if(usedLetters.includes(mot[index])){
      statu = "visible"
    }
    return statu
  }

  // Arrow fx for binding
  // Evenement Click sur une touche du clavier
  handleToucheCLick = (touche) =>{
    const {mot, usedLetters} = this.state
    var guesses = this.state.guesses

    console.log(touche)
    guesses++ 
    if(mot.includes(touche))
    {
      mot[mot.indexOf(touche)].feedback="visible"
      usedLetters.push(touche);   
    }    
  }

  render() {
    const {mot, clavier, usedLetters, guesses} = this.state
    //const won = usedLetters.length === mot.length
    return (
      <div>
          <h1 className="title">Jeux du Pendu</h1>
          <p className="resum">Trouve le mot caché</p>
          <div className="mot">
            {mot.map((lettre,index) =>(
              <Lettre 
              lettre={lettre}
              key={index}
              index={index}
              feedback={this.getFeedBackForLettre(index)}
              />  
            ))}
          </div>
          <div className="clavier">
            {clavier.map((touche)=>(
            <Clavier
              touche={touche}
              onClick={this.handleToucheCLick}
              key={touche}
            />
            ))}
          </div>
          <div>
            <p className="resum">Nombre d'essai : {guesses}</p>
          </div>
      </div>
      
    );
  }
}

export default App;
