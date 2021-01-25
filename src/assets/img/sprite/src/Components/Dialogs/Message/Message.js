import React from 'react';
import styles from './Dialogs.module.css';


const Message = (props) => {

	


	return (
		<div className={styles.dialogs__chat_item}>{props.message}</div>
	);
}

export default Message;