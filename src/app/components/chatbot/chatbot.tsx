"use client";
import { useEffect } from "react";

const JotformChatbot = () => {
  useEffect(() => {
    // Load Jotform AI Agent Script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the AI Agent once script is loaded
    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/01955f7aa3007beba2314f8e4278a6b3e66b",
          rootId:"JotformAgent-01955f7aa3007beba2314f8e4278a6b3e66b",
          formID: "01955f7aa3007beba2314f8e4278a6b3e66b",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #2daf8c 0%, #b8eba9 100%)",
          buttonBackgroundColor: "#417505",
          buttonIconColor: "#F8FEEC",
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hey! Want to know more? Ask me anything.",
            openByDefault: "No",
            pulse: "Yes",
            position: "right",
            autoOpenChatIn: "0"
          },
          isVoice: true
        });
      }
    };

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return <div id="JotformAgent-01955f7aa3007beba2314f8e4278a6b3e66b"></div>;
};

export default JotformChatbot;
