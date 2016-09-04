import React, { Component } from 'react';
import { Dialog, Button } from 'react-desktop/macOs';
// import {repo} from 'birdcage-data-mock';
// import {repo} from 'birdcage-data-couchdb';
// import {repo} from 'birdcage-data-rest';

export default class extends Component {

  render() {
    const {tweets} = this.props;
    return (
      <ul className="list-group">
        <li className="list-group-header">
          <input className="form-control" type="text" placeholder="Search for text"/>
        </li>

        <b> Tweets waiting: {tweets.length} </b>

        {tweets.map(t => (
          <li className="list-group-item" key={t._id}>
            <img className="media-object pull-left" src="./assets/img/twitter.png" width="32" height="32"/>
            <div className="media-body">
              <strong>{t.title}</strong>
              <p>{t.created.toLocaleString()}</p>
            </div>
          </li>
          )
        )}

      </ul>
    );
  }

  componentDidMount(){
    const {actions, repo} = this.props;
    repo.getTweets()
      .then(tweets => actions.tweetsLoaded(tweets));
  }
}
