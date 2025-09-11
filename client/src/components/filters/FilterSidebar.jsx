import { FaFilter, FaTimes } from 'react-icons/fa';

const FilterSidebar = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
}) => {
  const roomTypes = ['Standard', 'Deluxe', 'Suite', 'Family', 'Presidential'];
  const amenities = ['Wi-Fi', 'TV', 'AC', 'Coffee', 'Pool', 'Restaurant', 'Spa', 'Gym', 'Parking'];

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...filters.priceRange];
    newRange[index] = value;
    onFiltersChange({ priceRange: newRange });
  };

  const handleRoomTypeChange = (roomType, checked) => {
    const newRoomTypes = checked
      ? [...filters.roomTypes, roomType]
      : filters.roomTypes.filter(type => type !== roomType);
    onFiltersChange({ roomTypes: newRoomTypes });
  };

  const handleAmenityChange = (amenity, checked) => {
    const newAmenities = checked
      ? [...filters.amenities, amenity]
      : filters.amenities.filter(a => a !== amenity);
    onFiltersChange({ amenities: newAmenities });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      priceRange: [0, 1000],
      roomTypes: [],
      amenities: [],
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 bg-[var(--color-surface)] shadow-xl lg:shadow-lg z-50 lg:z-0 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <FaFilter className="h-5 w-5 text-[var(--color-primary)]" />
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                Filters
              </h2>
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 hover:bg-[var(--color-background)] rounded-lg transition-colors"
            >
              <FaTimes className="h-5 w-5 text-[var(--color-muted)]" />
            </button>
          </div>

          {/* Clear All Button */}
          <button
            onClick={clearAllFilters}
            className="w-full mb-6 py-2 px-4 border border-[var(--color-muted)]/30 text-[var(--color-muted)] rounded-lg hover:bg-[var(--color-background)] transition-colors text-sm"
          >
            Clear All Filters
          </button>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Price Range (per night)</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[var(--color-muted)] mb-2">
                  Min: ${filters.priceRange[0]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                  className="w-full h-2 bg-[var(--color-background)] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--color-muted)] mb-2">
                  Max: ${filters.priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                  className="w-full h-2 bg-[var(--color-background)] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Room Types */}
          <div className="mb-8">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Room Type</h3>
            <div className="space-y-3">
              {roomTypes.map((roomType) => (
                <label key={roomType} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.roomTypes.includes(roomType)}
                    onChange={(e) => handleRoomTypeChange(roomType, e.target.checked)}
                    className="w-4 h-4 text-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]"
                  />
                  <span className="text-[var(--color-text)] text-sm">{roomType}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Amenities</h3>
            <div className="space-y-3">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => handleAmenityChange(amenity, e.target.checked)}
                    className="w-4 h-4 text-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]"
                  />
                  <span className="text-[var(--color-text)] text-sm">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-[var(--color-text)] mb-4">Availability</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="all"
                  className="w-4 h-4 text-[var(--color-primary)]"
                  defaultChecked
                />
                <span className="text-[var(--color-text)] text-sm">All Rooms</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="availability"
                  value="available"
                  className="w-4 h-4 text-[var(--color-primary)]"
                />
                <span className="text-[var(--color-text)] text-sm">Available Only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;