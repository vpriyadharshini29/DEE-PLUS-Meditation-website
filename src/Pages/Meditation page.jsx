import React from "react";
import { useNavigate } from "react-router-dom";

export default function MeditationPage() {
  const navigate = useNavigate();

  const handleFreeTrial = () => {
    navigate("/discover");
  };

  return (
    <div className="bg-pink-100 px-6 py-12 flex justify-center font-['Roboto']">
      <div className="w-full max-w-2xl space-y-8 text-center">
        {/* Header */}
        <h1 className="text-lg font-semibold text-purple-900">Meditation</h1>

        {/* Top Free Trial */}
        <button
          onClick={handleFreeTrial}
          className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:opacity-90"
        >
          Start Your Free Trial
        </button>

        {/* Featured Meditation */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-700 italic">Featured Meditation</p>
          <h2 className="text-lg font-semibold text-purple-900 mb-4">
            Sleep Meditation
          </h2>

          <div className="flex items-center space-x-6">
            {/* Image with Audio Overlay */}
            <div className="relative bg-purple-200 rounded-xl overflow-hidden w-64 h-72 shadow">
              <img
                src="./images/med.png"
                alt="Meditation"
                className="w-full h-full object-cover"
              />
              {/* Audio Player */}
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 px-4 py-2">
                <p className="text-sm font-medium text-gray-800">
                  Soothe Anxiety to Sleep
                </p>
                <div className="flex items-center justify-between text-xs text-gray-700">
                  <span>0:00</span>
                  <input type="range" className="w-full mx-2" />
                  <span>30:00</span>
                </div>
              </div>
              {/* Play Button */}
             
            </div>
          </div>
        </div>

        {/* Second Free Trial Button */}
        <button
          onClick={handleFreeTrial}
          className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:opacity-90"
        >
          Start Your Free Trial
        </button>

        {/* Daily Themes */}
        <div className="text-left space-y-3">
          <h3 className="font-semibold text-gray-800">
            Daily Themes (5–10 minutes each)
          </h3>

          <p>
            <span className="font-semibold">Day 1 – Gratitude</span>
            <br />
            Focus on 3 things you’re thankful for. Feel the warmth they bring.
          </p>

          <p>
            <span className="font-semibold">Day 2 – Loving-Kindness</span>
            <br />
            Silently repeat: “May I be happy. May others be happy.”
          </p>

          <p>
            <span className="font-semibold">Day 3 – Present Moment Joy</span>
            <br />
            Mindfully notice small joys—breath, light, sound—with full attention.
          </p>

          <p>
            <span className="font-semibold">Day 4 – Smile Meditation</span>
            <br />
            Gently smile while breathing slowly. Let the feeling of ease spread.
          </p>

          <p>
            <span className="font-semibold">Day 5 – Positive Memories</span>
            <br />
            Recall a joyful moment. Re-experience it with all your senses.
          </p>

          <p>
            <span className="font-semibold">Day 6 – Self-Compassion</span>
            <br />
            Send kindness to yourself. Affirm: “I am enough. I deserve joy.”
          </p>

          <p>
            <span className="font-semibold">Day 7 – Intentional Joy</span>
            <br />
            Visualize a joyful life. Imagine waking up smiling, living freely.
          </p>
        </div>
      </div>
    </div>
  );
}
