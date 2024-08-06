import React from "react";

const Gallery = () => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/iaTHiu-dJPM",
      textAbove: "Why do you disappear?",
      textBelow: "A short film inspired by La La Land.",
    },
    {
      src: "https://www.youtube.com/embed/KWE5T7xHMsU",
      textAbove: "Dream",
      textBelow:
        "A short film, drawing inspiration from True Detective's Rustin Cohle, explores the existential mysteries and inner turmoil of his mind.",
    },
    {
      src: "https://www.youtube.com/embed/DibxY-uf35k",
      textAbove: "Under the silver lake",
      textBelow:
        "The monologue revolves around an imaginary individual struggling with the loss of a loved one. The haunting specter of their presence seems to accompany him wherever he goes. A poignant reminder of shared moments emerges when he visits the lake, a place once shared together. Now, the silhouette of his dearly departed appears, gradually dissolving into the depths of the lake. Powerless to intervene, he can only bear witness, standing near the melancholic, colorless lake.",
    },
    {
      src: "https://www.youtube.com/embed/GyRqmnuaHuc",
      textAbove: "Letters not sent",
      textBelow: "letters not sent.. to a friend",
    },
    {
      src: "https://www.youtube.com/embed/BaLWsa2ZvPI",
      textAbove: "Old house",
      textBelow: "I saw an old house..",
    },
    {
      src: "https://www.youtube.com/embed/rhpHqP5M5PY",
      textAbove: "Far from the madding crowd",
      textBelow: "Far from the madding crowd, there is a land......",
    },
    {
      src: "https://www.youtube.com/embed/rnLQYR8zfsk",
      textAbove: "Phantom Regret",
      textBelow:
        "The monologue-like nature of the poem. You can feel the hopeless despair, the regret and the rage. .....",
    },
    // Add more video objects as needed
  ];

  return (
    <div className="gallery-container py-12 px-4">
      {/* Header Section */}
      <div className="text-gray-700 mb-8">
        <h1 className="text-4xl font-bold uppercase text-center">Gallery</h1>
      </div>

      {/* Video Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            {/* Text above video */}
            <div className="text-above mb-4 text-center">
              <p className="text-lg font-semibold text-gray-700">
                {video.textAbove}
              </p>
            </div>
            {/* Video */}
            <div className="video-container mb-4 flex justify-center">
              <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                <iframe
                  src={video.src}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-lg"
                />
              </div>
            </div>
            {/* Text below video */}
            <div className="text-below text-center">
              <p className="text-md text-gray-600">{video.textBelow}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Meet the Artist Section */}
      <div className="meet-the-artist-section flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold mb-4">MEET THE ARTIST</h2>
        <div className="instagram-embed mb-4 flex justify-center">
          <iframe
            src="https://www.instagram.com/p/C81o3smPs8b/embed"
            width="400"
            height="505"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Instagram Post"
            className="rounded-lg"
          ></iframe>
        </div>
        <p className="text-lg">infibat</p>
        <p className="text-md text-gray-600">My back pages</p>
      </div>
    </div>
  );
};

export default Gallery;
