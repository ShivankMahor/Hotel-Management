// export default function RoomsCard() {
//     const rooms = [
//         { 
//             name: "Deluxe Room", 
//             img: "/delux_room_home.png",
//             description: "Elegant room with modern comfort."
//         },
//         { 
//             name: "Suite", 
//             img: "/suite_room_home.png",
//             description: "Luxury stay with premium amenities."
//         },
//         { 
//             name: "Family Room", 
//             img: "/family_room_home.png",
//             description: "Spacious and cozy for families."
//         },
//     ];


//   return (
//     <section id="rooms" className="px-6 py-16 bg-[var(--color-surface)]">
//       <h3 className="text-3xl font-bold text-center mb-10">Our Rooms</h3>
//       <div className="grid md:grid-cols-3 gap-8">
//         {rooms.map((room, idx) => (
//           <div
//             key={idx}
//             className="rounded-lg overflow-hidden shadow-md bg-[var(--color-background)] hover:scale-105 transition"
//           >
//             <div className="h-40 bg-[var(--color-muted)] flex items-center justify-center">
//               <img
//                 src={room.img}
//                 alt={room.name}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <div className="p-4">
//               <h4 className="text-xl font-semibold mb-2">{room.name}</h4>
//               <p className="text-[var(--color-muted)]">{room.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { FaBed, FaUsers, FaWifi, FaTv, FaCoffee, FaSnowflake, FaCar, FaSwimmingPool } from 'react-icons/fa';
import { MdRestaurant, MdSpa, MdFitnessCenter } from 'react-icons/md';

const RoomCard = ({ room, onBookNow }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'text-[var(--color-success)] bg-[var(--color-success)]/10';
      case 'Booked':
        return 'text-[var(--color-error)] bg-[var(--color-error)]/10';
      case 'Maintenance':
        return 'text-[var(--color-muted)] bg-[var(--color-muted)]/10';
      default:
        return 'text-[var(--color-muted)] bg-[var(--color-muted)]/10';
    }
  };

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      'Wi-Fi': <FaWifi className="h-4 w-4" />,
      'TV': <FaTv className="h-4 w-4" />,
      'Coffee': <FaCoffee className="h-4 w-4" />,
      'AC': <FaSnowflake className="h-4 w-4" />,
      'Parking': <FaCar className="h-4 w-4" />,
      'Pool': <FaSwimmingPool className="h-4 w-4" />,
      'Restaurant': <MdRestaurant className="h-4 w-4" />,
      'Spa': <MdSpa className="h-4 w-4" />,
      'Gym': <MdFitnessCenter className="h-4 w-4" />,
    };
    return iconMap[amenity] || <FaCoffee className="h-4 w-4" />;
  };

  return (
    <div className="bg-[var(--color-surface)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={room.image_url}
          alt={`${room.room_type} Room`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(room.status)}`}>
            {room.status}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-[var(--color-surface)]/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[var(--color-primary)] font-bold text-sm">
            ${room.price_per_night}/night
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg text-[var(--color-text)] mb-1">
              {room.room_type} Suite
            </h3>
            <p className="text-[var(--color-muted)] text-sm">
              Room #{room.room_number}
            </p>
          </div>
          <div className="flex items-center space-x-1 text-[var(--color-muted)]">
            <FaUsers className="h-4 w-4" />
            <span className="text-sm">{room.capacity}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="mb-4">
          <p className="text-[var(--color-text)] font-medium text-sm mb-2">Amenities:</p>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 6).map((amenity) => (
              <div
                key={amenity}
                className="flex items-center space-x-1 bg-[var(--color-background)] px-2 py-1 rounded-md"
                title={amenity}
              >
                <span className="text-[var(--color-primary)]">
                  {getAmenityIcon(amenity)}
                </span>
                <span className="text-[var(--color-muted)] text-xs">{amenity}</span>
              </div>
            ))}
            {room.amenities.length > 6 && (
              <div className="flex items-center px-2 py-1 rounded-md bg-[var(--color-background)]">
                <span className="text-[var(--color-muted)] text-xs">
                  +{room.amenities.length - 6} more
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-[var(--color-background)]">
          <div className="flex items-center space-x-1">
            <FaBed className="h-4 w-4 text-[var(--color-muted)]" />
            <span className="text-[var(--color-muted)] text-sm">
              {room.room_type}
            </span>
          </div>
          
          <button
            onClick={() => onBookNow(room.id)}
            disabled={room.status !== 'Available'}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              room.status === 'Available'
                ? 'bg-[var(--color-primary)] text-white hover:opacity-90 hover:scale-105'
                : 'bg-[var(--color-muted)]/20 text-[var(--color-muted)] cursor-not-allowed'
            }`}
          >
            {room.status === 'Available' ? 'Book Now' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;