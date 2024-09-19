import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

import EditButton from './EditButton.jsx';
import DeleteButton from './DeleteButton.jsx';

function Postinterface({username, title, body, id}){
	return  (
	<div>
		<p>
		{title + " by: " + username}&emsp;
		{(username == Cookies.get("username")) && <DeleteButton id = {id} style="display:inline"/>}
		{(username == Cookies.get("username"))  && <EditButton id = {id} style="display:inline"/>}
		</p>
		<p>{body}</p>
	</div>);
}
export default Postinterface