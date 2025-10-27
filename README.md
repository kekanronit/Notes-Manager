Note Manager CLI App (Node.js)

📘 Project Overview

The Note Manager Application is a command-line tool built with Node.js that allows users to easily create, read, list, and delete notes directly from the terminal. It provides a lightweight and efficient way to manage notes without any graphical interface.

This project demonstrates the use of Node.js core modules, as well as the integration of popular npm libraries like chalk for colorful console output and yargs for advanced command-line argument handling.

⚙️ Tech Stack

Node.js – Backend runtime environment.
Chalk – For styled and colorful terminal messages.
Yargs – For parsing and managing command-line arguments.
File System (fs) – For storing and retrieving notes locally in JSON format.

🚀 Features

✅ Add new notes with title and body.
✅ Remove existing notes by title.
✅ List all saved notes.
✅ Read a specific note’s content.
✅ User-friendly colorful terminal messages using chalk.
✅ Stores data persistently in a local JSON file.

💻 How to Run

1 Clone the repository
2 Install dependencies:
          npm install
3 Run commands:
      node app.js add --title="Todo" --body="Learn Node.js"
      node app.js list
      node app.js read --title="Todo"
      node app.js remove --title="Todo"

🧠 Learning Outcomes

Understanding Node.js modules and file handling
Working with third-party npm packages
Building interactive CLI applications
Handling JSON data for persistent storage
