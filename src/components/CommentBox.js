import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
	state = { comment: '' };

	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// To Do: Call an action creator and save a comment
		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea onChange={this.handleChange} value={this.state.comment}/>
				<div>
					<button>Submit Comment</button>
				</div>
			</form>	
		);
	}
}

export default connect(null, actions)(CommentBox);
