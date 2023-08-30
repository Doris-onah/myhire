import car from "../../images/car.png";
function HeroSection() {
  return (
    <div class=" md:h-[800px] h-[600px] w-[100%] flex items-center  justify-center ">
      <div class=" md:w-[90%]  md:h-[100%] h-[600px] flex justify-center align-center flex-col md:flex-row md:items-center md:flex md:justify-center  ">
        <div class="hidden md:block text-white h-[300px] md:h-[100%] md:w-[80%] md:flex items-center justify-center">
          <div class="laptop ">
            <h2 class=" text-[15px]">The Car Rental Service You Can Trust</h2>
            <h1 class=" md:text-5xl font-medium  uppercase ">
              LOOKING FOR A FASTER <br /> AND EASIER WAY TO HIRE <br />A
              VEHICLE?
            </h1>
            <p class=" text-[19px] ">
              In 3 min, your ride could be on its way. Our Car <br />
              online booking is designed to meet your <br />
              specific need in no time.
            </p>

            <div class="md:w-[100%] md:h[100%] pt-[60px] ">
              <button class="w-[450px] h-[40px]  bg-white text-black  rounded-[5px]">
                Hire now!
              </button>
            </div>
          </div>
        </div>

        <div class="mob md:hidden block flex justify-center items-center align-center w-[100%]">
          <span class="w-[90%] text-center">
            <h1 class=" md:text-6xl font-bold text-3xl  uppercase text-white">
              FAST AND EASY WAY TO RENT A CAR
            </h1>
            <p class=" text-white  text-[19px] py-[10px] ">
              Our Car Rentals online system <br /> designed to meet your
              specific needs of car rental business owners.
            </p>
          </span>
        </div>

        <div class="hero-text sm:w-[100%] h-[300px] md:h-[100%] flex justify-center md:flex items-center justify-center">
          <img
            src={car}
            class="md:h-[375px] md:w-[687px] h-[186px] w-[306px] "
            alt="car"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
