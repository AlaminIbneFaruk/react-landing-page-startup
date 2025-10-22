import FeatureImg from "/messenger 1.png";
const PremiumHero = () => {
  return (
    <div>
      <div className="hero bg-base-50 min-h-screen mx-auto max-w-5xl">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <img src={FeatureImg} className="w-full lg:max-w-1/2 rounded-lg" />
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold flex leading-snug">
              <span>
                Meet our premium features that will make you wow &#128558;
              </span>
            </h1>
            <p className="py-6">
              Build an incredible workplace and grow your business with
              Gusto&apos;s all-in-one platform with amazing contents.
            </p>
            <div className="collapse collapse-plus focus-within:bg-base-100 border border-base-300 bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                Organize your project content
              </div>
              <div className="collapse-content text-sm">
                Get your website ads tests delivered at let collect sample from
                the victory of the managments that supplies best design system
                which guidelines ever with multiple features.
              </div>
            </div>
            <div className="collapse collapse-plus focus-within:bg-base-100 border border-base-300 bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Collaborate your multiple team support easily
              </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-plus focus-within:bg-base-100 border border-base-300 bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Build your team's knowledge base system
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumHero;
