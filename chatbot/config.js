import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import Options from "../Components/Options/Options";
import Quiz from "../Components/Quiz/Quiz";

const config = {
  botName: "Admin",
  initialMessages: [
    createChatBotMessage("Welcome to The Flat Finder. How may I help you?", {
      widget: "options"
    })
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />
    },
    {
      widgetName: "Search",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Click here to find out how to search",
            answer:
              "Just type in the area that suits you,apply any other filters! Happy searching!",
            id: 1
          }
        ]
      }
    },
    {
      widgetName: "Profile",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Click here to learn more about your profile",
            answer:
              "Your profile is a place where you can choose what others see aboout you! Here you can add information about yourself and what you're looking for!",
            id: 2
          }
        ]
      }
    }
  ]
};

export default config;
