# Express.js - Missing User Handling in GET Request

This repository demonstrates a common error in Express.js applications: not properly handling the case where a requested resource (e.g., a user) is not found.  The original code lacks a robust check for the existence of a user before sending a response.  This can lead to unexpected errors and crashes, particularly if the database lookup fails.

The `bug.js` file shows the faulty code. The `bugSolution.js` shows the correct implementation. 

## Bug:
The original code attempts to send the `user` object in the response, but it doesn't check if `user` is actually defined before doing so. If the database query fails to find a user with the specified ID, `user` will be `null` or `undefined`, causing an error or an unexpected response.

## Solution:
The corrected code includes an explicit check for the existence of the `user` object. If `user` is not found (i.e., `!user`), it sends a 404 Not Found response to the client. This prevents errors and provides a clear indication to the client that the resource is not available.