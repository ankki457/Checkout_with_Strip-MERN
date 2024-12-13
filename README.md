README for Stripe Checkout Application


---

Project Overview

This application implements a simple e-commerce platform with Stripe integration for payment processing. Users can browse products, add them to a cart, and proceed to checkout to make payments using Stripe.


---

Features

Frontend:

1. Product Listing: Displays a list of mock products.


2. Add to Cart: Add products to the cart with an "Add to Cart" button.


3. Cart Icon: Shows the number of items in the cart.


4. Checkout Page: Input email and payment details to proceed.


5. Stripe Payment: Redirects users to the Stripe payment page.


6. Success/Failure Pages: Indicates the payment status after completion.



Backend:

1. Order Tracking: Saves order details to a MongoDB database.


2. Stripe Webhook: Updates order status based on Stripe events.


3. Modular Code: Organized with controllers, models, and routes.


4. RESTful APIs:

Create a Stripe checkout session.

Handle webhook events.





---

Technologies Used

Frontend:

HTML

CSS

Vanilla JavaScript

Bootstrap (optional)


Backend:

Node.js

Express.js

MongoDB

Stripe API

Mongoose ORM

dotenv



---

Project Structure

stripe-checkout/
├── backend/
│   ├── controllers/
│   │   └── stripeController.js
│   ├── models/
│   │   └── orderModel.js
│   ├── routes/
│   │   └── stripeRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── cart.html
│   ├── checkout.html
│   ├── success.html
│   ├── failure.html
│   └── assets/
│       └── styles.css
├── README.md


---

Setup Instructions

Backend:

1. Clone the repository:

git clone https://github.com/your-repository/stripe-checkout.git
cd stripe-checkout/backend


2. Install dependencies:

npm install


3. Set up environment variables:

Create a .env file in the backend folder with the following:

PORT=5000
STRIPE_SECRET_KEY=<your_stripe_secret_key>
MONGO_URI=mongodb://localhost:27017/stripe-checkout
STRIPE_WEBHOOK_SECRET=<your_webhook_secret>



4. Start the server:

npm run dev


5. Test the API:

Create a Stripe session: POST /api/stripe/checkout-session

Handle webhook: POST /api/stripe/webhook





---

Frontend:

1. Navigate to the frontend folder:

cd stripe-checkout/frontend


2. Open index.html in a browser to view the product listing page.


3. Test adding items to the cart and proceeding to the checkout.


4. After successful payment, you'll be redirected to the success.html page.




---

API Endpoints

POST /api/stripe/checkout-session

Description: Creates a Stripe checkout session for payment.

Request Body:

{
  "items": [
    { "name": "Product 1", "price": 100, "quantity": 2 }
  ],
  "email": "user@example.com"
}

Response:

{
  "id": "checkout_session_id"
}


POST /api/stripe/webhook

Description: Listens for Stripe events and updates order status.



---

Deployment

1. Backend:

Deploy using services like Heroku, Render, or AWS.

Ensure .env variables are properly configured in the environment.



2. Frontend:

Host on static hosting services like GitHub Pages, Netlify, or Vercel.





---

Video Demonstration

1. Steps to Create:

Record a walkthrough of the application.

Demonstrate product browsing, adding to the cart, and payment process.

Highlight backend API calls and database updates.



2. Upload the Video:

Share via YouTube or as a downloadable file.





---

Key Notes

1. Stripe Keys:

Use test mode keys for development.

Do not share your secret key in public repositories.



2. Database Setup:

Ensure MongoDB is running locally or configure it to connect to a remote cluster.



3. Webhook Secret:

Obtain from the Stripe Dashboard under Webhook settings.





---

Let me know if you need additional clarification or assistance!

