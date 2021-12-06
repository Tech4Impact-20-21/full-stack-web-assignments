# Intro and Essential Node.JS Assignment

1. What is Node.JS? What is the differences between Node.JS and JavaScript?

- Node.JS is an interpreter or running environment for a JavaScript language with some specific useful libraries.

- The difference between Node.JS and JavaScript: Node.JS is mainly used for accessing or performing any non-blocking operation of any operating system while JavaScript is used for any client-side activity for a web application.

2. Describe Node.JS architecture!

Node.JS uses Single Threaded Event Loop architecture, with the following workflows:

- Clients send requests to the webserver to interact with the web application.

- Node.JS retrieves the incoming requests and adds those requests to the event queue.

- The requests are then passed one-by-one through the event loop. It checks whether the requests are simple enough to not require any external resources.

- Event loop then processes simple requests and returns the responses to the corresponding clients.

3. What is the differences between Built-in Module, External Module, and Custom Module in Node.JS?

- Built-in Module : modules that can be used without any further installation.

- External Module : modules that require installation before being used.

- Custom Module : custom-made modules that can be included into our application.

4. Mention an example of Built-in Module, External Module, and Custom Module in Node.JS!

- Built-in Module : http

- External Module : csv

- Custom Module : a module to perform arithmetic operation.
