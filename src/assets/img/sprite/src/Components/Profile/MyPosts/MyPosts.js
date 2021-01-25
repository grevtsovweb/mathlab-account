import React from 'react';
import Post from './Post/Post';
import './MyPosts.css';




const MyPosts = (props) => {

	let newPostElement = React.createRef();
	let postsElements = props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>);

	

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		// let action = updateNewPostTextActionCreator(text);
		// props.dispatch(action);
	};
	
	return (
		<div>
		  <h2>My posts</h2>
		  <div>
			<h2>New post</h2>
		  </div>
		  <div>
			<textarea onChange={onPostChange} ref={newPostElement} value={props.value}/>
		  </div>
		  <div>
		  	<button onClick={() => {onAddPost()}}>Add post</button>
		  </div>
		  <div>
			
			{postsElements}
		  </div>
		</div>
  	);
};

export default MyPosts;