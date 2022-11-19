import React from "react";

const Payload = () => {
  return (
    <div className="relative flex flex-col lg:flex-row h-screen bg-black lg:bg-transparent">
      <video
        className="z-[0] w-full absolute bottom-0 top-0  h-[50vh] lg:h-screen object-left object-cover "
        autoPlay
        loop
        muted
      >
        <source className="w-full absolute" src='https://www.spacex.com/media/Rideshare_Stack_2022.mp4'  />
      </video>
      <div className="m-auto relative py-12 bg-black lg:bg-transparent lg:absolute text-white overflow-hidden lg:text-right text-left top-[30%] lg:left-[70%] lg:top-[20%]  2xl:left-[70%] -translate-x-1/5 px-12 md:px-28 lg:px-40 lg:-translate-x-1/2">
        <h2
          className="text-3xl md:text-5xl lg:text-4xl font-bold pb-4"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          PAYLOAD CONFIGURATIONS
        </h2>
        <p
          className="text-sm xl:text-md"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Book your ride on 15” or 24” ESPA class ports. For larger spacecraft,
          custom configurations and a top slot are available upon request.
          Contact us directly for payloads that are too small for a 15” port.
        </p>
        <table className="mt-4 w-full xl:w-[28rem] ">
          <tbody className="pt-16 text-[15.5px] w-full font-bold ">
            <tr
              className="border-b border-gray-500"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <td className="text-[14px] font-[600]  py-[20px]">
                15" PORT MASS{" "}
              </td>
              <td className="text-right">
                454kg <span className="text-[#868686]">/ 1,000lb</span>
              </td>
            </tr>
            <tr
              className="border-b border-gray-500"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <td className="text-[14px] font-[600]  py-[20px]">
                24" PORT MASS
              </td>
              <td className="text-right">
                830kg <span className="text-[#868686]"> / 1,830lb</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payload;
