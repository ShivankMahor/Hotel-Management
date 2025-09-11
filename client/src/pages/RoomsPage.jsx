import { useState, useMemo } from 'react';
import { FaFilter, FaSort } from 'react-icons/fa';
import FilterSidebar from '../components/filters/FilterSidebar';
import { useLocation } from 'react-router-dom';
import RoomCard from '../components/RoomsCard';

const RoomsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('price-low');
  
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [filters, setFilters] = useState({
    location: params.get('location'),
    checkIn: params.get('checkIn'),
    checkOut: params.get('checkOut'),
    guests: params.get('guests'),
    priceRange: [0, 1000],
    roomTypes: [],
    amenities: [],
  });

  // Mock rooms data
  const allRooms = [
    {
      id: '1',
      hotel_id: 'hotel-1',
      room_type: 'Standard',
      capacity: 2,
      price_per_night: 199,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee'],
      image_url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comfortable standard room with essential amenities for a pleasant stay.',
      room_number: '201'
    },
    {
      id: '2',
      hotel_id: 'hotel-1',
      room_type: 'Deluxe',
      capacity: 2,
      price_per_night: 299,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool'],
      image_url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious deluxe room with stunning city views and modern amenities.',
      room_number: '301'
    },
    {
      id: '3',
      hotel_id: 'hotel-1',
      room_type: 'Suite',
      capacity: 4,
      price_per_night: 449,
      status: 'Booked',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool', 'Restaurant', 'Spa'],
      image_url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spacious suite perfect for families with separate living area.',
      room_number: '401'
    },
    {
      id: '4',
      hotel_id: 'hotel-1',
      room_type: 'Family',
      capacity: 6,
      price_per_night: 399,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool', 'Restaurant'],
      image_url: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large family room with multiple beds and child-friendly amenities.',
      room_number: '101'
    },
    {
      id: '5',
      hotel_id: 'hotel-1',
      room_type: 'Presidential',
      capacity: 8,
      price_per_night: 699,
      status: 'Available',
      amenities: ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool', 'Restaurant', 'Spa', 'Gym', 'Parking'],
      image_url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ultimate luxury with panoramic views and premium services.',
      room_number: '501'
    },
    {
      id: '6',
      hotel_id: 'hotel-1',
      room_type: 'Standard',
      capacity: 2,
      price_per_night: 189,
      status: 'Maintenance',
      amenities: ['Wi-Fi', 'TV', 'AC'],
      image_url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cozy standard room ideal for business travelers.',
      room_number: '205'
    },
  ];

  function onBookRoom(roomId){
    console.log("Booking Id: ",roomId)
  }

  console.log("Filters: ", filters)
  const filteredAndSortedRooms = useMemo(() => {
    let filtered = allRooms.filter((room) => {
      // Price range filter
      if (room.price_per_night < filters.priceRange[0] || room.price_per_night > filters.priceRange[1]) {
        return false;
      }

      // Room type filter
      if (filters.roomTypes.length > 0 && !filters.roomTypes.includes(room.room_type)) {
        return false;
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity => 
          room.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });

    // Sort rooms
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price_per_night - b.price_per_night);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price_per_night - a.price_per_night);
        break;
      case 'capacity':
        filtered.sort((a, b) => b.capacity - a.capacity);
        break;
      case 'type':
        filtered.sort((a, b) => a.room_type.localeCompare(b.room_type));
        break;
      default:
        break;
    }

    return filtered;
  }, [allRooms, filters, sortBy]);

  const handleFiltersChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
            Our Rooms & Suites
          </h1>
          <p className="text-[var(--color-muted)] text-lg">
            Find the perfect accommodation for your stay
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center space-x-2 bg-[var(--color-surface)] px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <FaFilter className="h-4 w-4 text-[var(--color-primary)]" />
                <span className="text-[var(--color-text)]">Filters</span>
              </button>

              {/* Results Count */}
              <p className="text-[var(--color-muted)]">
                {filteredAndSortedRooms.length} room{filteredAndSortedRooms.length !== 1 ? 's' : ''} found
              </p>

              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <FaSort className="h-4 w-4 text-[var(--color-muted)]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[var(--color-surface)] text-[var(--color-text)] border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="capacity">Capacity</option>
                  <option value="type">Room Type</option>
                </select>
              </div>
            </div>

            {/* Rooms Grid */}
            {filteredAndSortedRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAndSortedRooms.map((room) => (
                  <RoomCard key={room.id} room={room} onBookNow={onBookRoom} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-[var(--color-surface)] rounded-xl">
                <p className="text-[var(--color-muted)] text-lg mb-4">
                  No rooms found matching your criteria
                </p>
                <button
                  onClick={() => setFilters({
                    location: '',
                    checkIn: null,
                    checkOut: null,
                    guests: 1,
                    priceRange: [0, 1000],
                    roomTypes: [],
                    amenities: [],
                  })}
                  className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination (placeholder) */}
            {filteredAndSortedRooms.length > 9 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-[var(--color-primary)] text-white rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-colors">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;