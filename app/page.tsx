"use client"
import BentoGrid from '@/components/BentoGrid'
import VideoCarousel from '@/components/VideoCarousel'
import PhotoGallery from '@/components/PhotoGallery'
import FoodGallery from '@/components/FoodGallery'
import React, { useState, useRef } from "react";

export default function Home() {
  return (
    <main className="pt-16">
      <EditableInput />
      <BentoGrid />
      <VideoCarousel />
      <PhotoGallery />
      <FoodGallery />
    </main>
  )
}


const EditableInput = () => {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    setCursorPosition(e.target.selectionStart || 0);
  };

  const renderFormattedText = () => {
    const parts = text.split(/(@\w+)/g);
    let position = 0;
    
    return parts.map((part, index) => {
      position += part.length;
      
      if (part.startsWith("@")) {
        return (
          <span key={index} style={{ color: "blue", fontWeight: "bold" }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          outline: "none",
          backgroundColor: "transparent",
          color: "transparent",
          caretColor: "black",
          position: "relative",
          zIndex: 2
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "10px",
          pointerEvents: "none",
          width: "100%",
          zIndex: 1
        }}
      >
        {renderFormattedText()}
      </div>
    </div>
  );
};

