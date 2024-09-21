Hello this is a webpage coded in react to interact with a api that stores and recieves data.<br />
<br />
You can naviagate the features with the buttons in the top bar<br />
![image](https://github.com/user-attachments/assets/d374a02b-eaf3-40c0-bda0-fed621fe63fa)
<br /><br />
The home button opens the home page which creates shows a page that shows the instructions<br />
<br />
Clicking the register button opens a page where you can enter a username and password to register an account to use to create and modify your posts. Username is first box, password is second box.<br />
![image](https://github.com/user-attachments/assets/a0e41172-2822-4ff7-8a3e-eeb7e7bda82d)
<br /><br />
The login button opens a page where you can acess the account you have registered, you must login after registering an account. Username is first box, password is second box.<br />
![image](https://github.com/user-attachments/assets/fb33b181-20d3-49da-84b6-6c08aa673509)
<br /><br />
Clicking the make post button opens a UI to make a post with a title and a body. The small box is the title and the large box is the body. Making a post makes a post request to an [API](https://github.com/spencep1/server_social_media) which then stores the data in a sql database. You can only make a post after loggin in.<br />
![image](https://github.com/user-attachments/assets/f73ca0a4-e81a-4bdf-aa6a-853cecd15285)
<br /><br />
Clicking the view posts button will let you view posts. You need to click the load more posts buttons to load posts. It loads posts my making get requests to an API. For posts that were made my the account you are logged in as, you have an option to delete or edit your post. Clicking edit opens a interface for you to enter a new title and body similar to the make post interface. Clicking delete post will delete the post.<br /><br />

Clicking the Logout button will log you out of your account.<br />
