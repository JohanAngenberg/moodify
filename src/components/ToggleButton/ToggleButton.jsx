import React from 'react'
import Button from 'react-bootstrap/Button';

export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
    }

    handleClick() {
        this.setState(function (prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        }, () => {
            if (this.state.isToggleOn) {
                this.props.toggleOn();
            } else {
                this.props.toggleOff();
            }
        });
    }

    render() {
        console.log(this.state.isToggleOn)
        return (
<<<<<<< HEAD
            <Button variant={this.props.variant} onClick={this.handleClick.bind(this)}>
=======
            <Button onClick={this.handleClick.bind(this)} variant={this.state.isToggleOn ? 'secondary' : 'outline-secondary'}>
>>>>>>> 9a18faedb257e1df62a8e667d794f6f52e52bb18
                {this.props.children}
            </Button>

        );

    }
}