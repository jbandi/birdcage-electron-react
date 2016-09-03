import React, { Component } from 'react';
import { Dialog, Button } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <div style={{flex: 1}}>
      <form>
        <div className="form-group" >
          <label>Say something relevant later:</label>
          <textarea className="form-control" rows="5" ></textarea>
        </div>
      </form>
        <Button color="blue" onClick={() => console.log('Clicked!')}>
          Capture Tweet!
        </Button>
      </div>
    );
  }

}
