import mobitelImage from "../assets/mobitel.jpg";
import qrCodeGuideImage from "../assets/qrcode_guide.jpg";

const HowToUse: React.FC = () => {
  return (
    <>
      <section className="mx-4 my-40 md:mx-20 lg:mx-40 xl:mx-72">
        <h1 className="font-title text-sec relative my-20 text-center text-6xl sm:text-6xl md:text-8xl">
          HOW TO USE
        </h1>
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-12 lg:gap-y-16">
          {/* 1st row: image text */}
          <div className="col-span-1">
            <div className="block overflow-hidden rounded-3xl border border-gray-100 shadow-xl transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={mobitelImage}
                  alt="Mobile Phone"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="text-sec font-title py-3 text-center text-2xl transition duration-200 md:text-left md:text-2xl">
                  Download the app and run the installation
                </h2>
                <p className="text-gen pb-5 text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt laborum dignissimos, quod consequatur autem ratione
                  iure soluta veritatis veniam quia pariatur hic itaque
                  incidunt, impedit eveniet nostrum odit perferendis! Vel!
                </p>
              </div>
            </div>
          </div>

          {/* 2nd row: text image */}
          <div className="col-span-1">
            <div className="block flex-row-reverse overflow-hidden rounded-3xl border border-gray-100 shadow-xl transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={qrCodeGuideImage}
                  alt="Mobile QR Code Scanning Guide"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="text-sec font-title py-3 text-center text-2xl transition duration-200 md:text-left md:text-2xl">
                  Find QR codes at the city's landmarks
                </h2>
                <p className="text-gen pb-5 text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt laborum dignissimos, quod consequatur autem ratione
                  iure soluta veritatis veniam quia pariatur hic itaque
                  incidunt, impedit eveniet nostrum odit perferendis! Vel!
                </p>
              </div>
            </div>
          </div>

          {/* 3rd row: image text */}
          <div className="col-span-1">
            <div className="block overflow-hidden rounded-3xl border border-gray-100 shadow-xl transition duration-300 md:flex">
              <div className="md:w-1/2">
                <img
                  src={mobitelImage}
                  alt="Mobile Phone"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 md:w-1/2 md:p-7">
                <h2 className="text-sec font-title py-3 text-center text-2xl transition duration-200 md:text-left md:text-2xl">
                  Explore the city's landmarks in the application's library
                </h2>
                <p className="text-gen pb-5 text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt laborum dignissimos, quod consequatur autem ratione
                  iure soluta veritatis veniam quia pariatur hic itaque
                  incidunt, impedit eveniet nostrum odit perferendis! Vel!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToUse;
