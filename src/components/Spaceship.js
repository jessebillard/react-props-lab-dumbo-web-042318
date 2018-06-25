// Code The Spaceship Component Here
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red']
import React from 'react';

class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Ship name: {this.props.name}
                </h1>
                <h4>
                    Ship speed: {this.props.speed}
                </h4>
                <h4>
                    Has Rockets?: {this.props.hasRockets ? "true" : "def nah"}
                </h4>
                <h4>
                    Colors: {this.props.colors.join(', ')}
                </h4>
            </div>
        )
    }
};

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship;