import React, { Component } from 'react';
import { Dialog, Button } from 'react-desktop/macOs';
// import {repo} from 'birdcage-data-mock';
// import {repo} from 'birdcage-data-couchdb';
import {repo} from 'birdcage-data-rest';

export default class extends Component {

  render() {
    const {tweets} = this.props;
    return (
      <ul className="list-group">
        <li className="list-group-header">
          <input className="form-control" type="text" placeholder="Search for someone"/>
        </li>

        {tweets.length}

        {tweets.map(t => (
          <li className="list-group-item">
            <img className="img-circle media-object pull-left" src="/assets/img/avatar.jpg" width="32" height="32"/>
            <div className="media-body">
              <strong>{t.title}</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          )
        )}

      </ul>
    );
  }

  componentDidMount(){
    const {actions} = this.props;
    repo.getTweets()
      .then(tweets => actions.tweetsLoaded(tweets));
  }
}
