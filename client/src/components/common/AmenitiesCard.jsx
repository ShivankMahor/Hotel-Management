// import { FaWifi, FaShower, FaLandmark } from "react-icons/fa";
// import { MdOutlineFoodBank } from "react-icons/md";

// export default function AmenitiesCard(){

// const Amenities = [
//     {name: "Wi-Fi", icon: <FaWifi />},
//     {name: "Spa % Wellness", icon: <FaShower />},
//     {name: "Restaurant", icon: <MdOutlineFoodBank />},
//     {name: "Conference Hall", icon: <FaLandmark />},
// ]

// return (
//         <section id="services" className="px-6 py-16">
//             <h3 className="text-3xl font-bold text-center mb-10">Amenities & Services</h3>
//             <div className="grid md:grid-cols-4 gap-8 text-center">
//             {Amenities.map((amenity, idx) => (
//                 <div key={idx} className="p-6 rounded-lg bg-[var(--color-surface)] shadow-md hover:scale-105 transition flex flex-col items-center">
//                     <div className="text-4xl mb-3 flex items-center">{amenity.icon}</div>
//                     <h4 className="text-lg font-semibold">{amenity.name}</h4>
//                 </div>
//             ))}
//             </div>
//         </section>
//     )
// }

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