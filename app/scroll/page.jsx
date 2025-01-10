import React from "react";

const StackingSections = () => {
  //   const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

  return (
    <div className="relative h-[1000vh]">
      <div className="sticky top-0 min-h-screen flex items-center justify-center bg-zinc-800">
        <h1 className="text-4xl font-bold">Section 00</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-100`}>
        <h1 className="text-4xl font-bold">Section 01</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-200`}>
        <h1 className="text-4xl font-bold">Section 02</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-300`}>
        <h1 className="text-4xl font-bold">Section 03</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-400`}>
        <h1 className="text-4xl font-bold">Section 04</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-500`}>
        <h1 className="text-4xl font-bold">Section 05</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-600`}>
        <h1 className="text-4xl font-bold">Section 06</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-700`}>
        <h1 className="text-4xl font-bold">Section 07</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-800`}>
        <h1 className="text-4xl font-bold">Section 08</h1>
      </div>
      <div className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-900`}>
        <h1 className="text-4xl font-bold">Section 09</h1>
      </div>
      {/* {sections.map((section, index) => (
        <div
          key={index}
          className={`sticky top-0 min-h-screen flex items-center justify-center bg-gray-${
            100 + index * 100
          } z-${10 - index}`}
        >
          <h1 className="text-4xl font-bold">{section}</h1>
        </div>
      ))} */}
    </div>
  );
};

export default StackingSections;
