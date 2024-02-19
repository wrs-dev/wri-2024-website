const axios = require("axios");

exports.handler = async function (event, context) {
  // Check if the Content-Type is application/json
  if (event.headers["content-type"] !== "application/json") {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Bad request: Content-Type must be application/json",
      }),
    };
  }

  try {
    // Safely parsing the event.body
    const data = JSON.parse(event.body);
    const email = data.email;

    // Your existing environment variables
    const API_KEY = process.env.MAILERLITE_PRODUCTION_API_KEY;
    const BASE_API_URL = process.env.MAILERLITE_PRODUCTION_BASE_API_URL;
    const NEWSLETTER_GROUP_ID =
      process.env.MAILERLITE_PRODUCTION_NEWSLETTER_GROUP_ID;

    // Form the full API endpoint URL
    const url = `${BASE_API_URL}/groups/${NEWSLETTER_GROUP_ID}/subscribers`;

    // POST request to MailerLite API
    const response = await axios.post(
      url,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    // Successful subscription
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Subscription successful",
        subscriber: response.data,
      }),
    };
  } catch (error) {
    // Handle errors from JSON.parse or the POST request
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: "Failed to subscribe.",
        details: error.message,
      }),
    };
  }
};
