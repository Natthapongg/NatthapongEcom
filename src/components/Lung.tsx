import React from 'react';

export default function Lung() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-0 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        ระบบ AI ตรวจวินิจฉัยโรคมะเร็งปอด
      </h1>
      <div className="w-screen shadow-lg border rounded-none overflow-hidden">
        <iframe 
          src="http://127.0.0.1:5000"
          width="100%"
          height="1000"
          allow="camera; microphone; fullscreen"
          className="w-full h-[1000px] border-0 overflow-hidden"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
