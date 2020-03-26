import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ApiService from '../../Util/ApiService';
import PopUp from '../../Util/PopUp';
import Letters from '../../data/letters.json';

const renderLettersFromJson = () => {
    return Letters.letters.map((letters, index) => {
        return (
            <span key={index}>
                {letters}
            </span>
        );
    });
}

class PlayGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titles: [],
            letters: renderLettersFromJson(),
            isStart: false
        }
    }

    componentDidMount() {
        ApiService.EnglishTitles()              
                  .then(res => {
                    if (res.message === 'success') {
                      // PopUp.displayMessage('success', 'Success list the titles.'); 
                      this.setState({titles: [...this.state.titles, ...res.data]});
                    }
                  }).catch(err => PopUp.displayMessage('error', 'Error in api communication when trying to fetch data.'));
    }

    handleGameStart = () => {
        this.setState({ isStart: !this.state.isStart });
    }

    renderEnglishTitle = () => {
        const { titles } = this.state; //destructuring

        return (
            titles.map(value => <p key={value.id}>{value.englishtitle}</p>)
        );
    }

    render() {
        // console.log(this.state.titles);
        const { letters, isStart } = this.state; //destructuring

        return (
            <Fragment>
                <div className="container mb-10">        
                    <h2>Let's Play!!!</h2>
                    <h5>Press Start to begin!</h5>
                    <button className="waves-effect waves-light btn" onClick={this.handleGameStart}>Start</button>
                    { isStart && letters }
                    <hr />
                    {
                        isStart && this.renderEnglishTitle()
                    }
                </div>
            </Fragment>
        );
    }
}

export default PlayGame;