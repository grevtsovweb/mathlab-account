import React from 'react';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageChange: (body) => {
			dispatch(updateNewMessageBodyActionCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		}
	}
}

compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs)


export default compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs);