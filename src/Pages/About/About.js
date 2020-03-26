import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

const About = () => {
    return (
        <Fragment>
            <Header />
            <div className="container mb-10">
                <h1>About</h1>
                <p>This is an app game. This was 'cooke' to the Wild Code School course.</p>
                <p>The game is based on the word game Bananagrams, wherein lettered tiles are used to spell words.</p>
                <p>You can see the Wikipedia <a target="_blank" href="https://en.wikipedia.org/wiki/Bananagrams" rel="noopener noreferrer">here</a></p>
            </div>
        </Fragment>
    );
}

export default About;