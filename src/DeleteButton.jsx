import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';


const url = import.meta.env.VITE_SERVER_URL + "/post";

function DeleteButton({id}){
	const [showActual, setShowActual] = useState(false);
	async function deletePost(){
    	if(!Cookies.get("username") || !Cookies.get("token")){
    		alert("please log in");
    		return -2;
    	}
		try {
		    const response = await axios.delete(url, {
		    	data:{
			        username: Cookies.get("username"),
			        token: Cookies.get("token"),
			        id: id
			    }
		     });
		    //alert(response.data.error + " " + response.data.authenticated + " " + response.data.sucess)
		    if(response.data.error == true){
		    	alert("error with getting posts")
		    	return;
		    }else if(response.data.authenticated == false){
		    	alert("log in invalid,log out and log in again")
		    	return;
		    }else if(response.data.sucess == true){
			    console.log(response);
				alert("sucessfuly deleted");
				window.location.reload()
				return response;
		    }else{
		    	alert("unknown error");
		    	return response;
		    }
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};

	return  (	
		<span>	
			{!showActual && <button onClick = {e =>{
				setShowActual(true);
				setTimeout(()=>{
					setShowActual(false);
				}, 2000);
			}}>
		     		delete
		    </button>}
			{showActual && <button onClick = {deletePost}>
		     		are you sure?
		    </button>}
		</span>
	);
}
export default DeleteButton