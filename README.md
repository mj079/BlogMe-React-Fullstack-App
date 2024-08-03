# BlogMe

BlogMe is a blogging web app which leverages Appwrite for storage and backend sevices.

## Installation:
1. `nmp create vite@latest`
3. `npm install @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form`
## Setting ENV:
1.  Create a .env file in the root directory. Add .env to .gitignore so that it is not published.
2.  Create .env.sample in the root directory. 
3.  To declare env in a project configured using create react app: Define env as REACT_APP_SOMETHING="" . To access:    process.env.REACT_APP_SOMETHING.
4.  To access env in Vite: Define env as VITE_SOMETHING= . To access:    import.meta.env.VITE_SOMETHING.
## Configure Appwrite:
1. Create Project. (Add id to .env. Repeat for all the steps below)
2. Create Database.
3. Create Collection.
4. Give Permission for all roles(read, create...) in the settings section of the created collection.
5. In the attributes section of your collection, create attributes and create indexes in indexes section .
6. Create Bucket. Give Permission in settings.
## Configure ENV
Create a file config.js in src/config/config.js, which holds the env as objects. 
Ex: `const config = {`
    `appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), ... }`
## Authentication:
##### Building authentication service with Appwrite:
1. src/appwrite/auth.
2. `import { Client, Account, ID } from "appwrite"`
3. Set up a class. Handle the Client and Account operation in the constructor method.
4. Functionalities such as login, logout, create account, are added to the above created class as methods. These methods can be accessed by the instances of the class.
5. Overview: `class Client {setEndpoint(); setProject() } class Account {create(); CreateEmailPasswordSession(); get(); deleteSessions()}
## Database:
#####  Connection to appwrite storage:
1. src/appwrite/conf.
2. `import { Client, Databases, Storage } from "appwrite"`
3. Set up a class. Handle the Client, Database and Bucket operation in the    constructor method.
4. Functionalities such as createPost(), updatePost, updatePost, getPost are added to the above created class as methods.
5. To get all posts we will use listDocuments() and pass `[Query.equal("status", "active")]` as its third argument to retrieve posts that are only active.
6. Appwrite methods for file services: createFile(), deleteFile(), getFilePreview().
## Redux:
1. set up a store. (single source of truth)
2. create slices(reducers), export actions.