import React, { Component } from 'react';
import styles from './index.css'; // eslint-disable-line no-unused-vars

class Index extends Component {
	render() {
		const { title, onClick } = this.props;

		return (
			<p onClick={onClick}>{title}</p>
		);
	}
}

export default Index;