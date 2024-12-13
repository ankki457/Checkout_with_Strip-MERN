Project Overview
This application implements a simple e-commerce platform with Stripe integration for payment processing. 
Users can browse products, add them to a cart, and proceed to checkout to make payments using Stripe.


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


2. Modular Code: Organized with controllers, models, and routes.


3. RESTful APIs:

---

Technologies Used

Frontend:
HTML
CSS
Vanilla JavaScript
Bootstrap

Backend:
Node.js
Express.js
MongoDB
Stripe API
Mongoose Atlas
dotenv
---

Setup Instructions

Backend:

1. Clone the repository:

git clone https://github.com/ankki457/Checkout_with_Strip-MERN.git
cd stripe-checkout/backend


2. Install dependencies:

npm install


3. Set up environment variables:

Create a .env file in the backend folder with the following:

PORT=5000
STRIPE_SECRET_KEY=<your_stripe_secret_key>
MONGO_URI=mongodb:Atlas
STRIPE_WEBHOOK_SECRET=<your_webhook_secret>



4. Start the server:

npm run start


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

Video Demonstration

1. Steps to Create:

Record a walkthrough of the application.

Demonstrate product browsing, adding to the cart, and payment process.

Highlight backend API calls and database updates.



2. Upload the Video:

Share via YouTube or as a downloadable file.


Ensure MongoDB is running remote cluster.

![Screenshot (101)](https://github.com/user-attachments/assets/df8b23dc-672c-4f43-b0f7-c69491247559)
![Screenshot (102)](https://github.com/user-attachments/assets/c387582d-ec57-4d24-a739-7f998166c1be)
![Screenshot (103)](https://github.com/user-attachments/assets/4496204e-ec48-4ff7-9da5-97d6b0ab2f75)
![Screenshot (104)](https://github.com/user-attachments/assets/15e2f2f6-946b-41e1-aff2-5e651860c168)
![Screenshot (105)](https://github.com/user-attachments/assets/90a85c45-1378-4754-a059-34906e9a6b70)

--
