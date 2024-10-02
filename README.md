**ShoppyGlobe API**

- **Features**
  - **Product Management** : Perform CRUD operations for products (Create, Read, Update, Delete).
  - **Cart Operations** : Add, update, and remove products from the user's shopping cart.
  - **User Authentication** : JWT-based authentication for user registration and login.
  - **MongoDB Integration** : Use MongoDB for persistent storage of product and cart data.
  - **Error Handling** : Global error handling and validation of requests.

- **Technologies Used**
  - **Node.js** : JavaScript runtime for building scalable network applications.
  - **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
  - **MongoDB**: NoSQL database for storing product and cart data.
  - **Mongoose** : Object Data Modeling (ODM) library for MongoDB and Node.js.
  - **JWT (JSON Web Tokens)**: For secure user authentication.

- **Installation**
 - **clone the repository**
     git clone https://github.com/Leelamanisahu/shoppy-globe-api.git
     cd shoppy-globe-api
     npm install
     npm start

- **API's**
  - **Reister**
      - endpoint : localhost:5000/shopify/user/register
      - example requiest :
       {
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}

  - **login**
     - endpoint : localhost:5000/shopify/user/login
     - example requiest : 
     {
    "email":"internshala@gmail.com",
    "password":"123"
}

   -**Get All Products**
     - endpoint : localhost:5000/shopify/product/get

   -**Add Products**
     - endpoint : localhost:5000/shopify/product/add
     example requet :{
         "name":"I phone 16 pro",
    "thumbnail":"https:/image/of/santoor",
    "rating":4,
    "stockQty":22,
    "brand":"Apple",
    "description":"This is phone",
    "price":145000
     }

   -**Get One Products**
     - endpoint : localhost:5000/shopify/product/get-product/:productId

   -**Get One Products**
     - endpoint : localhost:5000/shopify/product/get-product/:productId
     
   -**Update  Products**
     - endpoint : localhost:5000/shopify/product/update/productId

   -**Add to Cart**
     - endpoint : localhost:5000/shopify/cart/add-cart
     - example request :{
    "productId":"66fb95630604eedd795cbe34"
}

   -**Increase Product Qunatity in cart**
     - endpoint : localhost:5000/shopify/cart/increase
     - example request:{
         "productId":"66fb95630604eedd795cbe34",
    "quantity": 2
     }

   -**get cart details**
     - endpoint : localhost:5000/shopify/cart/get

   -**Remove product from cart**
     - endpoint : localhost:5000/shopify/cart/remove/productId

   -**Empty the entire cart**
     - endpoint : localhost:5000/shopify/cart/delete/cartId

     
   