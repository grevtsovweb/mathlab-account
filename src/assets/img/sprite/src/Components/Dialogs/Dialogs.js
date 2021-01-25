import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {

	
	const dialogsElements = props.dialogsPage.dialogs.map((person, index) => {
		return <DialogItem name={person.name} id={person.id} key={index}/>

	});

	const messegesElements = props.dialogsPage.messages.map((message, index) => {
		return <Message message={message.message} id={message.id} key={index}/>
	});

	let newMessageBody = props.dialogsPage.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();

	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageChange(body);
	}

	if(!props.isAuth) {
		return <Redirect to={'/login'} />
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogs__contact}>
				{dialogsElements}	
			</div>
			<div className={styles.dialogs__chat}>
				<div>{messegesElements}</div>
				<div>
					
					<div>
						<textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
	  	</div>
  );
};

export default Dialogs;