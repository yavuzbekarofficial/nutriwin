import React from "react";

function Maps() {
  return (
    <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.551187441589!2d32.48391511539265!3d37.89923887974351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d081f26f6e1f0f%3A0x6d9f57e62a3e9c4d!2sNutriwin%20%C4%B0la%C3%A7%20Kimya!5e0!3m2!1str!2str!4v1678229812345!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
