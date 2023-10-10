# Backend Test Project

This project represents a backend for an application and uses Node.js.

## Installation

1. **Node.js, npm and yarn:**
   Ensure that you have Node.js and npm installed on your system. If you don't have them, you can download and install from the [official Node.js website](https://nodejs.org/).

2. **Clone the project:**
   Clone or download the project from the repository and navigate to the project directory.

3. **Install dependencies:**
   Run the following command to install all dependencies:
   ```bash
   yarn install
   ```

## Running

To run the project, use:

```bash
yarn test
```

## Add a New Post (POST -> /posts)

This feature allows adding a new post to the system through the `POST /posts` endpoint.

### Description

The `POST /posts` endpoint allows adding a new post to the system. To use this feature, send a POST request to the appropriate URL, providing information about the new post.

### Test Plan

1. **Test 1: Check if API responds**

   - Objective: Ensure that you can get a response from the API when making a POST request to add a new post.
   - Actions:
     - Use the `POST` method to add a new post with test data.
   - Expected:
     - HTTP status 201 (Created).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is a valid JSON object.
   - Actions:
     - Check if the response is a JSON object.
   - Expected:
     - The response should be a JSON object.

3. **Test 3: Check response ID**

   - Objective: Ensure that the ID of the added post is greater than or equal to 100.
   - Actions:
     - Check the value of the `id` field in the response.
   - Expected:
     - The value of the `id` field should be greater than or equal to 100.

4. **Test 4: Check response title**

   - Objective: Ensure that the title of the added post is "placeHolderDemoTest".
   - Actions:
     - Check the value of the `title` field in the response.
   - Expected:
     - The value of the `title` field should be "placeHolderDemoTest".

5. **Test 5: Check response body**

   - Objective: Ensure that the body of the added post is "plcaHolderDemoTestBodyTest".
   - Actions:
     - Check the value of the `body` field in the response.
   - Expected:
     - The value of the `body` field should be "plcaHolderDemoTestBodyTest".

6. **Test 6: Check response userID**

   - Objective: Ensure that the userID of the added post is 1.
   - Actions:
     - Check the value of the `userId` field in the response.
   - Expected:
     - The value of the `userId` field should be 1.

## Get all posts (GET -> /posts)

This feature allows fetching all posts from the system through the `GET /posts` endpoint.

### Description

The `GET /posts` endpoint allows retrieving all posts from the system.

### Test Plan

1. **Test 1: Fetch data from the API**

   - Objective: Verify that data can be fetched from the API by making a GET request to retrieve all posts.
   - Actions:
     - Use the `GET` method to fetch all posts.
   - Expected:
     - HTTP status 200 (OK).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is an array (list of posts).
   - Actions:
     - Check if the response is an array.
   - Expected:
     - The response should be an array.

3. **Test 3: Check response length**

   - Objective: Ensure that the response contains more than one post.
   - Actions:
     - Check the length of the response array.
   - Expected:
     - The length of the response array should be greater than 1.

## Delete a Post (DELETE -> /posts/100)

This feature allows deleting a specific post using the `DELETE /posts/100` endpoint.

### Description

The `DELETE /posts/100` endpoint allows deleting a post with the ID 100 from the system.

### Test Plan

1. **Test 1: Check if API responds**

   - Objective: Ensure that you can get a response from the API when making a DELETE request to delete a specific post.
   - Actions:
     - Use the `DELETE` method to delete the post with ID 100.
   - Expected:
     - HTTP status 200 (OK).

## Edit a Post (PUT -> /posts/1)

This feature allows editing a specific post using the `PUT /posts/1` endpoint.

### Description

The `PUT /posts/1` endpoint allows editing a post with the ID 1 in the system.

### Test Plan

1. **Test 1: Check if API responds**

   - Objective: Ensure that you can get a response from the API when making a PUT request to edit a specific post.
   - Actions:
     - Use the `PUT` method to edit the post with ID 1.
   - Expected:
     - HTTP status 200 (OK).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is a valid JSON object.
   - Actions:
     - Check if the response is a JSON object.
   - Expected:
     - The response should be a JSON object.

3. **Test 3: Check post ID**

   - Objective: Ensure that the ID of the edited post is 1.
   - Actions:
     - Check the value of the `id` field in the response.
   - Expected:
     - The value of the `id` field should be 1.

4. **Test 4: Check post title**

   - Objective: Ensure that the title of the edited post is "EditTitlePlaceholderTest".
   - Actions:
     - Check the value of the `title` field in the response.
   - Expected:
     - The value of the `title` field should be "EditTitlePlaceholderTest".

5. **Test 5: Check post body**

   - Objective: Ensure that the body of the edited post is "EditBodyPlaceholderTest".
   - Actions:
     - Check the value of the `body` field in the response.
   - Expected:
     - The value of the `body` field should be "EditBodyPlaceholderTest".

6. **Test 6: Check user ID**

   - Objective: Ensure that the user ID of the edited post is 1.
   - Actions:
     - Check the value of the `userId` field in the response.
   - Expected:
     - The value of the `userId` field should be 1.

## Get all posts where userId is 1 (GET -> /posts?userId=1)

This feature allows fetching all posts where the userId is 1 from the system through the `GET /posts?userId=1` endpoint.

### Description

The `GET /posts?userId=1` endpoint allows retrieving all posts where the userId is 1 from the system.

### Test Plan

1. **Test 1: Fetch data from the API**

   - Objective: Verify that data can be fetched from the API by making a GET request to retrieve all posts for a specific user.
   - Actions:
     - Use the `GET` method to fetch all posts for the user with ID 1.
   - Expected:
     - HTTP status 200 (OK).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is an array (list of posts).
   - Actions:
     - Check if the response is an array.
   - Expected:
     - The response should be an array.

3. **Test 3: Check response length**

   - Objective: Ensure that the response contains more than one post.
   - Actions:
     - Check the length of the response array.
   - Expected:
     - The length of the response array should be greater than 1.

4. **Test 4: Check userId for all posts**

   - Objective: Ensure that all posts have userId equal to 1.
   - Actions:
     - Iterate through each post in the response and check the value of the `userId` field.
   - Expected:
     - The `userId` field for all posts should be 1.

## Get nested data (GET -> /posts/1/comments)

This feature allows fetching nested data (comments) for a specific post using the `GET /posts/1/comments` endpoint.

### Description

The `GET /posts/1/comments` endpoint allows retrieving comments associated with a post with ID 1.

### Test Plan

1. **Test 1: Fetch data from the API**

   - Objective: Verify that data can be fetched from the API by making a GET request to retrieve comments for a specific post.
   - Actions:
     - Use the `GET` method to fetch comments for the post with ID 1.
   - Expected:
     - HTTP status 200 (OK).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is an array (list of comments).
   - Actions:
     - Check if the response is an array.
   - Expected:
     - The response should be an array.

3. **Test 3: Check presence of 'name' in all results**

   - Objective: Ensure that all comments have a 'name'.
   - Actions:
     - Iterate through each comment in the response and check for the presence of a 'name'.
   - Expected:
     - All comments should have a 'name'.

4. **Test 4: Check presence of 'email' in all results**

   - Objective: Ensure that all comments have an 'email'.
   - Actions:
     - Iterate through each comment in the response and check for the presence of an 'email'.
   - Expected:
     - All comments should have an 'email'.

5. **Test 5: Check presence of 'body' in all results**

   - Objective: Ensure that all comments have a 'body'.
   - Actions:
     - Iterate through each comment in the response and check for the presence of a 'body'.
   - Expected:
     - All comments should have a 'body'.

## Patch a Post (PATCH -> /posts/1)

This feature allows partially updating a specific post using the `PATCH /posts/1` endpoint.

### Description

The `PATCH /posts/1` endpoint allows updating specific fields of a post with the ID 1 in the system.

### Test Plan

1. **Test 1: Fetch data from the API**

   - Objective: Verify that data can be fetched from the API by making a PATCH request to update a specific post.
   - Actions:
     - Use the `PATCH` method to partially update the post with ID 1.
   - Expected:
     - HTTP status 200 (OK).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is a valid JSON object.
   - Actions:
     - Check if the response is a JSON object.
   - Expected:
     - The response should be a JSON object.

3. **Test 3: Check post ID**

   - Objective: Ensure that the ID of the patched post is 1.
   - Actions:
     - Check the value of the `id` field in the response.
   - Expected:
     - The value of the `id` field should be 1.

4. **Test 4: Check patched title**

   - Objective: Ensure that the title of the patched post is "TestTitlePlaceholder".
   - Actions:
     - Check the value of the `title` field in the response.
   - Expected:
     - The value of the `title` field should be "TestTitlePlaceholder".

5. **Test 5: Check patched body**

   - Objective: Ensure that the body of the patched post is the expected value.
   - Actions:
     - Check the value of the `body` field in the response against the expected value.
   - Expected:
     - The value of the `body` field should match the expected patched body.

6. **Test 6: Check user ID**

   - Objective: Ensure that the user ID of the patched post is 1.
   - Actions:
     - Check the value of the `userId` field in the response.
   - Expected:
     - The value of the `userId` field should be 1.

## Get post with specific ID (GET -> /posts/1)

This feature allows fetching a specific post by its ID using the `GET /posts/1` endpoint.

### Description

The `GET /posts/1` endpoint allows retrieving a post with a specific ID from the system.

### Test Plan

1. **Test 1: Fetch data from the API**

   - Objective: Verify that data can be fetched from the API by making a GET request to retrieve a post with a specific ID.
   - Actions:
     - Use the `GET` method to fetch the post with ID 1.
   - Expected:
     - HTTP status 200 (OK).

2. **Test 2: Check response format**

   - Objective: Ensure that the received response is a valid JSON object.
   - Actions:
     - Check if the response is a JSON object.
   - Expected:
     - The response should be a JSON object.

3. **Test 3: Check post ID**

   - Objective: Ensure that the ID of the fetched post is 1.
   - Actions:
     - Check the value of the `id` field in the response.
   - Expected:
     - The value of the `id` field should be 1.

4. **Test 4: Check presence of title**

   - Objective: Ensure that the fetched post has a title.
   - Actions:
     - Check for the presence of a `title` field in the response.
   - Expected:
     - The post should have a `title`.

5. **Test 5: Check presence of body**

   - Objective: Ensure that the fetched post has a body.
   - Actions:
     - Check for the presence of a `body` field in the response.
   - Expected:
     - The post should have a `body`.

6. **Test 6: Check presence of user ID**

   - Objective: Ensure that the fetched post has a user ID.
   - Actions:
     - Check for the presence of a `userId` field in the response.
   - Expected:
     - The post should have a `userId`.
