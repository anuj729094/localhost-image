import './App.css'
import { MdOutlineVerified } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { CiLink } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import krunk from './assets/krunk.png'

function App() {
  const arr = ["Strap - Long", "Color", "Size", "Brand", "Material"]
  return (
    <div className='maincon fixed w-full h-full  sm:flex sm:justify-center sm:items-center sm:py-4 '>
      <div className='innercon overflow-y-auto bg-white   w-full  h-full sm:w-[24rem]  rounded-xl xl:h-[35rem] p-2'>
      <div className=''>
        <div className=" header rounded-tl-xl rounded-tr-xl sticky top-0 z-10 flex justify-between items-end text-blue-500 px-3 bg-blue-100 py-3 text-lg">
          <div className=" assistantprofile flex items-center gap-2">
            <div className=' relative'>
            <div className='relative  rounded-full w-12 h-12 bg-white flex '>
              <img src="https://s3-alpha-sig.figma.com/img/6baa/a9c9/7cbb691d0bf8e4efbb09d8e91c2e986c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVKRkgBouutMMUdNZ4ueKNPi9bMhMMLnISqKPW-dU~MBc42xjue~8j9hjcAqiIuzuss-XINFsTsBr3j3uYZDwiAg15nW1A6AFCj0dZFYt30YWmdEiODBg3FC3k~HdvMl18054D9LgeKrHAXqWUv4HmMsAIgytLrj7gdFK4vxRO1lXauNiVREtHHOM8PW768rYkYpoTkZc-excULb67QdJIr3rcTV-G4jUKPQjo5j9HDZr-fdphQ8APPByY75NO7uCpCwD9oZbGkJmKs6vuvoljm6Xyg7V0bDIoqte8kAnPTya7nVvumDK2an5YZcLGJtCwajrUFoTlmHjTu2gFSmBA__" alt="" className=' absolute top-0 left-[-13px] max-w-max w-16 h-16' />
             
            </div>
              <span className=' absolute w-3 h-3 bg-green-400 rounded-full bottom-0 right-0 z-20'></span>
            </div>
            <div className="desc ">
              <h2 className='flex items-center gap-2 font-semibold '>
                Timpu
                <MdOutlineVerified className=' text-yellow-500 bg-yellow-200 rounded-full' />
              </h2>
              <p>Chat assistant</p>
            </div>
          </div>
          <div className="status flex items-center gap-1 font-semibold mb-2 ">
            <div className="activity bg-green-400 w-2 h-2 rounded-full">

            </div>
            <p>Online</p>
          </div>
        </div>
        <div className="chatsection bg-white px-3 py-9 overflow-y-auto">
          <ul className=' flex flex-col gap-5'>
            <li>
              <p className='first  w-[70%] py-3 rounded-2xl pl-3 pr-1'>Hii Sam! I am your personal shopping assistant, how can i help you today ?</p>
              <span className=' text-sm ml-2'>
                4:45 PM
              </span>
            </li>
            <li className='  flex items-end flex-col'>
              <p className=' bg-[#DCF7C5] w-[80%] py-3 rounded-2xl pl-3 pr-1'>I am looking for a hand bag, with long strap</p>
              <span className=' text-sm mr-2'>
                4:46 PM
              </span>
            </li>
            <li>
              <h3 className=' text-gray-500 text-lg'>Popular tags for handbag</h3>
              <div className=' relative'>
                <div id="tags" className="listoftags flex gap-2 text-center overflow-x-auto my-3  ">
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2'>Clutch</div>
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2  min-w-[8rem]'>Fabric Lining</div>
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2'>Baggit</div>
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2'>Clutch</div>
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2'>Clutch</div>
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2'>Baggit</div>
                  <div className=' rounded border-2 font-semibold  border-blue-400 bg-blue-100 text-blue-500 px-2 py-2'>Clutch</div>
                  <button onClick={() =>
                    document.getElementById("tags").scrollTo({
                      top: 0,
                      left: 2000,
                      behavior: "smooth",
                    })
                  } className=' cursor-pointer sticky right-0 bg-white flex justify-center items-center px-3 text-2xl'><IoIosArrowForward className=' text-blue-500' />
                  </button>
                </div>
              </div>
              <div className="w-[17rem] text-sm bag bg-blue-100 mt-5 flex flex-col gap-3 rounded-2xl px-3 py-3">
                <div className="box bg-white flex gap-2 items-center px-2 py-2 rounded-2xl h-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz29b4JJuK12mXWAXEyrNvDItaPV64iommew&s" alt="" className=' w-[5rem] rounded' />
                  <div className="description flex flex-col gap-2">
                    <h4 className=' flex items-center font-semibold gap-4'>Bags on Timpu    <MdOutlineVerified className=' text-yellow-500 bg-yellow-200 rounded-full' /></h4>
                    <p className=' text-gray-500 flex items-center gap-5'>1123 products
                      <IoIosArrowForward />
                    </p>
                  </div>
                </div>
                <p className=' '>or set filter and help us choose the best bag for you.</p>
              </div>
              <span className=' text-sm ml-2'>
                4:48 PM
              </span>

            </li>
            <li>
              <div className="filters flex justify-between text-lg text-gray-400">
                <p>Select Filters</p>
                <p className=' font-semibold flex gap-1 items-center'><IoFilterOutline />Filter</p>
              </div>
              <div className="listofilters mt-3">
                <ul className=' flex gap-1 flex-wrap'>
                  {
                    arr.map((filter, index) => <li className='text-center flex gap-1 text-lg' key={index} style={filter === "Strap - Long" ? { border: "2px solid rgb(96 165 250)", color: "rgb(96 165 250)" } : {color:"gray"}}>{filter} <IoCloseOutline className=' text-2xl'/></li>)
                  }
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="sticky rounded-bl-xl rounded-br-xl   bottom-0 messagebox bg-blue-100 py-3 px-3">
          <div className='flex  gap-1'>
            <div className="input  flex rounded justify-between items-center w-full bg-white pl-4 pr-2 py-2">
              <input type="text" placeholder='Type your message' className=' bg-transparent outline-none' />
              <CiLink className=' text-2xl' />
            </div>
            <button className=' text-2xl px-4 rounded-lg bg-blue-500 font-semibold text-white'>
              <IoIosArrowForward />
            </button>
          </div>
          <div className=' flex justify-center text-lg items-center gap-1'>
            <p className=' text-gray-400   text-center mt-3'>Powered by <span className=' font-bold text-gray-500'>krunk.ai</span></p>
            <img src={krunk} alt="" className=' w-5 h-5 mt-3' />
          </div>
        </div>
      </div>
      </div>
     
    </div>

  )
}

export default App
