import React, { Component } from 'react';
import { ApolloProvider, Mutation } from 'react-apollo';
import CreateClient from '../CreateClient';
import gql from 'graphql-tag';

const client = CreateClient();

const ADD_FACT_MUTATION = gql`
    mutation ADD_FACT_MUTATION($text: String!, $upvotes: Int!) {
        submitFact(text: $text, upvotes: $upvotes) {
            id
        }
    }
`;

class FactForm extends Component {

    constructor() {
        super();
        this.state = {
            text: "",
            upvotes: 0
        }
    }

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        return (
            <ApolloProvider client={client}>
                <Mutation mutation={ADD_FACT_MUTATION} variables={this.state}>
                    {submitFact => {
                        return (
                            <form method="post" onSubmit={
                                async e => {
                                    e.preventDefault();
                                    await submitFact();
                                    this.setState({ text: "" })
                                }
                            }>
                                <label htmlFor="text">new fact: </label>
                                <input className="input-text" name="text" type="text" required
                                    value={this.state.text}
                                    onChange={this.saveToState} />
                                <input name="upvotes" value={0} type="hidden" />
                                <button type="submit">submit</button>
                            </form>
                        )
                    }}
                </Mutation>
            </ApolloProvider>
        )
    }
}

export default FactForm;