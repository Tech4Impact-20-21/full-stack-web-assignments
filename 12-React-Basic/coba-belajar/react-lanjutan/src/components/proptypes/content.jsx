import Card from './card';
import React from 'react';

let object = {
    nama : 'Rosa Amalia',
    umur : 19,
    alamat : 'Bengkalis'
}

class Content extends React.Component {
    render() {
        return (
            <Card data={object}></Card>
        )
    }
}

export default Content;