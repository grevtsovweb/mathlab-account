import React from 'react';
import './Post.css';


const Post = (props) => {
	return (
		
		<div className='post'>
			<div className='post__item'>
				<img src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600"  className='post__item-img'/>
			</div>
			
		  {props.message}
		  <div>
		  	{props.likesCount}
		  </div>
		</div>
  	);
};

export default Post;