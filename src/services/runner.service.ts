import { Message } from '@google-cloud/pubsub';

export const runnerMessageCallback = (message: Message) => {
  console.log(`Received message ${message.id} - ${message.data.toString()}`);

  setTimeout(() => {
    console.log(`Processed message ${message.id}`);
    message.ack();
  }, 10000);
};

export const runnerErrorCallback = (error: string | any) => {
  console.error(`Received error: ${error}`);
};
