# Web Server and Restful API Technical Assignment

1. What are the differences between static web server and dynamic web server?

- A static web server consists of a computer with a HTTP server that sends it hosted files as-s to the browser.

- On the other hand, a dynamic web server consists of a static web server with application server and a database which send an updated hosted file (by the application server) to the browser.

2. Describe the architecture of static site and dynamic site!

- Architecture of static site : a user wants to navigate to a page -> HTTP "GET" request is sent to the server side -> server side responses by sending the pre-created response to the client side.

- Architecture of dynamic site : a user wants to navigate to a page -> HTTP "GET" request is sent to the server side -> the request is forwareded to server-side code -> the request is interpreted and the required information is read from the database -> the retrieved data is combined with HTML templates -> the response is sent back to the client side.

3. What can we do in the server side?

- Efficient storage and delivery of information

- Customised user experience

- Controlled access to content

- Store session / state information

- Notifications and communication

- Data analysis

4. What is RESTFul?

- RESTFul is an architectural style for providing standards between computer systems on the web so it is easier for the systems to communicate with each other.

5. Describe all HTTP verbs available!

- GET : retrieve specific resource

- POST : create a new resource

- PUT : update or replace a specific resource

- PATCH : update or modify a specific resource

- DELETE : remove a specific resource

6. What is the function of Response Codes?

- Response code is used to alert the client to information about the success of the operation.
