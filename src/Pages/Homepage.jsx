import { React, useState } from "react";
import { User, Users } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "JansiMerry", role: "Clinical Director / Psychologist", image: "./images/h-team1.png" },
  { name: "Rizza", role: "Psychologist", image: "./images/h-team2.png" },
  { name: "John Smith", role: "Clinical Director / Psychologist", image: "./images/h-team3.png" },
  { name: "Brady John", role: "Psychologist", image: "./images/h-team4.png" },
  { name: "Mary Joseph", role: "Therapist",image: "./images/h-team2.png" },
  { name: "David Lee", role: "Child Psychologist", image: "./images/h-team1.png" },
  { name: "Sophia Kim", role: "Clinical Counselor", image: "./images/h-team4.png" },
  { name: "Liam Brown", role: "Psychologist",  image: "./images/h-team3.png" },
];





const faqs = [
  {
    question: "1. How do I know if I need therapy?",
    answer:
      "If you're feeling overwhelmed, anxious, low, or stuck—or simply want to better understand yourself—therapy can help. You don’t need a crisis to benefit from mental health support.",
  },
  {
    question: "2. What is mental wellness?",
    answer:
      "Mental wellness refers to a state of well-being in which you can cope with the normal stresses of life, work productively, and contribute to your community.",
  },
  {
    question: "3. What types of therapy do you offer?",
    answer:
      "We offer individual therapy, couples therapy, group therapy, and online therapy sessions tailored to your needs.",
  },
  {
    question: "4. What can I expect in a therapy session?",
    answer:
      "In a therapy session, you can expect a safe, confidential, and supportive space to explore your thoughts and feelings with a trained professional.",
  },
];

const Home = () => {
    


    const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const itemsPerPage = 4;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

const services = [
    {
      title: "Individual Therapy",
      type: "card",
      icon: <User className="w-8 h-8 text-gray-700" />,
    },
    {
      title: "Image1",
      type: "image",
      img: "./images/individual.jpg", // replace with real image
    },
    {
      title: "Couples Therapy",
      type: "card-colored",
      icon: <Users className="w-8 h-8 text-white" />,
    },
    {
      title: "Group Therapy",
      type: "card",
      icon: <Users className="w-10 h-10 text-gray-700" />,
    },
    {
      title: "Image2",
      type: "image",
      img: "./images/group.jpg", // replace with real image
    },
    {
      title: "Family Therapy",
      type:  "card-colored",
      icon: <Users className="w-10 h-10 text-gray-700" />,
    },
    {
      title: "Image3",
      type: "image",
      img: "./images/family.jpg", // replace with real image
    },
    {
      title: "Online Therapy",
      type: "card",
      icon: <User className="w-8 h-8 text-gray-700" />,
    },
  ];


  const articles = [
  {
    id: 1,
    category: "News",
    date: "April 21 2025",
    title: "Therapy Isn’t Just for Crisis—Here’s Why It Matters Every Day",
    image:
      "./images/hnews1.png",
    link: "#",
  },
  {
    id: 2,
    category: "News",
    date: "April 14 2025",
    title: "Can Online Therapy Be as Effective? Here’s What Research Says",
    image:
      "./images/hnews2.png",
    link: "#",
  },
  {
    id: 3,
    category: "News",
    date: "April 02 2025",
    title: "Breaking the Stigma: Why Seeing a Therapist Is a Strength",
    image:
      "./images/hnews3.png",
    link: "#",
  },
];




   const testimonials = [
    {
      name: "John Doe",
      text: "This clinic has truly changed my life. The therapists are professional, kind, and incredibly supportive.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Williams",
      text: "I was nervous at first, but the sessions helped me manage my anxiety and improve my outlook on life.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Brown",
      text: "Highly recommend this clinic! They genuinely care about your well-being and personal growth.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Emily Johnson",
      text: "The therapy sessions gave me clarity, peace, and confidence to face my challenges. Forever grateful.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  


  return (
<div className="font-['Roboto']">

    <section className="relative bg-pink-100 flex justify-center items-center">
      {/* Background Placeholder Image */}
      <img
        src="./images/h1.jpg"
        alt="Meditation"
        className="w-full h-[80vh] object-cover rounded-lg"
      />

      {/* Join Now Button */}
      <div className="absolute bottom-10 right-10">
     <Link to="/therapy">   <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
          Join Now
        </button></Link>
      </div>
    </section>










<div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-800 mb-6">
        What DEE PLUS Stands For
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl items-center">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          {[
            { letter: "M", word: "Mindfulness", desc: "Being aware of the present" },
            { letter: "E", word: "Equanimity", desc: "Calm and balanced emotions" },
            { letter: "D", word: "Discipline", desc: "Consistency in practice" },
            { letter: "I", word: "Inner Peace", desc: "A state of deep tranquility" },
            { letter: "T", word: "Tranquility", desc: "Soothing the restless mind" },
            { letter: "A", word: "Awareness", desc: "Conscious observation without reaction" },
            { letter: "T", word: "Transformation", desc: "Gradual personal growth" },
            { letter: "I", word: "Intention", desc: "Clarity of purpose" },
            { letter: "O", word: "Observation", desc: "Watching thoughts without control" },
            { letter: "N", word: "Now", desc: "Anchoring yourself in the present moment" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <span className="font-bold text-purple-800">{item.letter}</span>
              <div>
                <span className="font-bold text-purple-800">{item.word}</span>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
<div className="flex flex-col items-center text-center space-y-8 w-full">
  {/* Meditation Illustration */}
  <img
    src="./images/h2.jpg"
    alt="Meditation"
    className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain mx-auto"
  />

  {/* Therapy Helps Section */}
  <div>
    <h2 className="text-2xl font-bold text-purple-800 mb-4">
      In Therapy Helps With
    </h2>
    <ul className="text-gray-700 space-y-2 text-lg">
      <li>Reducing stress and anxiety</li>
      <li>Enhancing focus and clarity</li>
      <li>Improving emotional regulation</li>
      <li>Promoting self-awareness</li>
    </ul>
  </div>
</div>

      </div>
    </div>








     
    <div className="w-full bg-pink-100">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="./images/h3.jpg" // replace with your image path
            alt="Team Hands"
            className="rounded-md shadow-md"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-gray-700">Welcome To</p>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
            Private Psychiatry <br /> & Therapy Clinic
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A specialized healthcare facility offering confidential, personalized mental health
            services, including psychiatric evaluations, medication management, and psychotherapy.
            Designed to provide discreet, compassionate care for individuals seeking support for
            emotional, behavioral, or psychological challenges.
          </p>
          <button onClick={() =>
    document.getElementById("our-team").scrollIntoView({ behavior: "smooth" })
  } className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow hover:opacity-90">
            Meet Our Team
          </button>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="bg-cyan-200 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold">1586</h3>
            <p className="text-gray-800">Session Per Year</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">20</h3>
            <p className="text-gray-800">Year Experience</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">5000+</h3>
            <p className="text-gray-800">Successful Therapy</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">18</h3>
            <p className="text-gray-800">Specialist in Our team</p>
          </div>
        </div>
      </div>
    </div>
  







  <div className="bg-pink-100 py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-800 mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-sm border p-4 flex flex-col justify-between 
              ${
                service.type === "card-colored"
                  ? "bg-purple-600 text-white"
                  : "bg-white"
              }`}
          >
            {service.type === "image" ? (
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      service.type === "card-colored"
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a
                    href="#"
                    className={`text-sm ${
                      service.type === "card-colored"
                        ? "text-green-100"
                        : "text-teal-600"
                    }`}
                  >
                 
                  </a>
                  {service.icon}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>






 <div className="bg-pink-100 from-sky-100 to-green-200 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-700">Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-8">
          What Our Clients Says
        </h2>

        {/* Testimonial Content */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 p-2 rounded-full hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="w-full px-6 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full border-4 border-purple-500"
                  />
                  <p className="text-gray-700 italic">
                    "{testimonials[current].text}"
                  </p>
                  <h4 className="font-semibold text-purple-800">
                    {testimonials[current].name}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 p-2 rounded-full hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-8 h-2 rounded-full transition ${
                current === idx ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>





<div id="our-team" className="bg-pink-100 py-10 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-lg">Meet Our Therapist</p>
        <h2 className="text-3xl font-bold text-purple-800">Our Team</h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4"
            >
              {teamMembers
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((member, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-md bg-green-100"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-3 text-center">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-green-200 rounded-full p-3 shadow-md"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-green-200 rounded-full p-3 shadow-md"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-6 rounded-full ${
              index === currentPage ? "bg-purple-600" : "bg-purple-300"
            }`}
          ></span>
        ))}
      </div>
    </div>







 <div className="bg-pink-100 py-14 px-6 md:px-16">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-700">From the Blog</p>
        <h2 className="text-3xl font-bold text-purple-800 mt-2">
          Latest Articles
        </h2>
      </div>

      {/* Article Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-green-100 rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-600">
                {article.category} | {article.date}
              </p>
              <h3 className="text-lg font-semibold mt-2 mb-4">
                “{article.title}”
              </h3>

            
            </div>
          </div>
        ))}
      </div>
    </div>








    <div className="bg-pink-100 py-16 px-6 md:px-24">
      <h2 className="text-center text-2xl font-bold text-purple-800 mb-10">
        FAQs
      </h2>
      <div className="max-w-3xl mx-auto divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-5">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>








    
    </div>
  );
};

export default Home;
