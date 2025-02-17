"use client";

import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SendHorizonal } from 'lucide-react';
import Image from 'next/image';
import { Textarea } from "@/components/ui/textarea";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const InsureChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Function to handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustTextareaHeight();
  };

  // Function to handle message submission
  const handleSubmit = async () => {
    if (inputValue.trim()) {
      const userMessage: Message = { sender: "user", text: inputValue };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInputValue("");

      // Call custom GPT model (ERICA) to get the response
      setIsChatStarted(true);
      const botResponse = await getBotResponse(userMessage.text);
      const botMessage: Message = { sender: "bot", text: botResponse };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }
  };

  // Function to fetch ERICA's response from OpenAI
  const getBotResponse = async (message: string): Promise<string> => {
    try {
      const response = await axios.post("/api/insurechat/ask", {
        message, // Send the user's message
      });
      
      return response.data.reply; // Return ERICA's response
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, I am unable to respond at the moment. Please try again later.";
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    adjustTextareaHeight();
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
          style={{ maxHeight: "calc(100vh - 100px - 60px)" }}
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
              </div>
            ))}
          </div>
        </div>
      )}

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
