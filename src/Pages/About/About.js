import React from 'react';
import Header from '../../components/Header/Header';

const About = () => {
    return (
        <>
            <Header />
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey">
                        <div className="card-content white-text">
                            <h1>About</h1>
                            <p>This is an app game. This was 'cooke' to the Wild Code School course.</p>
                            <p>The game is based on the word game Bananagrams, wherein lettered tiles are used to spell words.</p>
                            <p>You can see the Wikipedia <a target="_blank" href="https://en.wikipedia.org/wiki/Bananagrams" rel="noopener noreferrer">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;