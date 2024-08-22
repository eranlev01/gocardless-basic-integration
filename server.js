// server.js

const express = require("express");
const fetch = require("node-fetch");
const GoCardless = require("gocardless-nodejs");
const app = express();

// Replace with your actual GoCardless API key
const client = new GoCardless.Client({
  access_token: "your_access_token", // Replace with your API key
  environment: "sandbox", // Use 'live' for production
});

app.use(express.json());
app.use(express.static("public")); // Serve the static files from the 'public' directory

// Endpoint to create a mandate and get the redirect URL
app.post("/create-mandate", async (req, res) => {
  const { customer, success_redirect_url } = req.body;

  try {
    const redirectFlow = await client.redirectFlows.create({
      description: "Payment for order #12345",
      session_token: "unique_session_token_here", // Generate a unique session token
      success_redirect_url: success_redirect_url,
      prefilled_customer: {
        given_name: customer.given_name,
        email: customer.email,
      },
    });

    res.json({ redirect_url: redirectFlow.redirect_url });
  } catch (error) {
    console.error("Failed to create mandate:", error);
    res.status(500).json({ error: "Failed to create mandate" });
  }
});

// Endpoint to create a payment after mandate is authorized
app.post("/create-payment", async (req, res) => {
  const { amount, currency, mandate_id } = req.body;

  try {
    const payment = await client.payments.create({
      amount, // Amount in the smallest currency unit (e.g., pence/cents)
      currency, // Currency code (e.g., GBP)
      links: {
        mandate: mandate_id,
      },
      description: "Payment for order #12345",
      metadata: {
        order_number: "12345",
      },
    });

    res.json({ payment_id: payment.id });
  } catch (error) {
    console.error("Failed to create payment:", error);
    res.status(500).json({ error: "Failed to create payment" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
