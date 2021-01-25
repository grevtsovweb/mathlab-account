import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Dialogs.module.css';


const DialogItem = (props) => {

	
	
	let path = "/dialogs/" + props.id;

	return (
		<NavLink to={path} className={styles.dialogs__contact_item}>
			{props.name}
		</NavLink>
	);
}


export default DialogItem;