import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Search",
      handler: props.actionProvider.handleChatBot,
      id: 1
    },
    { text: "Profile", handler: props.actionProvider.handleChatBot, id: 2 },
    { text: "Other help", handler: props.actionProvider.handleChatBot, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
