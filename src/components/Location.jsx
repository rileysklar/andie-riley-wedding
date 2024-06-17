export default function Location() {
  return (
    <div className="cactus  bg-fixed p-8  bg-no-repeat justify-center bg-cover bg-center flex flex-col items-center">
      <div className="flex flex-col flex-wrap gap-4 items-center justify-center align-center">
        <h3 className="text-center ">Taos, New Mexico</h3>
        <img
          src="/stakeout-5.jpg"
          alt="Taos, New Mexico"
          className=" rounded-lg shadow-lg max-w-[800px] w-full h-auto"
        />

        <div className="flex flex-col items-center align-center justify-end">
          <h5 className="josefin text-center mt-4">
            101 Stakeout Dr.<br></br> Ranchos de Taos, NM
          </h5>
          <h3 className="text-[24px] py-2 text-center text-pretty">
            Saturday, April 12, 2025
          </h3>

          {/* <p className="text-center">April 12, 2025</p> */}
          <a href="https://www.theknot.com/us/riley-sklar-and-andie-goc-apr-2025/rsvp">
            <div className=" josefin text-white shadow-2xl my-button mx-auto h-16 w-64 mt-4 pt-[4px] flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
              Click to RSVP
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
