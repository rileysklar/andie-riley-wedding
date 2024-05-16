export default function Location() {
  return (
    <div className="pattern  bg-fixed p-8  bg-no-repeat justify-center bg-cover bg-center flex flex-col items-center">
      <div className="flex flex-col flex-wrap gap-4 items-center justify-center align-center">
        <img
          src="/stakeout-5.jpg"
          alt="Taos, New Mexico"
          className=" rounded-lg shadow-lg"
        />

        <div className="flex flex-col items-center align-center justify-end">
          <h1 className="text-center">Taos, New Mexico</h1>
          <h5 className="josefin">101 Stakeout Dr Ranchos de Taos, NM</h5>
          <p className="text-center">April 12, 2025</p>
        </div>
      </div>
    </div>
  );
}
