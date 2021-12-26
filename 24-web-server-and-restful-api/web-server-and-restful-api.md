### web-server-and-restful-api

1. Apa perbedaan antara static web server dan dynamic web server?
   - Konten pada static web server tidak dapat diubah. Berdeba dengan dynamic web server yang kontennya diproses oleh server terlebih dahulu atau berasal dari database sehingga lebih fleksibel
   - Dynamic web server lebih kompleks dalam pembuatannya dibanding static web server
   - Dynamic web server yang memiliki konten banyak lebih mudah untuk dipelihara dibanding dengan static web server yang memiliki banyak konten
   
2. Jelaskan arsitektur static site dan dynamic site
   
   Static web server terdiri dari komputer (hardware) dengan HTTP server(software). Sedangkan dynamic web server, terdiri dari static web server dengan extra software, biasanya application server dan database

3. Apa saja yang dapat kita buat pada sisi server?
   - Efficient storage and delivery of information
   - Customised user experience
   - Controlled access to content
   - Store session/state information
   - Notifications and communication
   - Data analysis
  
4. Mohon jelaskan apa itu RESTful?
   
   REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. 
   
   REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server


5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
   - GET: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
   - POST: The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
   - PUT: The PUT method replaces all current representations of the target resource with the request payload.
   - DELETE: The DELETE method deletes the specified resource.
    
    Selengkapnya: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

6. Apa fungsi dari Response Codes?
   
   Responses from the server contain status codes to alert the client to information about the success of the operation.