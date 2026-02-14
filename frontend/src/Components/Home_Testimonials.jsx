import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const animationStyles = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .testimonial-enter-right { animation: slideInRight 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
  .testimonial-enter-left { animation: slideInLeft 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
`;

function Home_Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0)
  // track animation direction so we can apply enter-from-left or enter-from-right
  const [direction, setDirection] = useState('next')

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "USA",
      rating: 5,
      text: "My trip to Sri Lanka was absolutely incredible! The guides were knowledgeable, the experiences were authentic, and every moment felt special. I can't wait to return!",
      image: "👩‍🦰",
      tour: "Cultural Heritage Tour"
    },
    {
      id: 2,
      name: "Marco Rossi",
      location: "Italy",
      rating: 5,
      text: "The tea plantation experience was magical. Walking through the misty hills and tasting fresh Ceylon tea with the workers was unforgettable. Highly recommended!",
      image: "👨‍🦱",
      tour: "Tea & Nature Escape"
    },
    {
      id: 3,
      name: "Priya Patel",
      location: "India",
      rating: 4,
      text: "Wonderful wildlife safari! We spotted leopards and elephants. The naturalist guide was fantastic and really knowledgeable about conservation efforts.",
      image: "👩‍🦳",
      tour: "Wildlife Safari Adventure"
    },
    {
      id: 4,
      name: "James Chen",
      location: "Singapore",
      rating: 5,
      text: "Beach escape was the perfect mix of adventure and relaxation. Surfing lessons were fun, and the sunset yoga was incredibly peaceful. Best vacation ever!",
      image: "👨",
      tour: "Coastal Beach Escape"
    },
  ]

  const handlePrev = () => {
    setDirection('prev')
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection('next')
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev')
    setCurrentIndex(index)
  }

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next')
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [])


  // touch swipe handling
  const [touchStartX, setTouchStartX] = useState(null)
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }
  const handleTouchEnd = (e) => {
    if (touchStartX == null) return
    const dx = e.changedTouches[0].clientX - touchStartX
    const threshold = 40
    if (dx > threshold) {
      // swipe right -> previous
      setDirection('prev')
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    } else if (dx < -threshold) {
      // swipe left -> next
      setDirection('next')
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }
    setTouchStartX(null)
  }

  return (
    <section className="flex h-fit md:h-screen grow w-full items-center justify-center bg-slate-100">
      <style>{animationStyles}</style>
      <div className=" w-full pt-10 pb-5 px-5 flex flex-col h-full items-center justify-center gap-5 xl:px-0 lg:max-w-7xl ">

        {/* Header */}
        <div className="flex flex-col  w-full items-start justify-between">
          <h2 className=" font-volkhov text-2xl lg:text-4xl! font-semibold  text-blue-900 uppercase mb-4">
            Traveler Stories
          </h2>
          <p className="text-sm lg:text-lg! text-gray-600 font-montserrat font-medium">
            Hear from adventurers who've experienced the magic of Sri Lanka
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
            ))}
            <span className=" text-xs md:text-sm text-gray-600 ml-2">4.9/5 from 500+ reviews</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative w-full " onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 min-h-80 flex flex-col justify-between">
            {/* Content (animated, fixed height to prevent layout shift) */}
            <div style={{ minHeight: 140, position: 'relative', contain: 'layout' }}>
              <div
                key={currentIndex}
                className={`${direction === 'next' ? 'testimonial-enter-right' : 'testimonial-enter-left'} absolute inset-0 w-full`}
                style={{ willChange: 'transform, opacity', contain: 'content' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-xs leading-5 sm:text-lg! sm:leading-6!  md:text-xl!  md:leading-8! mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
            {/* Author Info (static) */}
            <div className="flex items-center gap-4 border-t pt-6">
              <div className="text-4xl md:text-5xl!">{testimonials[currentIndex].image}</div>
              <div className="flex-1">
                <h3 className="text-sm md:text-lg font-bold text-blue-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {testimonials[currentIndex].location}
                </p>
                <p className="text-xs md:text-sm text-blue-600 font-semibold mt-1">
                  {testimonials[currentIndex].tour}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8" style={{ willChange: 'contents' }}>
            <button
              onClick={handlePrev}
              className="shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2" style={{ willChange: 'contents' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  style={{
                    width: index === currentIndex ? '32px' : '8px',
                    flexShrink: 0
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-gray-600">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home_Testimonials