// import { useEffect, useState } from "react";

// import AmenitiesCard from "../components/AmenitiesCard";
// import RoomsCard from "../components/RoomsCard";
// import TestimonialsCard from "../components/TestimonialCards";
// import Navbar from "../components/Navbar";

// export default function LandingPage() {

//   return (
//     <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] flex flex-col">
//       {/* Navbar */}
//       <Navbar/>

//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center text-center px-6 py-16 md:py-24">
//         <h2 className="text-4xl md:text-6xl font-bold mb-4">
//           Welcome to <span className="text-[var(--color-primary)]">HotelEase</span>
//         </h2>
//         <p className="text-lg md:text-xl text-[var(--color-muted)] mb-6 max-w-2xl">
//           Experience comfort, luxury, and convenience in one place. Book your stay with us today.
//         </p>
//         <div className="flex gap-4">
//           <a
//             href="#booking"
//             className="px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:opacity-90"
//           >
//             Book Now
//           </a>
//           <a
//             href="#rooms"
//             className="px-6 py-3 rounded-lg bg-[var(--color-secondary)] text-white font-semibold hover:opacity-90"
//           >
//             Explore Rooms
//           </a>
//         </div>
//       </section>

//       {/* Featured Rooms */}
//       <RoomsCard />

//       {/* Amenities */}
//       <AmenitiesCard />

//       {/* Testimonials */}
//       <TestimonialsCard />

//       {/* Call to Action */}
//       <section id="booking" className="px-6 py-16 text-center">
//         <h3 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h3>
//         <p className="text-[var(--color-muted)] mb-6">
//           Secure your dream vacation today at HotelEase.
//         </p>
//         <a
//           href="/booking"
//           className="px-8 py-4 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:opacity-90"
//         >
//           Book Now
//         </a>
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="text-center py-6 bg-[var(--color-surface)] text-[var(--color-muted)]">
//         © {new Date().getFullYear()} HotelEase. All rights reserved.
//       </footer>
//     </div>
//   );
// }



import { FaWifi, FaCar, FaSwimmingPool, FaUtensils, FaSpa, FaDumbbell, FaConciergeBell, FaShieldAlt } from 'react-icons/fa';
import { MdMeetingRoom, MdRoomService } from 'react-icons/md';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomsCard';
import AmenitiesCard from '../components/common/AmenitiesCard';
import TestimonialCard from '../components/common/TestimonialCards';

export default function LandingPage(){
  
  const featuredRooms= [
    {
      id: '1',
      hotel_id: 'hotel-1',
      room_type: 'Deluxe',
      capacity: 2,
      price_per_night: 299,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool'],
      image_url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious deluxe room with stunning city views and modern amenities.',
      room_number: '301'
    },
    {
      id: '2',
      hotel_id: 'hotel-1',
      room_type: 'Suite',
      capacity: 4,
      price_per_night: 449,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool', 'Restaurant', 'Spa'],
      image_url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious suite perfect for families with separate living area.',
      room_number: '401'
    },
    {
      id: '3',
      hotel_id: 'hotel-1',
      room_type: 'Presidential',
      capacity: 6,
      price_per_night: 699,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool', 'Restaurant', 'Spa', 'Gym'],
      image_url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ultimate luxury with panoramic views and premium services.',
      room_number: '501'
    }
  ];

  const amenities = [
    {
      icon: FaWifi,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the property'
    },
    {
      icon: FaSwimmingPool,
      title: 'Swimming Pool',
      description: 'Outdoor heated pool with poolside service'
    },
    {
      icon: FaUtensils,
      title: 'Fine Dining',
      description: 'World-class restaurants with diverse cuisine options'
    },
    {
      icon: FaSpa,
      title: 'Spa & Wellness',
      description: 'Rejuvenating spa treatments and wellness facilities'
    },
    {
      icon: FaDumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with modern equipment'
    },
    {
      icon: FaCar,
      title: 'Valet Parking',
      description: 'Complimentary valet parking for all guests'
    },
    {
      icon: MdMeetingRoom,
      title: 'Conference Rooms',
      description: 'Professional meeting spaces for business events'
    },
    {
      icon: FaConciergeBell,
      title: '24/7 Concierge',
      description: 'Personal assistance available around the clock'
    }
  ];

  const testimonials = [
    {
      id: '1',
      guest_name: 'Sarah Johnson',
      rating: 5,
      review: 'Absolutely stunning hotel with exceptional service. The staff went above and beyond to make our anniversary special.',
      date: '2024-12-15',
      image_url: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      guest_name: 'Michael Chen',
      rating: 4.5,
      review: 'Great location, beautiful rooms, and excellent amenities. The spa was incredibly relaxing.',
      date: '2024-12-10',
      image_url: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      guest_name: 'Emily Rodriguez',
      rating: 5,
      review: 'Perfect for our family vacation. The kids loved the pool and the staff was so accommodating.',
      date: '2024-12-08',
      image_url: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Luxury at
            <span className="block text-[var(--color-secondary)]">LuxeStay</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover unparalleled comfort and elegance in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-medium">
              Book Your Stay
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition-all text-lg font-medium">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="max-w-7xl mx-auto">
          <SearchBar/>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Featured Rooms
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              Discover our most popular accommodations designed for comfort and luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room}/>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              View All Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              World-Class Amenities
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              Everything you need for a perfect stay, from relaxation to business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <AmenitiesCard
                key={index}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              Read testimonials from our valued guests who experienced the LuxeStay difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
            Ready for Your Perfect Stay?
          </h2>
          <p className="text-[var(--color-muted)] text-lg mb-8 max-w-2xl mx-auto">
            Book now and experience luxury hospitality at its finest. Special rates available for extended stays.
          </p>
          <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-medium">
            Book Now - Best Rates Guaranteed
          </button>
        </div>
      </section>
    </div>
  );
};