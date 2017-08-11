import React from "react";
//引入自定义组件
import List from "./List.js";
import Input from "./Input.js";

class ToDoApp extends React.Component {
	componentWillMount() { // 在render之前运行，作用是提供一个虚拟的数组，真实项目中不会用到，项目中会使用redux方式解决
		this.setState({ // 添加的list数组
			listMap: ['数组元素1', '数组元素2', '数组元素3'].map((text,index)=>{
				return <li key={index}>{text}</li>
			}),
			list: ['数组元素4', '数组元素5', '数组元素6'],
			newToDo: 'test'
		});
	};
	onInputChange(event){
		this.setState({ newToDo: event.target.value}); 
	}
	render() {
		return(
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="panel panel-default">
						<div className="panel-body">
							<h1>My To Do App</h1>
							<hr/>
							<h1>此处为ToDoApp插件中的listMap,使用li方式呈现</h1>
								<ul>
									{this.state.listMap}
								</ul>
							<hr/>
							<h1>此处为引用List插件</h1>
							<List listItems={this.state.list} />
							<hr/>
							<h1>引入Input模块</h1>
							<Input onInputChange={(this.onInputChange).bind(this)} newToDo={this.state.newToDo} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

//向外暴露
export default ToDoApp;