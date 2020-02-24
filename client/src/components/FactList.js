import React, { Component } from 'react';
import CreateClient from '../CreateClient';
import gql from "graphql-tag";

const client = CreateClient();

class FactList extends Component {

    constructor() {
        super();
        this.state = {
            facts: []
        }
    }

    UNSAFE_componentWillMount() {
        client.query({
            query: gql`
                query {
                    facts {
                        id
                        text
                    }   
                }
            `
        }).then(res => {
            this.setState({ facts: res.data.facts });
        });
    }

    render() {
        return (
            <div>
                <h3>Facts</h3>
                <ul>
                    {this.state.facts.map(fact => <li key={fact.id}>{fact.text}</li>)}
                </ul>
            </div>
        );
    }
}

export default FactList;