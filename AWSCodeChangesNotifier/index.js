const axios = require("axios");

exports.handler = async (event) => {
  // Define the Slack API URL
  const slackApiUrl = "https://slack.com/api/chat.postMessage";

  // Replace this with your Slack API token. Make sure to securely store it.
  const token = "YOUR_SLACK_API_TOKEN";

  // Define the headers for the HTTP request
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  // Prepare the message to post to Slack
  const message = {
    channel: "test-notifications",
    text:
      `New changes in repository ${event["detail"]["repositoryName"]}:\n` +
      `- Commit ID: ${event["detail"]["commitId"]}\n` +
      `- Author: ${event["detail"]["author"]}\n` +
      `- Date: ${event["time"]}`,
  };

  try {
    // Send the message to Slack
    const response = await axios.post(slackApiUrl, message, { headers });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
