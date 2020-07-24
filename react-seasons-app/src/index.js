import React from 'react'
import ReactDom from 'react-dom'
import SeasonalDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
    constructor() {
        super();
        this.
        state = {
            'latitude' : null,
            'errorMessage' : ''
        };
    
    }

    componentDidMount() {
        this.getLatitude();
    }

    getLatitude() {
        window.navigator.geolocation.getCurrentPosition(
            (position )=> this.setState( {
                'latitude': position.coords.latitude
            }),
            (error) => this.setState({'errorMessage': error.message })
        );
    }

    componentWillMount() {
        this.getLatitude();
    }

    renderContent() {
        if(this.state.errorMessage.length > 0) {
            return (
                <div class="ui negative message">
                    <p>{this.state.errorMessage}</p>
                </div>
            )
        }
        else if(this.state.latitude != null) {
            return (
                    <SeasonalDisplay latitude={this.state.latitude} />
            );
        }
        else {
            return <Loader message="Please accept location request"/>
        }
    }

    render() {
        return (
            <div style={{border:'10px solid darkorange'}}>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector("#root"));