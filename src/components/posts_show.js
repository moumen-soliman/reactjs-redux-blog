import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params.id;
		this.props.fetchPost();
	}

	render() {
		return (
			<div>
				PostsShow!
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps){
	return { post: posts[ownProps.match.paramss.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);