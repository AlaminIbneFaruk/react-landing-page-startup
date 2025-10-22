import heroImg from "/illustration.png";
import paypal from "/paypal.png";
import google from "/google.png";
import dropdown from "/Dropbox_logo_2017.png";

const Hero = () => {
  return (
    <div className="bg-[#fffcf7]">
      <div className="hero max-w-7xl mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroImg}
            className="w-full lg:max-w-1/2 rounded-lg shadow-2xl"
          />
          <div className="flex flex-col justify-center ml-0 lg:ml-16">
            <h1 className="text-3xl lg:text-5xl font-bold lg:mr-20">
              Ultimate support system for leading agencies
            </h1>
            <p className="py-6 lg:text-base text-sm">
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="input input-md p-4 placeholder:text-gray-500"
              />
              <button className="btn bg-amber-400 text-yellow-50 ">
                Get Started
              </button>
            </div>
            <div className="flex items-center gap-8 py-8">
              <span className="text-[#606e80]">Sponsored by</span>
              <img src={paypal} alt="" className="h-4 w-auto" />
              <img src={google} alt="" className="h-4 w-auto" />
              <img src={dropdown} alt="" className="h-4 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
