export default function Location() {
  return (
    <div className="cactus  bg-fixed p-8  bg-no-repeat justify-center bg-cover bg-center flex flex-col items-center">
      <div className="flex flex-col flex-wrap gap-4 items-center justify-center align-center">
        <h3 className="text-center ">Taos, New Mexico</h3>
        <img
          src="/stakeout-5.jpg"
          alt="Taos, New Mexico"
          className=" rounded-lg shadow-lg"
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
            <div className="text-2xl font-bold mb-0 josefin bg-[var(--accent)] mt-4 text-white px-5 py-2 pt-3 rounded-full">
              Click to RSVP
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
