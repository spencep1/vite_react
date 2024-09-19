import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import Postinterface from './Postinterface.jsx';

const url = import.meta.env.VITE_SERVER_URL + "/post";

function PostViewer(){
	const [posts, setPosts] = useState([]);
	const [lastTimeStamp, setLastTimeStamp] = useState([-1]);

	var rows_per_fecth = 3;
	var listItems = posts.map(post =>
	    <li>
	    	<Postinterface username={post.username} title={post.title} body={post.body} id={post.id}/>
		</li>
	);

	async function getPosts(){
		try {
			var timestamp_limit;
			if(lastTimeStamp == -1){
				timestamp_limit = "timestamp > -1"
			}else{
				timestamp_limit = "timestamp < '" + lastTimeStamp + "'"
			}
		    const response = await axios.get(url, {
		    	params: {
			    	username: Cookies.get("username"),
			        token: Cookies.get("token"),
			        number_of_rows: rows_per_fecth,
			        where_clause: timestamp_limit
			    }
		    });
		    if(response.data.error == true){
		    	alert("error with getting posts")
		    	return;
		    }else if(response.data.authenticated == false){
		    	alert("log in invalid,log out and log in again")
		    	return;
		    }else if(response.data.data[response.data.data.length-1] == undefined){
		    	alert("no more posts exist");
		    	return;
		    }
		    setPosts(posts.concat(response.data.data));
		    setLastTimeStamp(response.data.data[response.data.data.length-1].timestamp);
			return response.data;
		} catch (error) {
			console.error(error);
		    alert(error);
			return -1;
		}
	};

	{ posts.map(post => (
			    <li>
			    	<Postinterface username={post.username} title={post.title} body={post.body} id={post.id}/>
				</li>
	));}

	return (
		<span>
		<ul>
			{posts.map(post => (
          		<Postinterface username={post.username} title={post.title} body={post.body} id={post.id}/>
        	))}
		</ul>
		<button onClick={getPosts}>load more posts</button>
		</span>
	);
}
export default PostViewer