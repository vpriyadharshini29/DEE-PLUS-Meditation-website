

import React from "react";

export default function AboutDeePlus() {
  return (
<div>


    <div className="bg-pink-100 text-gray-800 px-6 py-12 font-['Roboto']">
      {/* About Section */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-10">About DEE PLUS</h2>

        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
          <img
            src="./images/about1.png"
            alt="Mission"
            className="rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              Our mission is to provide a valuable resource of information and downloads
              to people who want to evolve mentally, emotionally and spiritually, and to
              help people become healthier, happier and more peaceful.
            </p>
          </div>
        </div>

        {/* Who we are */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold">Who we are</h3>
            <p className="text-gray-700 mt-2">
              Think of DEE PLUS as your lifelong guide to better mental health. We’re
              here for you whenever you need us, helping you get through tough times
              and find joy in every day.
            </p>
          </div>
          <img
            src="./images/about2.png"
            alt="Who we are"
            className="rounded-full w-20 h-20 mt-4 md:mt-0"
          />
        </div>

        {/* What we do */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold">What we do</h3>
            <p className="text-gray-700 mt-2">
              Through evidence-based meditation and mindfulness tools, mental health
              coaching, therapy, psychiatry, DEE PLUS helps you create life-changing
              habits to support your mental health and find a healthier, happier you.
            </p>
          </div>
          <img
            src="./images/about3.png"
            alt="What we do"
            className="rounded-full w-20 h-20 mt-4 md:mt-0"
          />
        </div>

        {/* How we do it */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold">How we do it</h3>
            <p className="text-gray-700 mt-2">
              Our four values inform our decisions and how we operate day-to-day: put
              members first; bring a beginner’s mind; seek truth, speak truth; embrace
              ownership.
            </p>
          </div>
          <img
            src="./images/about4.png"
            alt="How we do it"
            className="rounded-full w-20 h-20 mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>





 {/* Teachers Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Meet DEE PLUS Teachers
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* Teacher 1 */}
          <div className="bg-white border rounded-xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="./images/aboutt1.png"
              alt="Kessonga"
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border"
            />
            <h3 className="font-semibold text-lg">Kessonga</h3>
            <p className="text-sm text-gray-600 mt-2">
              Meditation teacher, therapist, and acupuncturist who has worked with
              populations of all ages and backgrounds.
            </p>
          </div>

          {/* Teacher 2 */}
          <div className="bg-white border rounded-xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="./images/aboutt2.png"
              alt="Andy"
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border"
            />
            <h3 className="font-semibold text-lg">Andy</h3>
            <p className="text-sm text-gray-600 mt-2">
              A former Buddhist monk and co-founder of DEE PLUS, Andy has guided
              people in meditation for over 20 years.
            </p>
          </div>

          {/* Teacher 3 */}
          <div className="bg-white border rounded-xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="./images/aboutt3.png"
              alt="Eve"
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border"
            />
            <h3 className="font-semibold text-lg">Eve</h3>
            <p className="text-sm text-gray-600 mt-2">
              Eve has been with DEE PLUS since the beginning, teaching mindfulness
              and overseeing educational curriculum.
            </p>
          </div>

          {/* Teacher 4 */}
          <div className="bg-white border rounded-xl shadow hover:shadow-lg transition p-6 text-center">
            <img
              src="./images/aboutt4.png"
              alt="Dora"
              className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border"
            />
            <h3 className="font-semibold text-lg">Dora</h3>
            <p className="text-sm text-gray-600 mt-2">
              Meditation teacher and former psychiatric nurse who is passionate about
              the positive powers of connection and community.
            </p>
          </div>
        </div>
        </div>



</div>
  );
}

