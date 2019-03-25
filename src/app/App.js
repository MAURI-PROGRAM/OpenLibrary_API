import React, { Component } from 'react';
import Heading from './Heading'
import Body from './Body'

import { format } from 'timeago.js';



class App extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

     componentDidMount() {
        setInterval(async() => {
            const res = await fetch('https://openlibrary.org/recentchanges.json?limit=10');
            const data = await res.json();
            const datos_formateados = this.formatData(data);
            this.setState({ data: datos_formateados })
        },1000);

    }

    formatData(data) {
        return data.map((data, i) => {
            return {
                "when": format(data.timestamp),
                "who": data.author.key,
                "description": data.comment
            }

        })
    }

    render() {
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <Heading headings={this.props.headings} />
                    <Body data={this.state.data} />
                </table>
            </div>
        )
    }
};

export default App;