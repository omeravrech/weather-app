// Components
import React, { Component } from 'react';

import SearchBar from './SearchBar.component';

class App extends Component {

    render() {
        return (
            <div>
               <SearchBar />
                <div className="ui sixteen column grid">
                    <div className="three wide column"></div>
                    <div className="ten wide column">
                        <div className="ui centered grid">
                            <div className="column">
                                
                            <div className="ui placeholder">
                                <div className="long line"></div>
                                <div className="very long line"></div>
                                <div className="very long line"></div>
                                <div className="long line"></div>
                                <div className="long line"></div>
                                <div className="medium line"></div>
                                <div className="very long line"></div>
                                <div className="line"></div>
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="three wide column"></div>
                </div>
            </div>
        );
    }
}

export default App;
