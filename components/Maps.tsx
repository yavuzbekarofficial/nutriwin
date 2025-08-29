import React from "react";

function Maps() {
  return (
    <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2423694771524!2d32.521362376406714!3d37.91556257195028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08f72bdae37bb%3A0x19e8dc5ec1f80bf4!2zTnV0cml3aW4gS2lteWEgxLBsYcOn!5e1!3m2!1str!2str!4v1756122698648!5m2!1str!2str"
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
