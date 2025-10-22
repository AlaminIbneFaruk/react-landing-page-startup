import { FaCheck, FaWindowClose } from "react-icons/fa";

const Plans = () => {
  return (
    <section className="bg-[#F9FAFB] py-24 px-6 text-center min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F1D2B] mb-2">
        What deal suit you perfect
      </h2>
      <p className="text-gray-500 mb-10">Meet our pricing plan</p>
      <div>
        <span>Monthly Plan</span>
        <button className="mb-12 inline-flex items-center">
          <input
            type="checkbox"
            value="Annual Plan"
            className="toggle bg-orange-500 border border-white rounded-full shadow-sm"
          />
        </button>
        <span>Annual Plan</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-sm text-left p-10 border border-gray-100">
          <h3 className="text-lg font-semibold text-[#1F1D2B] mb-2">
            Startup Pack
          </h3>
          <p className="text-2xl font-bold text-[#FBB03B] mb-1">$25.99/mo</p>
          <p className="text-gray-400 mb-6">
            For the startup team who work with new come data stack
          </p>
          <hr className="border-gray-200 mb-6" />
          <ul className="space-y-4 text-gray-700 text-sm">
            <li><FaCheck/> Ultimate access to all course, exercises and assessments</li>
            <li>
              <FaCheck/>
              Free access for all kind of exercise corrections with downloads
            </li>
            <li>
              <FaCheck/>
              Total assessment corrections with free download access system
            </li>
            <li className="opacity-50">
              <FaWindowClose/>
              Unlimited download of courses on the mobile app contents
            </li>
          </ul>
          <hr className="border-gray-200 mt-6 mb-6" />
          <button className="btn bg-[#FBB03B] text-black border-none hover:bg-[#ffb947] w-full">
            Start Free Trial
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md w-full max-w-sm text-left p-10 border border-gray-100">
          <h3 className="text-lg font-semibold text-[#1F1D2B] mb-2">
            Premium Pack
          </h3>
          <p className="text-2xl font-bold text-[#FBB03B] mb-1">$49.99/mo</p>
          <p className="text-gray-400 mb-6">
            For the Pro users who work with modern data stack
          </p>
          <hr className="border-gray-200 mb-6" />
          <ul className="space-y-4 text-gray-700 text-sm">
            <li><FaCheck/> Ultimate access to all course, exercises and assessments</li>
            <li>
              <FaCheck/>
              Free access for all kind of exercise corrections with downloads
            </li>
            <li>
              <FaCheck/>
              Total assessment corrections with free download access system
            </li>
            <li>
              <FaCheck/>
               Unlimited download of courses on the mobile app contents</li>
          </ul>
          <hr className="border-gray-200 mt-6 mb-6" />
          <button className="btn bg-[#FBB03B] text-black border-none hover:bg-[#ffb947] w-full">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
