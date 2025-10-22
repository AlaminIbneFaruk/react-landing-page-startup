

const Testimonials = () => {
  return (
    <div>
      <section className="bg-[#FFF7EC] py-20 px-8 text-center">
        <h2 className="text-2xl font-bold mb-12">What clients say about us</h2>

        {/* DaisyUI carousel with center snapping */}
        <div className="carousel carousel-center p-6 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Minnie Horn",
              text: "I would like to take this opportunity to thank SA Places for the great service rendered to us.",
              username: "@hellominnie",
            },
            {
              name: "Verona Watson",
              text: "I would just like to compliment Estelle Postana. She has been most professional and gone to great lengths to assist me.",
              username: "@verona",
            },
            {
              name: "Cherice Justin",
              text: "Thank you for all your help. Your service was excellent and very FAST.",
              username: "@cherice.me",
            },
            {
              name: "Merryn Manley",
              text: "Many thanks for your kind and efficient service. I have already recommended your services to others.",
              username: "@merrynmanley",
            },
            {
              name: "Paseka Nku",
              text: "I have seldom experienced such efficient help and support like from your team.",
              username: "@paseka.nku",
            },
            {
              name: "Thais Carbajal",
              text: "For our recent trip to SA, I booked accommodation through SA Places. It was quick and professional!",
              username: "@myself.thais",
            },
          ].map((item, i) => (
            <div key={i} className="carousel-item">
              <div className="bg-white p-6 rounded-xl shadow w-80 flex-shrink-0">
                <p className="text-gray-700 mb-4">{item.text}</p>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.username}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
