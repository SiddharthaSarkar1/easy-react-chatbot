import React from "react";
import Chatbot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { ThemeProvider } from "styled-components";


// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome to our website",
    trigger: "Ask Name",
  },
  {
    id: "Ask Name",
    message: "Please Enter Your Name",
    trigger: "waiting1",
  },
  {
    id: "waiting1",
    user: true,
    trigger: "Name",
  },
  {
    id: "Name",
    message: "Hi {previousValue}, please select your issue",
    trigger: "Issues",
  },
  {
    id: "Issues",
    options: [
      {
        value: "React",
        label: "React",
        trigger: "React",
      },
      {
        value: "Angular",
        label: "Angular",
        trigger: "Angular",
      },
      {
        value: "Vue",
        label: "Vue",
        trigger: "Vue",
      },
    ],
  },
  {
    id: "React",
    message: "Thanks for telling your React issue",
    end: true,
  },

  {
    id: "Angular",
    message: "Thanks for telling your Angular issue",
    end: true,
  },
  {
    id: "Vue",
    message: "Thanks for telling your Vue issue",
    end: true,
  },
];

const steps2 = [
  {
    id: "1",
    message: "What number I am thinking?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Number 1", trigger: "4" },
      { value: 2, label: "Number 2", trigger: "3" },
      { value: 3, label: "Number 3", trigger: "3" },
    ],
  },
  {
    id: "3",
    message: "Wrong answer, try again.",
    trigger: "2",
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true,
  },
];

const MyChatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <Chatbot steps={steps} />
    </ThemeProvider>
  );
};

export default MyChatbot;
