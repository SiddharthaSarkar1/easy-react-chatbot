import React from 'react';
import  Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const MyChatbot = () => {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please Enter Your Name',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, please select your issue',
      trigger: 'Issues',
    },
    {
      id: 'Issues',
      options: [
        {
          value: 'React',
          label: 'React',
          trigger: 'React',
        },
        {
          value: 'Angular',
          label: 'Angular',
          trigger: 'Angular',
        },
        {
          value: 'Vue',
          label: 'Vue',
          trigger: 'Vue',
        },
      ],
    },
    {
      id: 'React',
      message: 'Thanks for telling your React issue',
      end: true,
    },

    {
      id: 'Angular',
      message: 'Thanks for telling your Angular issue',
      end: true,
    },
    {
      id: 'Vue',
      message: 'Thanks for telling your Vue issue',
      end: true,
    },
  ];

  return (
    <>
      <Chatbot steps={steps} />
    </>
  );
};

export default MyChatbot;
