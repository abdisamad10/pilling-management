import React from 'react'

function Footer() {
  return (
    <div>
        <footer className=" flex flex-col  bg-white w-[1600px] h-[45px] ml-[306px] mb-[20px] shadow-md mt-[800px] ">
        <div className="flex justify-between mx-6 mt-2 ">
            <div className="flex space-x-4">
                <p>Privacy Police</p>

                <p>Terms of Use</p>
            </div>
            <div>
              <p>@ 2023 cawaale ICT</p>
            </div>
        </div>

        </footer>
    </div>
  )
}

export default Footer