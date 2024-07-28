**Task 1: Product Management**

Create Product Schema:

Attributes: (ProductID, ProductName, Price, Description)

Insert a Product

Select a new HTTP server.

Select the POST method and enter the URL: http://localhost:8080/products/add
Select the Body --> raw --> JSON and type:

{
    "productName": "Pilsbury Atta",
    "description": "Soft and Pluffy Fresh Chaki Atta",
    "price": 57
}

Click the Send button.

Expected message: "Created"

Retrieve All Products:

Select the GET method and enter the URL: http://localhost:8080/products/get
Click the Send button.

Expected response: All product values.

Retrieve a Product by ID:

Select the GET method and enter the URL: http://localhost:8080/products/get/66a4cffebd0846ea3f478375
Click the Send button.

Expected response: Product data for the given ID.

Update a Product:

Select the PUT method and enter the URL: http://localhost:8080/products/update/66a4cffebd0846ea3f478375
Select the Body --> raw --> JSON and type:

{
    "productName": "AshirVadha",
    "description": "Soft and Pluffy Fresh Chaki Atta",
    "price": 100
}

Click the Send button.

Expected message: "Updated"

Delete a Product:

Select the DELETE method and enter the URL: http://localhost:8080/products/delete/66a4cffebd0846ea3f478375
Click the Send button.

Expected message: "Deleted"

**Task 2: User Management**

Create User Schema:

Attributes: (name, email, password)

Select the POST method and enter the URL: http://localhost:8080/users/register
Select the Body --> raw --> JSON and type:

{
    "name": "Pandieswaran",
    "email": "peswaran40@yopmail.com",
    "password": "User@123"
}

Click the Send button.

Expected message: "User Add Successfully"

Login a User:

Select the POST method and enter the URL: http://localhost:8080/users/login
Select the Body --> raw --> JSON and type:

{
    "email": "peswaran40@yopmail.com",
    "password": "User@123"
}
Click the Send button.

Expected message: "Login Successfully" and retrieve the token for authorization.

Get All Users:

Select the GET method and enter the URL: http://localhost:8080/users
Click the Send button.

Expected response: All user details.

Get a User by ID:

Select the GET method and enter the URL: http://localhost:8080/users/66a4c8321c18b8087fe4cf99
Click the Send button.

Expected response: User details for the given ID.

Update a User:

Select the PUT method and enter the URL: http://localhost:8080/users/update/66a4c8321c18b8087fe4cf99
Add the Authorization header with the token value.
Select the Body --> raw --> JSON and type:

{
    "name": "Nazriya",
    "email": "Nazriya@yopmail.com",
    "password": "User@123"
}

Click the Send button.

Expected message: "User updated successfully"

Delete a User:

Select the DELETE method and enter the URL: http://localhost:8080/users/delete/66a4c8321c18b8087fe4cf99
Add the Authorization header with the token value.

Click the Send button.

Expected message: "Deleted"

**Task 3: Data Fetching and In-Memory Cache**

Fetch Data from External API:

Select the GET method and enter the URL: http://localhost:8080/external
Click the Send button.

View Cache Memory:

Select the GET method and enter the URL: http://localhost:8080/cachee/cache
Click the Send button.

**Task 4: Real-Time User Update and Deletion**

Create a User:

Select the POST method and enter the URL: http://localhost:8080/users/register
Select the Body --> raw --> JSON and type:

{
    "name": "Pandi",
    "email": "peswaran40@yopmail.com",
    "password": "User@123"
}

Click the Send button.

Expected message: "User Add Successfully"

Get All User Details:

Select the GET method and enter the URL: http://localhost:8080/users
Click the Send button.

Expected response: All user details.

Get a User by ID:

Select the GET method and enter the URL: http://localhost:8080/users/66a4c8321c18b8087fe4cf99
Click the Send button.

Expected response: User details for the given ID.

Update a User by ID:

Select the PUT method and enter the URL: http://localhost:8080/users/update/66a4c8321c18b8087fe4cf99
Select the Body --> raw --> JSON and type:

{
    "name": "Eswaran",
    "email": "peswaran40@yopmail.com"
}

Click the Send button.

Expected message: "User updated successfully"

Delete a User by ID:

Select the DELETE method and enter the URL: http://localhost:8080/users/delete/66a4c8321c18b8087fe4cf99
Click the Send button.

Expected message: "Deleted"

**Task 5: WebSocket Example**

Terminate all processes.
Folder structure:
Public folder => index.html
server.js
Run the node server.

Open two different browsers and enter the URL: http://localhost:8000/

Place the browsers side by side. Click a button on one browser and observe the count reflected on the other browser.

**Task 6: Error Logging**

Get a User by ID and Log Errors:

Select the GET method and enter the URL: http://localhost:8080/users/66a4c8321c18b8087fe4cf99
Click the Send button.

If the user is not found, an error message will be logged.
Folder structure: Assignment -> logs Folder --> error.log
Log file data for a missing user:
{
    "level": "error",
    "message": "Operational error: User not found"
}
