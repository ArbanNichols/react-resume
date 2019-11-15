import React, { Component } from 'react';
import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';

const Context = React.createContext();
const client = Stitch.initializeDefaultAppClient('react-resume-cptng');

export class Provider extends Component {
    state = {
        experiences: [],
    }

    async componentDidMount() {
        try {
            await client.auth.loginWithCredential(new AnonymousCredential());
            const db = client.getServiceClient(RemoteMongoClient.factory, 'resume-server').db('resume');

            let res = await db.collection('experience').find().asArray();
            this.setState({ experiences: [...res] })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }

}

export const Consumer = Context.Consumer;