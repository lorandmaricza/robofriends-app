import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '3px solid #548CA0', height: '700px'}}>
			{ props.children }
		</div>
		) 
};

export default Scroll;  