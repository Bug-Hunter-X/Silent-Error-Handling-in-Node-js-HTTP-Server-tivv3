# Silent Error Handling in Node.js HTTP Server

This repository demonstrates a subtle bug in Node.js where errors occurring after the response headers have been sent to the client are silently ignored.  The server continues to operate without any indication to the client that an error occurred.

## The Problem

The `bug.js` file contains a simple HTTP server.  An asynchronous operation (`someAsyncOperation`) is performed. If the operation fails, an error is caught and logged to the console; however, if the response has already been sent to the client, the client receives no indication of the error.

## The Solution

The `bugSolution.js` file demonstrates how to handle this situation. By checking the `res.writableEnded` property before writing any error response or logging the error, we can prevent the silent error handling and send appropriate error responses to the client.

This improved error handling ensures that clients receive proper error notifications, making debugging significantly easier.