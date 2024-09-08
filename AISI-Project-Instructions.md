# Advanced information system interoperability

## Project Instructions

Start secure-codding REST API application

- Make sure api endpoints are public since we are not using any authentication   
- Run docker image for PostgresSQL 

### LO1 - LO3

- Visual Studio C# Windows Forms Application

### LO4

- AnyPointStudio -> tanks-crud
- comment everything but one that you are using 
- D:\mule-response-data for txt logs

### LO5-LO6

- AnyPointStudio -> tanks-mq
- [RabbitMQ](https://customer.cloudamqp.com/login). Login with Google account.
- Big green button on the top left to open the RabbitMQ management interface
- Additional run `consumer` application to see the messages from the queue
  - With this enabled AnypointStudio **will not** get any data!

### LO7-LO8

- jBPM run Docker Image
- http://localhost:8080/business-central
- wbadmin user and pass
- Design -> AISI-PA -> {Business Process} 
  - To look into business process
- Menu -> Process Definitions -> {Business Process} -> Three dots -> Start -> Submit
- Menu -> Tasks -> {Task} -> Start -> Enter Data -> Complete -> Click on Task -> Start -> Complete
- Open Docker logs to see the process log
  - `GET` search for `REST API RESULT`
  - `POST` search for `POST API RESULT`
  - `PATCH` search for `PATCH API RESULT`
  - `DELETE` search for `DELETE API RESULT`
- For `POST` and `PATCH` data is sent to API so need to follow API DTOs