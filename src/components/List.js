import React from "react";

const List = (props) => {
	const list = props.listItems.map((el, i)=>(
		<li key={i}>{el}</li>
	));

    return (
    	<div>
	    	<div>
	    		I'm a list!!!
	    	</div>
	    	<h2>此处我们也可以生成一个列表</h2>
	    	<hr/>
	    	<div>
	    		<ul>
	    			{list}
	    		</ul>
	    	</div>
    	</div>
    )
};

export default List;