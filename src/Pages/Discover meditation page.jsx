import React from "react";

const meditations = [
  {
    id: 1,
    author: "Pascal Auclair",
    title: "Rediscover the Familiar",
    description:
      "This is the first time you’ve ever been here, now. Pascal invites you to discover the vivid and mysterious experience of this new moment.",
    duration: "5:00",
    img: "./images/dm1.png",
  },
  {
    id: 2,
    author: "Alexis Santos",
    title: "Natural mindful walking meditation",
    description:
      "Taking a relaxed walk mindfully will soothe the nervous system, get you outside, and can refresh you mentally when you’re feeling low or off.",
    duration: "12:00",
    img: "./images/dm2.png",
  },
  {
    id: 3,
    author: "Sharon Salzberg",
    title: "Being with Big Emotions",
    description:
      "Bring an open minded curiosity to your big emotions and get to know yourself more fully, developing resilience to deal with all the feels.",
    duration: "9:50",
   img: "./images/dm3.png",
  },
  {
    id: 4,
    author: "Joseph Goldstein",
    title: "Balanced Compassion",
    description:
      "We’re living in challenging times. Try practicing balance, letting you open to the suffering of the world without becoming overwhelmed.",
    duration: "7:00",
    img: "./images/dm4.png",
  },
  {
    id: 5,
    author: "Sharon Salzberg",
    title: "Self-kindness for stress",
    description:
      "Showing self compassion to ourselves in hard times bolsters our resilience, so we can learn from setbacks rather than getting stuck in rumination.",
    duration: "12:09",
    img: "./images/dm5.png",
  },
];

export default function DiscoverMeditations() {
  return (
    <div className="bg-pink-100 px-6 py-10 flex justify-center font-['Roboto']">
      <div className="w-full max-w-2xl space-y-8">
        {/* Title */}
        <h2 className="text-center text-purple-900 font-semibold text-lg">
          Discover popular meditations.
        </h2>

        {/* Meditation Cards */}
        <div className="space-y-6">
          {meditations.map((meditation) => (
            <div
              key={meditation.id}
              className="bg-white rounded-xl shadow flex items-center p-4 space-x-4"
            >
              {/* Image */}
              <img
                src={meditation.img}
                alt={meditation.title}
                className="w-20 h-20 rounded-lg object-cover"
              />

              {/* Text Content */}
              <div className="flex-1 text-left">
                <p className="text-xs text-gray-500">{meditation.author}</p>
                <h3 className="font-semibold text-gray-800">
                  {meditation.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {meditation.description}
                </p>

                {/* Audio Controls */}
                <div className="flex items-center space-x-2 mt-2 text-xs text-gray-600">
                  <button className="bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow">
                    ▶
                  </button>
                  <span>0:00</span>
                  <input type="range" className="flex-1" />
                  <span>{meditation.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:opacity-90">
            Get 14 Days Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
