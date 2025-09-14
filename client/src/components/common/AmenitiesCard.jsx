const AmenitiesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[var(--color-surface)] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
      <div className="flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
        <Icon className="h-6 w-6 text-[var(--color-primary)]" />
      </div>
      <h3 className="font-semibold text-lg text-[var(--color-text)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--color-muted)] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AmenitiesCard;