import React, { useEffect } from 'react'
import { SectionWrapper } from "../hoc";
import { award, award2024 } from "../assets";

const Feedbacks = () => {

  const image = [
    award,
    award2024
  ]

  const [images, setImage] = React.useState(image);
  const [loading, setLoading] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='w-full justify-center items-center'>
      <h1 className='text-white text-[50px] font-bold'>Achievements</h1>
      <p className='text-secondary text-lg'>
        I won two awards at Comsense Technologies: <br />
        • <strong>Rookie Award</strong> 🏆 (for being a great newcomer) <br />
        • <strong>Star Performer Award</strong> ⭐ (for doing outstanding work) <br />
        These awards encourage me to keep learning and doing my best!
      </p>

      {/* Image Slider */}
      <div className="relative w-2/3 mx-auto mt-4 overflow-hidden rounded-3xl">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img className='w-full' src={image} alt={`achievement ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          &gt;
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");