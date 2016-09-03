import React, { Component } from 'react';
import { Dialog, Button } from 'react-desktop/macOs';

export default class extends Component {

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-header">
          <input className="form-control" type="text" placeholder="Search for someone"/>
        </li>

        {this.props.todos.length}

        {this.props.todos.map(t => (
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
}
