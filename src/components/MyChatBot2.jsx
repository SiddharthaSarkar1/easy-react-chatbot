import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';


const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const MyChatbot2 = () => (
    // <ChatBot steps={steps} />
    <ChatBot
  headerTitle="Speech Recognition"
  recognitionEnable={true}
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
  />
);

export default MyChatbot2;
