export default function Location() {
  return (
    <div className="cactus  bg-fixed p-8  bg-no-repeat justify-center bg-cover bg-center flex flex-col items-center">
      <div className="flex flex-col flex-wrap gap-4 items-center justify-center align-center">
        <h3 className="text-center ">Ivy Hall</h3>
        <img
          src="/ivy-garden.jpg"
          alt="Ivy Hall"
          className=" rounded-lg shadow-lg max-w-[800px] w-full h-auto"
        />

        <div className="flex flex-col items-center align-center justify-end">
          <h5 className="josefin text-center mt-4">
            127 South St. Mary's Street, San Antonio, Texas
          </h5>
          <h3 className="text-[24px] py-2 text-center text-pretty">
            Sunday, May 5, 2025
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
