import React from 'react';
import Header from '../../components/Header/Header';

const Instructions = () => {
    return (
        <>
            <Header />
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey">
                        <div className="card-content white-text">
                            <h4>Instructions</h4>
                            <p>
                                You can see the Wikipedia <a target="_blank" href="https://en.wikipedia.org/wiki/Bananagrams" rel="noopener noreferrer">here</a>, for the real Bananagrams game board.
                            </p>
                            <p>
                                This game is based on the original game!
                            </p>
                            <p>
                                In this app you have only 1 min and a half to put the maximum titles you remember with the 21 letters on the tiles, that will be random showing to you, after you click "Split".
                            </p>
                            <p>
                                You have to separate each title with a comma.
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
                            <p>
                                One more important rule, the words to the titles have to be anime/manga titles!!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Instructions;