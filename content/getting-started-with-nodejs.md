---
slug: "getting-started-with-nodejs"
title: "Getting Started with Node.js: A Beginner's Guide"
description: "Learn how to install Node.js, set up your environment, and build your first 'Hello World' application in this beginner's guide."
image: "/images/nodejs-beginners-guide.png"
url: "/blog/getting-started-with-nodejs"
tags: ["Node.js", "JavaScript"]
time: " September 27, 2024"
---

### Introduction

Node.js is a free, open-source, and cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser, typically on a server. It enables you to build fast, scalable web applications, real-time services like chat apps, and tools that can handle a large number of simultaneous requests efficiently. Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient, perfect for data-intensive applications that need to run in real-time. It also comes with npm (Node Package Manager), which provides access to thousands of libraries, making development easier and faster.

### Prerequisites

To start with Node.js, you need to know basic JavaScript, including how functions, loops, and variables work. Since Node.js handles tasks asynchronously, understanding how things like promises and callbacks work is important. You should also be comfortable using the command line to run Node.js commands and manage files. Basic knowledge of how websites and servers interact (like HTTP and APIs) will help too. Lastly, you need to install Node.js and npm (a tool for managing packages) on your computer, which allows you to start building applications.

---

### Step 1: Install Node.js

Follow these steps to install Node.js on your machine:

1. **Go to the official Node.js website**: [Node.js Downloads](https://nodejs.org/).
2. **Choose your version**: Select either the LTS (Long Term Support) version or the Current version. The LTS version is recommended for beginners.
3. **Download and install**: Download the installer and follow the on-screen instructions to complete the installation.

To verify the installation, open a terminal and run:

```bash
node -v
```

### Step 2: Set Up Your Environment

Once Node.js is installed, it’s time to set up your development environment:

1. Create a new project directory:

```bash
mkdir my-nodejs-app
cd my-nodejs-app
```

2. Initialize a new Node.js project:.

```bash
npm init -y
```

This will create a package.json file, which holds metadata about your project.

### Step 3: Write a "Hello World" Application

Now that your environment is ready, let's write your first Node.js app:

1. Create a new file named app.js:

```bash
touch app.js
```

2. Add the following code to app.js:

```javascript
// Import the built-in http module to create an HTTP server
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Set the response header to indicate the content type is plain text
  res.setHeader("Content-Type", "text/plain");

  // Send the response body and close the connection
  res.end("Hello World!\n");
});

// Define the port number where the server will listen for incoming requests
const PORT = 3000;

// Make the server listen on the specified port
server.listen(PORT, () => {
  // Log a message to the console when the server is running
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

### Step 4: Run Your Application

To run your Node.js server:

1. Start the server by running the following command:

```bash
node app.js
```

2. Open a browser and navigate to http://localhost:3000. You should see "Hello World!" displayed in your browser.

<hr />

### Conclusion

Congratulations! You've successfully installed Node.js, set up your environment, and created your first "Hello World" Node.js application. From here, you can expand on this knowledge to build more complex applications.

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm (Node Package Manager)](https://www.npmjs.com/)
