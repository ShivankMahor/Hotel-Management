import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating ) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="h-4 w-4 text-[var(--color-secondary)]" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="h-4 w-4 text-[var(--color-secondary)]" />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="h-4 w-4 text-[var(--color-muted)]" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-[var(--color-surface)] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      {/* Quote Icon */}
      <div className="flex justify-center mb-4">
        <FaQuoteLeft className="h-6 w-6 text-[var(--color-primary)]/60" />
      </div>

      {/* Review Text */}
      <p className="text-[var(--color-text)] text-center mb-6 leading-relaxed italic">
        "{testimonial.review}"
      </p>

      {/* Rating */}
      <div className="flex justify-center space-x-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Guest Info */}
      <div className="flex items-center justify-center space-x-3">
        {testimonial.image_url && (
          <img
            src={testimonial.image_url}
            alt={testimonial.guest_name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div className="text-center">
          <h4 className="font-semibold text-[var(--color-text)]">
            {testimonial.guest_name}
          </h4>
          <p className="text-[var(--color-muted)] text-sm">
            {new Date(testimonial.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;