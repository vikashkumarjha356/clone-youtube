import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessages } from '../utils/helper';

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessge] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessages(20) + "🚀"
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[400px] sm:h-[500px] md:h-[540px] lg:h-[540px] ml-2 p-2 border border-black bg-state-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((message, index) => (
            <ChatMessage key={index} name={message.name} message={message.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 mt-2 flex flex-col sm:flex-row sm:items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Vikash",
              message: liveMessage
            })
          );
          setLiveMessge('');
        }}
      >
        <input
          className="w-full sm:w-[80%] p-2 border border-gray-200 rounded-md mb-2 sm:mb-0 sm:mr-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessge(e.target.value)}
          placeholder="Type your message"
        />
        <button className="w-full sm:w-auto p-2 bg-green-100 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
