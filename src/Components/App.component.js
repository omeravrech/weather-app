// Components
import React, { Component } from 'react';

import SearchBar from './Header.component';
import WeatherDisplay from './WeatherDisplay.component';

class App extends Component {

    render() {
        return (
                <div className="ui sixteen column center aligned grid">
                    <div className="row">
                        <div className="sixteen wide column">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight wide column">
                            <WeatherDisplay />
                        </div>
                    </div>
                    <div className="row">
                        <div className="sixteen wide  column">
                            FOOTER
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;
