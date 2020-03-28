import React, { Component } from 'react';
import './PlayGame.css';
import 'materialize-css/dist/css/materialize.min.css';
import ApiService from '../../Util/ApiService';
import PopUp from '../../Util/PopUp';
import Letters from '../../data/letters.json';

const renderLettersFromJson = () => {
    return Letters.letters.map((letters, index) => {
        return (
            <span className="card-panel teal lighten-2 letter_tile" key={index}>
                {letters}
            </span>
        );
    });
}

class PlayGame extends Component {
    randomLetters = [];
    
    constructor(props) {
        super(props);

        this.state = {
            titles: [],
            letters: renderLettersFromJson(),
            isStart: false,
            isGameOver: false

        }
    }
    
    componentDidMount = () => {
        ApiService.EnglishTitles()              
                  .then(res => {
                    //console.log(res);
                    if (res.length > 0) {
                        // PopUp.displayMessage('success', 'Success list the titles.'); 
                        this.setState({titles: [...this.state.titles, ...res]});
                    }
                  }).catch(err => PopUp.displayMessage('error', 'Error in api communication when trying to fetch data.'));
    }

    randomLetterToPlay = () => {
        //let randomLetters = [];
        let letters = Letters.letters.map(letter => letter);
        
        while(this.randomLetters.length < 21) {
            this.randomLetters.push(letters[Math.floor(Math.random() * letters.length)]);
        }

        return this.randomLetters.map((letters, index) => {
            return (
                <span className="card-panel teal lighten-2 letter_tile" key={index}>
                    {letters}
                </span>
            );
        });
    }

    handleGameStart = () => {
        this.setState({ isStart: !this.state.isStart });
    }

    renderEnglishTitle = () => {
        const { titles } = this.state; //destructuring

        return (
            titles.map(value => <p key={value.id}>{value.title}</p>)
        );
    }

    createInput = () => {
        return (
            // <input className="" type="text" name="name" />
            <div className="input-field col s6">
                <input id="animeTitles" type="text" className="validate" />
                <label htmlFor="animeTitles">Titles</label>
            </div>
        );
    }

    getWordsFromInput = () => {        
        let lettersToCheck = this.randomLetters.toString().replace(/,/g, ''); // Convert the array to a string and replace all commas with no space.
        let inputValues = document.querySelector('#animeTitles').value.toUpperCase();
        let arr = [];

        arr.push(inputValues.split(',')); // Will put the values in the input in to the array arr. 

        //console.log(arr.length);
        //this.handleGameOver();

        //console.log(inputValues);
        // console.log(arr[i].toString().toUpperCase());
        // console.log(lettersToCheck);

        for (let i = 0; i < arr.length; i++) {            
            if (!arr[i].toString().match(/\d/)) { // Check if the string have a number.                
                if (this.checkContain(arr[i].toString(), lettersToCheck)) {
                    console.log("Cheek");

                    


                }
            }
        }

        document.querySelector('#div').innerHTML = arr.toString();
        // document.querySelector('#div').innerHTML = lettersToCheck;
    }

    gameOver = () => {
        return <h5>Game Over</h5>;
    }

    handleGameOver = () => {
        this.setState({ isGameOver: !this.state.isGameOver });
    }

    checkContain = (str, lettersToCheck) => {
        let temp = str.replace(/,/g, '').replace(/\s/g,''); // replace all commas with no space, and the second replace, if exist any space in the string, will remove.
        let letters = [...lettersToCheck];
        // console.log(temp);
        return [...temp].every(letter => {
            // console.log(letter);
            let index = letters.indexOf(letter); // this will return the number of the index in letter's, passing the letter in temp. Or give -1 if not exist index.
            // console.log(index);
            if (~index) { // If the index is not -1
                //console.log(lettersToCheck);
                //letters.splice(index, 1);
                return true;
            }
            return false;
        })
    }

    render() {
        // console.log(this.state.titles);
        const { letters, isStart, isGameOver } = this.state; //destructuring

        return (
            <>
                <div className="container mb-10">        
                    <h2>Let's Play!!!</h2>
                    <h5>Press Start to begin!</h5>
                    <button className="waves-effect waves-light btn" onClick={this.handleGameStart}>Split</button>

                    <button className="waves-effect waves-light btn" onClick={this.getWordsFromInput}>Done</button>
                    <hr />
                    <div className="container mb-10">
                        {/* { isStart && letters } */}
                        { isStart && this.randomLetterToPlay() }
                    </div>
                    <hr />
                    {/* {
                        isStart && this.renderEnglishTitle()
                    } */}                    
                    <hr />
                    
                    {
                        isStart && this.createInput()
                    }
                    {
                        isGameOver && this.gameOver()
                    }
                    <div id="div"></div>
                </div>
            </>
        );
    }
}

export default PlayGame;