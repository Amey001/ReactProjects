// import React, { useEffect, useState } from "react";
// import "./style.css"; // Import your Tailwind CSS styles

// const TextAnimation = () => {
//   const [currentText, setCurrentText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const cursor = "|";

//   const textList = [
//     "React Developer",
//     "Java Developer",
//     "Full Stack Developer",
//   ];

//   useEffect(() => {
//     const animateText = () => {
//       const currentTextContent = textList[textIndex];

//       for (let i = 0; i <= currentTextContent.length; i++) {
//         setTimeout(() => {
//           setCurrentText((prevText) => prevText + currentTextContent.charAt(i));
//         }, i * 20);
//       }

//       setTimeout(() => {
//         deleteText();
//       }, (currentTextContent.length + 1) * 20);
//     };

//     const deleteText = () => {
//       for (let i = currentText.length; i >= 0; i--) {
//         setTimeout(() => {
//           setCurrentText((prevText) => prevText + currentTextContent.charAt(i));
//         }, (currentText.length - i) * 10);
//       }

//       setTimeout(() => {
//         setTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
//         animateText();
//       }, (currentText.length + 1) * 10);
//     };

//     animateText();
//   }, [textIndex, textList, currentText.length]); // Include currentText.length in the dependency array

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="text-container text-2xl p-2">
//         <span>{currentText}</span>
//         <span className="cursor">{cursor}</span>
//       </div>
//     </div>
//   );
// };

// export default TextAnimation;
