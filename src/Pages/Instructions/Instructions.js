import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

const Instructions = () => {
    return (
        <Fragment>
            <Header />
            <div className="container mb-10">
                <h1>Instructions</h1>
                <p>
                The game consists of 144 lettered tiles that are placed face down on the playing surface. This is called the 'Bunch'. The same number of tiles is drawn by each player (between 11 & 21 depending on the number of players – 1 to 8 people can play), and once a player calls out "Split!", all the players turn over their tiles to reveal the lettered sides. Each player races to create their own word grids by arranging the letters to form words connected in intersecting or interlocking manner (words should not be separate from one another). You may rearrange your grid as many times as you like – the name "Bananagrams" is a play on the word anagrams, as one must often rearrange the words one has already formed in order to allow newly-drawn tiles to be placed into one's grid. When a player uses up all of their tiles, they call out "Peel!" and each player must draw a new tile from the pool of remaining tiles ("the Bunch").
                </p>
                <p>
                If at any time during play a player gets stuck with a tricky letter, the player can announce "Dump!" and exchange any letter for three tiles from the "Bunch".
                </p>
                <p>
                When there are fewer tiles in the "Bunch" than there are players, the first person to use up all their letters shouts "Bananas" and wins, becoming Top Banana if all of their words are valid.
                </p>
                <p>
                The letter distribution is as follows:
                </p>
                    <ul>
                        <li>- 2: J, K, Q, X, Z</li>
                        <li>- 3: B, C, F, H, M, P, V, W, Y</li>
                        <li>- 4: G</li>
                        <li>- 5: L</li>
                        <li>- 6: D, S, U</li>
                        <li>- 8: N</li>
                        <li>- 9: T, R</li>
                        <li>- 11: O</li>
                        <li>- 12: I</li>
                        <li>- 13: A</li>
                        <li>- 18: E</li>
                    </ul>
                <p>You can see the Wikipedia <a target="_blank" href="https://en.wikipedia.org/wiki/Bananagrams" rel="noopener noreferrer">here</a>, for more instructions.</p>
            </div>
        </Fragment>
    );
}

export default Instructions;