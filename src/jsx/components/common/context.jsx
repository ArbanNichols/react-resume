// const {
//     Stitch,
//     RemoteMongoClient,
//     AnonymousCredential
// } = require('mongodb-stitch-browser-sdk');

// const client = Stitch.initializeDefaultAppClient('react-resume-cptng');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'resume-server').db('resume');

// client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
//     db.collection('experience').updateOne({ owner_id: client.auth.user.id }, { $set: { number: 42 } }, { upsert: true })
// ).then(() =>
//     db.collection('experience').find({ owner_id: client.auth.user.id }, { limit: 100 }).asArray()
// ).then(docs => {
//     console.log("Found docs", docs)
//     console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//     console.error(err)
// });

import React, { Component } from 'react';
import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from 'mongodb-stitch-browser-sdk';

const Context = React.createContext();
const client = Stitch.initializeDefaultAppClient('react-resume-cptng');
const db = client.getServiceClient(RemoteMongoClient.factory, 'resume-server').db('resume');

const reducer = (state, action) => {
    switch (action.type) {
    }
}

export class Provider extends Component {
    state = {
        experiences: [],
    }

    async componentDidMount() {

    }
}