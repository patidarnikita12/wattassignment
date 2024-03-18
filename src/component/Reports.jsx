import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { MdFileDownload } from "react-icons/md";

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const Reports = () => {
    useEffect(() => {
        const slider = new Glide(".glide-01", {
          type: "carousel",
          focusAt: "center",
          perView: 4,
          // autoplay: 3000,
          animationDuration: 700,
          gap: 24,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount()
    
        return () => {
          slider.destroy()
          
        }
      }, [])
    
      return (
        <>
          <div className="glide-01 relative w-full">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-4">
                <li>
                  <div className="w-48 border rounded-md pb-2 shadow-md">
                    <div className="w-full">
                      <img
                        src="https://cdn.openart.ai/stable_diffusion/142893222c2446f998389dda650b1ff0a2a824ff_2000x2000.webp" 
                        className="m-auto max-h-full w-full max-w-full rounded-md"
                      />
                      <button
                        className="inline-flex h-8 w-8 absolute top-3 items-center justify-center text-black transition duration-300 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                      >
                        <MdFileDownload style={{fontSize:'30px'}}/>
                      </button>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <h2 className="font-semibold">Rashmi Kumari,24</h2>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg">
                        View Report
                      </button>
                    </div>
                  </div>
                </li>          
                <li>
                  <div className="w-48 border rounded-md pb-2 shadow-md">
                    <div className="w-full">
                      <img
                        src="https://cdn.openart.ai/stable_diffusion/142893222c2446f998389dda650b1ff0a2a824ff_2000x2000.webp"
                        className="m-auto max-h-full w-full max-w-full rounded-md"
                      />
                      <button
                        className="inline-flex h-8 w-8 absolute top-3 items-center justify-center text-black transition duration-300 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                      >
                        <MdFileDownload style={{fontSize:'30px'}}/>
                      </button>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <h2 className="font-semibold">Rakesh Kumar,28</h2>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg">
                        View Report
                      </button>
                    </div>
                  </div>
                </li>          
                <li>
                  <div className="w-48 border rounded-md pb-2 shadow-md">
                    <div className="w-full">
                      <img
                        src="https://cdn.openart.ai/stable_diffusion/142893222c2446f998389dda650b1ff0a2a824ff_2000x2000.webp"
                        className="m-auto max-h-full w-full max-w-full rounded-md"
                      />
                      <button
                        className="inline-flex h-8 w-8 absolute top-3 items-center justify-center text-black transition duration-300 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                      >
                        <MdFileDownload style={{fontSize:'30px'}}/>
                      </button>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <h2 className="font-semibold">Rani Devi,44</h2>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg">
                        View Report
                      </button>
                    </div>
                  </div>
                </li>          
                <li>
                  <div className="w-48 border rounded-md pb-2 shadow-md">
                    <div className="w-full">
                      <img
                        src="https://cdn.openart.ai/stable_diffusion/142893222c2446f998389dda650b1ff0a2a824ff_2000x2000.webp"
                        className="m-auto max-h-full w-full max-w-full rounded-md"
                      />
                      <button
                        className="inline-flex h-8 w-8 absolute top-3 items-center justify-center text-black transition duration-300 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                      >
                        <MdFileDownload style={{fontSize:'30px'}}/>
                      </button>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      <h2 className="font-semibold">Kamlesh Sen,4</h2>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-lg">
                        View Report
                      </button>
                    </div>
                  </div>
                </li>          
                   
              </ul>
            </div>
            {/*    <!-- Controls --> */}
            <div
              className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
              data-glide-el="controls"
            >
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-black transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <MdOutlineKeyboardArrowLeft style={{fontSize:'30px'}}/>
              </button>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-black transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <MdOutlineKeyboardArrowRight style={{fontSize:'30px'}}/>
              </button>
            </div>
          </div>
    
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
          {/*<!-- End Carousel with controls inside --> */}
        </>
      )
}

export default Reports;
