import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const url = import.meta.env.VITE_SERVER_URL + "/post";

function MakePostInterface(){
	const  [title, setTitle] =  useState('');
	const  [body, setBody] =  useState('');

    function titleChange() {
        setTitle(event.target.value);
    }
    function bodyChange() {
        setBody(event.target.value);
    };
    async function makePost(){
    	if(!Cookies.get("username") ||  !Cookies.get("token")){
    		return -2;
    	}
		try {
		    const response = await axios.post(url, {
		        username: Cookies.get("username"),
		        token: Cookies.get("token"),
		        title: title,
		        body: body
		     });
		    console.log(response);
			return response;
		} catch (error) {
			console.error(error);
			return -1;
		}
	};
    function submitPost(){
    	makePost().then((response) => {
       		if(response == -2){
       			alert("please log in")
       		}
       		else if(response == -1){
       			alert("unkown error");
       		}else{
       			alert("post made");
       		}
    	});
    }

	return  (
	<span>
		<form>
		    <label>MakePost:
		    	<input  type="text"  value={title} onChange={titleChange} />
		    	<br></br>
		    	<textarea rows="5" cols="80" value={body} onChange={bodyChange} />
		    </label>
		    <button onClick = {e => {
		    	submitPost();
		    	window.location.reload();
		    }}>
	     		submit
	    	</button>
		</form>	
	</span>);
}
export default MakePostInterface