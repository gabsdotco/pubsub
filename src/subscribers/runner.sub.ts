import { PubSub } from '@google-cloud/pubsub';

import { runnerMessageCallback, runnerErrorCallback } from '@/services/runner.service';

const client = new PubSub({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
});

const SUBSCRIPTION_NAME = 'runner-sub';

export const setupRunnerSubscriber = () => {
  console.log('Setting up runner subscriber');

  const subscription = client.subscription(SUBSCRIPTION_NAME, {
    flowControl: {
      maxMessages: 2,
      allowExcessMessages: false,
    },
  });

  subscription.on('message', runnerMessageCallback);
  subscription.on('error', runnerErrorCallback);

  console.log(`Listening for messages on ${SUBSCRIPTION_NAME}`);
};
