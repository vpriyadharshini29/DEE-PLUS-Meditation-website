import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FamilyTherapy() {
  const location = useLocation();
  const navigate = useNavigate();
  const therapyName = location.state?.therapyName || "Therapy";

  const therapies = [
    {
      title: "Understanding ‘Family Of Origin’ Work in Therapy",
      img: "./images/ft1.png",
      reviewedBy: "Rotary - LCP",
    },
    {
      title: "How structural Family Therapy Works",
     img: "./images/ft2.png",
      reviewedBy: "Camo - MD",
    },
    {
      title: "What to Know About Internal Family System (IFS) Therapy",
     img: "./images/ft3.png",
      reviewedBy: "Rotary - MD",
    },
    {
      title: "What is Filial Therapy?",
      img: "./images/ft4.png",
      reviewedBy: "Rotary - LCP",
    },
    {
      title: "Parent - Child Interaction Therapy",
      img: "./images/ft5.png",
      reviewedBy: "Rotary - LCP",
    },
    {
      title:
        "How to Mentally Prepare for Motherhood, According to Parenting Coach",
      img: "./images/ft6.png",
      reviewedBy: "Rotary - LCP",
    },
  ];

  return (
    <div className="bg-pink-100 text-gray-800 px-6 py-12 font-['Roboto']
    ">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold">{therapyName}</h2>
        <p className="text-gray-700 mt-3">
          Family issues can be one of the biggest mental health stressors in a
          person’s life. Seeking help through {therapyName.toLowerCase()} can
          be an important step toward healing for you and your loved ones.
        </p>
      </div>

      {/* Therapy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {therapies.map((therapy, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col"
          >
            <img
              src={therapy.img}
              alt={therapy.title}
              className="rounded-t-xl w-full h-65 object-cover"
            />

            <div className="flex flex-col flex-grow p-4 text-center">
              <h3 className="font-medium text-gray-800 mb-3 text-sm">
                {therapy.title}
              </h3>
              <button
                onClick={() =>
                  navigate("/getthis", {
                    state: {
                      therapyName,
                      selectedTitle: therapy.title,
                    },
                  })
                }
                className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded-md mb-3"
              >
                I Get This
              </button>
              <p className="text-xs text-gray-500 mt-auto">
                Medically reviewed by{" "}
                <span className="font-medium">{therapy.reviewedBy}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
