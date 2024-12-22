import React from "react"

export const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="/" className="flex justify-center ">
            <img
              src="/images/logoTest.png"
              alt="logo"
              title="app-movies"
              className="w-[200px]"
            />
          </a>
          <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <a href="/" className="text-white hover:text-gray-400">
                Recursos
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="https://api.whatsapp.com/send/?phone=573217866817" target="_blank" className="text-white hover:text-gray-400">
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex  space-x-4 sm:justify-center  ">
            <a
              href="https://www.linkedin.com/in/leonardo-gomez-gomez-62b21023b/"
              target="_blank"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <svg
                className="w-[1rem] h-[1rem] text-white"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://github.com/LeonardoGomezz"
              target="_blank"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <svg
                className="w-[1.25rem] h-[1.25rem] text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.287-.011-1.052-.016-2.064-3.338.726-4.035-1.608-4.035-1.608-.546-1.389-1.333-1.763-1.333-1.763-.972-.663.073-.649.073-.649 1.075.077 1.636 1.104 1.636 1.104.954 1.635 2.507 1.163 3.12.888.097-.692.37-1.163.67-1.432-2.337-.27-4.795-1.166-4.795-5.19 0-1.147.408-2.086 1.08-2.818-.107-.269-.468-.863.043-1.71 0 0 1.069-.343 3.515 1.309 1.02-.285 2.11-.427 3.208-.43 1.098.003 2.188.145 3.208.43 2.446-1.652 3.515-1.309 3.515-1.309.511.848.151 1.44.043 1.71.672.732 1.08 1.671 1.08 2.818 0 4.03-2.46 4.918-4.8 5.188.38.412.73.826.73 1.66 0 1.196-.011 2.16-.011 2.46 0 .318.193.693.797.574C20.562 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-gray-400 ">
              ©<a href="/">Best movies </a>2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
