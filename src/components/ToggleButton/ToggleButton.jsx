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
        return (
            <Button onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </Button>
        );
    }
}