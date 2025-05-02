// import React, { useState, useRef, useEffect } from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [step, setStep] = useState(0);
//   const [showNext, setShowNext] = useState(true);
//   const chatEndRef = useRef(null);
//   const chatbotRef = useRef(null);

//   const qa = [
//     {
//       question: "What is your name?",
//       answer: "I'm Pradip Das's portfolio assistant!",
//     },
//     {
//       question: "Who is Pradip Das?",
//       answer:
//         "Pradip Das is a MERN stack developer passionate about creating innovative web solutions.",
//     },
//     {
//       question: "What projects have you built?",
//       answer:
//         "MERN Blog, a flight booking app (WIP), a music app, and a to-do list app.",
//     },
//     {
//       question: "How can I contact you?",
//       answer:
//         "Check the Contact section or email: pradipdas.dev99@gmail.com",
//     },
//     {
//       question: "What technologies do you know?",
//       answer:
//         "HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, and more.",
//     },
//     {
//       question: "Where are you from?",
//       answer: "Kolkata, West Bengal, India.",
//     },
//     {
//       question: "Who is your role model?",
//       answer: "Ratan Tata is Pradip’s biggest inspiration.",
//     },
//   ];

//   const handleRefresh = () => {
//     setCurrentQuestionIndex(0);
//     setAnswers([]);
//     setShowAnswer(false);
//   };


//   const handleNext = () => {
//     if (step < qa.length) {
//       const current = qa[step];
//       setMessages((prev) => [...prev, { from: "user", text: current.question }]);
//       setShowNext(false);
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { from: "bot", text: current.answer }]);
//         setShowNext(true);
//         setStep((prev) => prev + 1);
//       }, 800);
//     } else if (step === qa.length && showNext) {
//       setShowNext(false);
//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev,
//           {
//             from: "bot",
//             text: "✅ Thank you for your valuable time. Stay tuned with me!",
//           },
//         ]);
//       }, 800);
//     }
//   };



//   // Scroll to bottom when message updates
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Trigger first question when opened
//   useEffect(() => {
//     if (open && step === 0 && showNext) {
//       handleNext();
//     }
//   }, [open]);

//   // Close when clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <div className={`chatbot-container ${open ? "open" : ""}`}>
//       {open ? (
//         <div className="chatbox" ref={chatbotRef}>
//           <div className="chat-window">
//             {messages.map((msg, i) => (
//               <div key={i} className={`chat-bubble ${msg.from}`}>
//                 {msg.text}
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </div>
//           {showNext && step <= qa.length && (
//             <button className="next-btn" onClick={handleNext}>
//               Next
//             </button>
//           )}
//           {step > qa.length && (
//         <button className="refresh-btn" onClick={handleRefresh}>
//           🔄 Restart Chat
//         </button>
//       )}
//           <button className="toggle-button" onClick={() => setOpen(false)}>✕</button>
//         </div>
//       ) : (
//         <button className="chat-icon" onClick={() => setOpen(true)}>💬</button>
//       )}

      

//     </div>
//   );
// };

// export default Chatbot;



import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [showNext, setShowNext] = useState(true);
  const chatEndRef = useRef(null);
  const chatbotRef = useRef(null);

  const qa = [
    {
      question: "What is your name?",
      answer: "I'm Pradip Das's portfolio assistant!",
    },
    {
      question: "Who is Pradip Das?",
      answer:
        "Pradip Das is a MERN stack developer passionate about creating innovative web solutions.",
    },
    {
      question: "What projects have you built?",
      answer:
        "MERN Blog, a flight booking app (WIP), a music app, and a to-do list app.",
    },
    {
      question: "How can I contact you?",
      answer:
        "Check the Contact section or email: pradipdas.dev99@gmail.com",
    },
    {
      question: "What technologies do you know?",
      answer:
        "HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, and more.",
    },
    {
      question: "Where are you from?",
      answer: "Kolkata, West Bengal, India.",
    },
    {
      question: "Who is your role model?",
      answer: "Ratan Tata is Pradip’s biggest inspiration.",
    },
  ];

  const handleRefresh = () => {
    setStep(0);
    setMessages([]);
    setShowNext(true);
  };

  const handleNext = () => {
    if (step < qa.length) {
      const current = qa[step];
      setMessages((prev) => [...prev, { from: "user", text: current.question }]);
      setShowNext(false);
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: current.answer }]);
        setShowNext(true);
        setStep((prev) => prev + 1);
      }, 800);
    } else if (step === qa.length && showNext) {
      setShowNext(false);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "✅ Thank you for your valuable time. Stay tuned with me!",
          },
        ]);
        setStep((prev) => prev + 1); // Move beyond the last step
      }, 800);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && step === 0 && showNext) {
      handleNext();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={`chatbot-container ${open ? "open" : ""}`}>
      {open ? (
        <div className="chatbox" ref={chatbotRef}>
          <div className="chat-window">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {showNext && step <= qa.length && (
            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          )}

          {step > qa.length && (
            <button className="refresh-btn" onClick={handleRefresh}>
              🔄 Restart Chat
            </button>
          )}

          <button className="toggle-button" onClick={() => {setOpen(false); handleRefresh();}}>✕</button>
        </div>
      ) : (
        <button className="chat-icon" onClick={() => setOpen(true)}>💬</button>
      )}
    </div>
  );
};

export default Chatbot;
