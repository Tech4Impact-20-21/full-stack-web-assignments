import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.nama}</h1>
            </div>
        )
    }
}

Card.PropTypes = {
    nama : PropTypes.string
};

export default Card;