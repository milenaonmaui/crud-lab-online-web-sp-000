import React, { Component } from 'react';


class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const review = {
      text: this.state.text, 
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review);
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
