# AWS Lambda Slack Notifier

This AWS Lambda function is crafted to deliver notifications to a Slack channel whenever changes transpire in a CodeCommit repository. It serves as a valuable tool for keeping your team up to date with the latest developments within your repository.

## Prerequisites

Before using this Lambda function, you'll need to:

1. **Generate a Slack API Token**: Acquire a Slack API token to serve as the means to post messages to your preferred Slack channel. In the Lambda code, replace 'YOUR_SLACK_API_TOKEN' with this token.

2. **Configure CodeCommit Event Settings**: Set up your AWS CodeCommit repository to transmit events to AWS EventBridge. These events trigger the Lambda function. Sample JSON events are included below for testing purposes.

## Summary

This Lambda function is constantly monitoring CodeCommit events through AWS EventBridge. Whenever an event takes place, such as the creation of a new branch or the pushing of a commit, EventBridge sends the event to the Lambda function. The Lambda function then organizes the event data into a Slack message.

This system empowers you to keep your development team well-informed and streamline your workflow through automated notifications.

The message includes details such as: The repository name, Commit ID, Author of the commit, Date and time of the event

The formatted message is subsequently posted in your designated Slack channel

1. The Lambda function is enclosed within the `AWSCodeChangesNotifier` folder.
2. You configure event triggers (e.g., AWS EventBridge rules) to dictate when the Lambda function runs, potentially setting up triggers for code commit events.
3. WS Lambda springs into action as soon as the specified event happens.
4. Using your Slack API token, the function transmits a structured message to your chosen Slack channel.

## Example CodeCommit Event (to test the function)

For testing purposes, you can use an example CodeCommit event like the one below:

```json
{
  "version": "0",
  "id": "12345678-1234-1234-1234-1234567890ab",
  "detail-type": "CodeCommit Repository State Change",
  "source": "aws.codecommit",
  "account": "123456789012",
  "time": "2023-10-10T12:34:56Z",
  "region": "us-east-1",
  "resources": [],
  "detail": {
    "event": "referenceCreated",
    "repositoryName": "YourRepoName",
    "referenceName": "refs/heads/main",
    "referenceType": "branch",
    "commitId": "c4a4a85a-d2b7-4b3c-8626-5b2d141262e0",
    "author": "John Doe"
  }
}
```
