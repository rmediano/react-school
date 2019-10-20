import React, { Component } from 'react';
import EventCard from './EventCard';
import SignInEvent from './SignInEvent';

class SingleEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      singleEvent: {}
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { location: { state: { singleEvent } } } = this.props;
      this.setState({ singleEvent });
    } else {
      this.props.history.replace('/events');
    }
  }

  render() {
    const { singleEvent } = this.state;
    return (
      <div className="flex flex-1 flex-column">
        <EventCard singleEvent={singleEvent} showButton={false} />
        <SignInEvent />
      </div>
    );
  }
}

export default SingleEvent;
