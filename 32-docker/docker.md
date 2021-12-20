# Docker Technical Assignment

1. Explain the definition of container in docker!

- Answer: Container in docker is a standard unit of software that packages up code and its dependencies so the app runs quickly & reliably from one computing environment to another. It isolates software from its environmment & ensure that it works uniformly despite differences for instance between development and staging.

2. Explain the differences between container and virtual machine concept!

- Answer: Container is an abstraction at the app layer that packages code and dependencies together while VM is an abstraction of physical hardware turning one server into many servers. Container takes up less space (tens of MBs in size) than VM (tens of GBs in size) so it can handle more app and require fewer VM and OS than VM.

3. What does docker file means?

- Answer: Dockerfile is a text document that contains all commands user can call on the command line to assemble an image.

4. What does docker registry means?

- Answer: Docker registry is a storage and distribution system for Docker images. It is organized into Docker repositories.

5. Explain how can we run more than 1 container in one time and connect to one another!

- Answer: We can do this using docker compose. It uses a YAML file to configure the app's services. Using a single command, it can create and start all services from the configuration.
