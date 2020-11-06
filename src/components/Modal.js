import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import styles from './contactList.module.css';

function Modal({toggleModal}) {

	return (
		<div className={styles.modal}>
			Modal
			<button onClick={toggleModal}>Cancel</button>
		</div>
	);
}

export default connect(null, { toggleModal })(Modal);
