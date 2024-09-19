import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

const url = import.meta.env.VITE_SERVER_URL + "/post";

function EditButton({id}){
	const  [showEditInterface, setShowEditInterface] =  useState(false);
	function showEditor(){
		setShowEditInterface(true);
	}
	const  [title, setTitle] =  useState('');
	const  [body, setBody] =  useState('');

    function titleChange() {
        setTitle(event.target.value);
    }
    function bodyChange() {
        setBody(event.target.value);
    };
    async function sendEdit(){
    	if(!Cookies.get("username") || !Cookies.get("token")){
    		alert("please log in");
    		return -2;
    	}
		try {
		    const response = await axios.put(url, {
		    	username: Cookies.get("username"),
		        token: Cookies.get("token"),
		        title: title,
		        body: body,
		        id: id
		     });
		     if(response.data.error == true){
		    	alert("error with editing")
		    	return;
		    }else if(response.data.authenticated == false){
		    	alert("log in invalid,log out and log in again")
		    	return;
		    }else if(response.data.sucess == true){
		    	console.log(response);
			    alert("post sucessfully edited");
			    window.location.reload()
				return response;
		    }else{
		    	alert("unknown error");
		    	return response;
		    }
		    
		} catch (error) {
			console.error(error);
		    alert(error);
			return -1;
		}
	};

	return  (
	<>
		<button onClick = {e => {showEditor();}}>
	     		edit
	    </button>
	    {showEditInterface && 
	    <span>
	    <form>
		    <label>Edit:
		    	<input  type="text"  value={title} onChange={titleChange} />
		    	<br></br>
		    	<textarea rows="5" cols="80" value={body} onChange={bodyChange} />
		    </label>
		    <button onClick = {sendEdit}>
	     		submit
	    	</button>
		</form>	
	    </span>
		}
	</>);
}
export default EditButton