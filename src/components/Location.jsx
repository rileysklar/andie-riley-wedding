import { useEffect, useState } from 'react';

export default function Location() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      id="location"
      className="cactus bg-fixed p-8 bg-no-repeat justify-center bg-cover bg-center flex flex-col items-center"
    >
      <div className="flex flex-col flex-wrap gap-4 items-center justify-center align-center">
        <h3 className="text-center">Ivy Hall</h3>
        {isMounted && (
          <img
            src="/ivy-garden.jpg"
            alt="Ivy Hall"
            className="rounded-lg shadow-lg max-w-[800px] w-full h-auto"
          />
        )}

        <div className="flex flex-col items-center align-center justify-end">
          <h5 className="text-center mt-4">
            <a
              href="https://www.google.com/maps/place/Ivy+Hall/@29.4118099,-98.4885783,15z/data=!4m6!3m5!1s0x865c58a6688eafa7:0x97feaaf129b8e708!8m2!3d29.4118099!4d-98.4885783!16s%2Fg%2F11fx8hng6f?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              1127 South St. Mary&apos;s Street, San Antonio, Texas
            </a>
          </h5>
          <h3 className="text-[24px] py-2 text-center text-pretty">
            Sunday, May 4, 2025
          </h3>

          <div className="text-gray-400 bg-gray-700/50 shadow-md my-button mx-auto h-16 w-64 mt-4 pt-[4px] flex justify-center items-center rounded-lg relative overflow-hidden cursor-not-allowed">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              RSVP Now Closed
            </span>
          </div>
          {/* <a href="https://www.theknot.com/us/riley-sklar-and-andie-goc-apr-2025/rsvp">
            <div className="text-white shadow-2xl my-button mx-auto h-16 w-64 mt-4 pt-[4px] flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden">
              Click to RSVP
            </div>
          </a> */}
        </div>
      </div>
      {isMounted && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="rounded-lg overflow-hidden mt-4 shadow-xl">
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/5PEcJOeh5XA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
