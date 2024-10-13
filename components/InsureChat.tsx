"use client";

import React, { useState, useRef, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SendHorizonal } from 'lucide-react';
import Image from 'next/image';
import { Textarea } from "@/components/ui/textarea";

const InsureChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const chatContainerRef = useRef(null);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    adjustTextareaHeight();
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const userMessage = { sender: "user", text: inputValue };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInputValue("");

      setTimeout(() => {
        const botResponse = getBotResponse(userMessage.text);
        const botMessage = { sender: "bot", text: botResponse };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 500);

      setIsChatStarted(true);
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const resetTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
    }
  };

  const getBotResponse = (message) => {
    if (message.toLowerCase().includes("retirement")) {
      return "We offer a variety of retirement plans. Would you like more information on that?";
    } else if (message.toLowerCase().includes("premium")) {
      return "The estimated monthly premium for a funeral cover of E50000 is E250. Would you like to proceed?";
    } else {
      return "I'm not sure about that. Can you ask me something else related to insurance?";
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to the bottom when a new message is added
    adjustTextareaHeight();
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      textarea.addEventListener('input', adjustHeight);
      return () => textarea.removeEventListener('input', adjustHeight);
    }
  }, [messages]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {!isChatStarted && (
        <>
          <Image src="/assets/images/logo.png" height={100} width={100} alt="logo" />
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-blue-500 to-blue-800 text-center font-sans font-bold">
            InsureChat
          </h1>
          <p className="text-neutral-300 w-1/2 mx-auto my-2 text-sm text-center relative z-10">
            Welcome to InsureChat, a natural language chat bot that answers your questions
            about our insurance products. For all your enquiries and estimated costs, InsureChat has 
            got you covered.
          </p>
          <BackgroundBeams />
        </>
      )}

      {isChatStarted && (
        <div
          className="w-full flex flex-col items-center mb-20 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 100px - 60px)" }} // Adjusting for textarea height
          ref={chatContainerRef}
        >
          <div className="w-full max-w-2xl flex flex-col space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-lg flex justify-between items-center ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white self-end items-end"
                    : "bg-neutral-800 text-neutral-200 self-start items-start"
                } max-w-[80%] break-words`}
              >
                <span className="w-full whitespace-pre-wrap break-words">{message.text}</span>
                <button
                  onClick={() => copyToClipboard(message.text)}
                  className="mt-2 text-neutral-400 hover:text-white"
                >
                  {/* <Copy size={20} /> */}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Section */}
      <div className="max-container fixed bottom-0 w-1/2 p-4 flex items-center justify-center bg-neutral-950">
        <div className="relative w-full max-w-2xl">
          <Textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (inputValue.trim()) {
                  handleSubmit();
                }
              }
            }}
            className="w-full rounded-lg text-lg bg-neutral-800 resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 pr-12"
            placeholder="Type your message here..."
          />
          <button
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              inputValue.trim() ? "text-blue-900 cursor-pointer" : "text-neutral-500 cursor-not-allowed"
            }`}
          >
            <SendHorizonal size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsureChat;
