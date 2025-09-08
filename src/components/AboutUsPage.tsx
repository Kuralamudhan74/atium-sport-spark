import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      image: "https://media.istockphoto.com/id/158029634/photo/american-football-players-celebrating-their-victory.jpg?s=612x612&w=0&k=20&c=BleKjiMP_jEN3EfL20O50J35MK-tqIgyYbAkny9tuX0=",
      title: "About Us",
      subtitle: "Dedicated to Football, Committed to You."
    },
    {
      image: "https://www.google.com/imgres?q=sports%20images&imgurl=https%3A%2F%2Fmedia.assettype.com%2Fthequint%252F2025-09-01%252Fbkcyszi1%252Fimage2025-09-01054629780.png%3Fauto%3Dformat%252Ccompress%26fmt%3Dwebp%26width%3D720&imgrefurl=https%3A%2F%2Fwww.thequint.com%2Fsports&docid=L16hMmFKFGv6TM&tbnid=WmV6va2DGR6VRM&vet=12ahUKEwif0t6pt7qPAxUuyjgGHdPnJh0QM3oECC8QAA..i&w=720&h=400&hcb=2&ved=2ahUKEwif0t6pt7qPAxUuyjgGHdPnJh0QM3oECC8QAA",
      title: "Our Passion",
      subtitle: "Building passion, teamwork, and champions for life."
    }
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-transparent absolute w-full z-10">
        <h1 className="text-xl font-bold text-yellow-400">Arenaline</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li>Homepage</li>
          <li className="text-yellow-300">About Us</li>
          <li>Programs</li>
          <li>Contact Us</li>
          <li>Pages</li>
        </ul>
      </nav>

      {/* Hero Section with Slider */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[current].image})`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold">{slides[current].title}</h2>
          <p className="mt-2 text-lg">{slides[current].subtitle}</p>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronLeft size={32} />
        </Button>
        <Button
          variant="ghost"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        >
          <ChevronRight size={32} />
        </Button>

        {/* Wave Divider */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0 C600,120 600,0 1200,120 L1200,0 L0,0 Z"
              fill="#facc15"
            />
            <path
              d="M0,0 C600,60 600,0 1200,60 L1200,0 L0,0 Z"
              fill="#2563eb"
            />
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-yellow-300 text-sm uppercase tracking-wide">
          Who We Are
        </h3>
        <h2 className="text-3xl font-bold mt-2">
          Building passion, teamwork, and champions for life.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          We are committed to nurturing a true love for football by developing
          skills, teamwork, and lifelong champions both on and off the field.
        </p>
      </section>
    </div>
  );
}
