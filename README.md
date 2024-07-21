# Quora Posts with CRUD Operations

## Project Description
This project is a web application that mimics the functionality of Quora, allowing users to view, add, edit, and delete posts. The application is built using Node.js and Express for the backend, with EJS templates for rendering the frontend.

## Features
- **View Posts**: Users can see a list of posts from different users.
- **Detailed View**: By clicking the "Read More" button, users can view the post's ID, username, and content in detail.
- **Add New Post**: Users can add a new post by clicking the "Add New Post" button. A form will appear, requiring the username and content of the post.
- **Edit Post**: Each post can be edited by clicking the "Edit" button.
- **Delete Post**: Users can delete a post by clicking the "Delete" button.
- **Unique IDs**: Each post is assigned a unique ID using the `uuidv4` method in Node.js.

## Technology Stack
- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript templating)
- **ID Generation**: `uuidv4` for creating unique post IDs

## Installation and Setup
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/quora-posts-crud.git
    cd quora-posts-crud
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    nodemon indes.js
    ```

4. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000/posts`.

## Usage 
1. **Viewing Posts**: Navigate to the homepage to see a list of posts. Click "Read More" to see details of a specific post.
2. **Adding a Post**: Click on the "Add New Post" button and fill out the form.
3. **Editing a Post**: Click on the "Edit" button next to the post you want to modify, then update the information in the form.
4. **Deleting a Post**: Click on the "Delete" button next to the post you want to remove.

