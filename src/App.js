import React from "react";
import {render} from "react-dom";

//引入自定义模块
import ToDoApp from "./components/ToDoApp.js"

render(
	<ToDoApp /> ,
	document.getElementById("app-contain")
)