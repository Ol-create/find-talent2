import React from 'react'

import airbnb from "../images/Upwork _ images/supported_by/airbnb.svg"
import display_advert from "../images/Upwork _ images/display_home.png";
import microsoft from "../images/Upwork _ images/supported_by/microsoft.svg";
import bissell from "../images/Upwork _ images/supported_by/bissell.svg";
import icon from "../images/google-icon.png"
import enterprise_md from "../images/Upwork _ images/enterprise-md.jpg"
import enterprise_sm from "../images/Upwork _ images/enterprise-sm.jpg"
import get_client_sm from "../images/Upwork _ images/get_client_sm.jpg";
import get_client_lg from "../images/Upwork _ images/get_client_lg.jpg";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1>How work should work</h1>
      <h3>
        Forget the old rules. You can have the best people. Right now. Right
        here.
      </h3>
      <a href="">Get started</a>
      <p>Support by</p>
      <div className="ml-3 flex space-x-3 overflow-hidden">
        <img src={microsoft} alt="microsoft logo" />
        <img src={airbnb} alt="airbnb logo" />
        <img src={bissell} alt="bissell logo" />
      </div>
      <img
        src={display_advert}
        alt="display advert"
        className="mx-auto w-full max-h-96"
      />
      <h2>Up your work game, it’s easy</h2>
      <div className="px-2">
        <div className="flex space-x-3">
          <img src={icon} alt="No cost to join icon" className="w-4 h-4" />
          <div>
            <h3>No cost to join</h3>
            <p className="text-xs">
              Register and browse professionals, explore projects, or even book
              a consultation.
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <img src={icon} alt="No cost to join icon" className="w-4 h-4" />
          <div>
            <h3>Post a job and hire top talent</h3>
            <p className="text-xs">
              Finding talent doesn’t have to be a chore. Post a job or we can
              search for you!
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          <img src={icon} alt="No cost to join icon" className="w-4 h-4" />
          <div>
            <h3>Work with the best—without breaking the bank</h3>
            <p className="text-xs">
              Upwork makes it affordable to up your work and take advantage of
              low transaction rates.
            </p>
          </div>
        </div>
      </div>
      {/* Start of the button */}
      <a
        href=""
        className="block border border-green-300 text-center rounded-full mt-3 h-9 py-1 hover:bg-gray-200"
      >
        Learn hoe to hire
      </a>
      <h2>Browse talent by category</h2>
      <p>
        Looking for work?{" "}
        <a href="" className="text-green-600 underline">
          Browse jobs
        </a>
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-2">
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Development & IT</h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.85/5</span>
            </p>
            <p className="">1853 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">AI Services </h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.8/5 </span>
            </p>
            <p className="">294 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Design & Creative </h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.91/5 </span>
            </p>
            <p className="">968 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Sales & Marketing </h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.77/5 </span>
            </p>
            <p className="">392 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Writing & Translation </h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.92/5 </span>
            </p>
            <p className="">505 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Admin & Customer Support </h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.77/5 </span>
            </p>
            <p className="">508 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-md p-2">
          <h3 className="text-xl">Finance & Accounting </h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.79/5 </span>
            </p>
            <p className="">214 skills</p>
          </div>
        </div>
        <div className="bg-gray-200 mt-2 rounded-md p-2">
          <h3 className="text-xl">Engineering & Architecture</h3>
          <div className="flex space-x-3 items-center">
            <p className="flex items-center">
              <span className="material-icons text-green-600">star</span>
              <span className="">4.85/5 </span>
            </p>
            <p className="">650 skills</p>
          </div>
        </div>
      </div>
      {/* Find talent image  and text*/}
      <div className="grid lg:grid-cols-5 text-white mt-10 ">
        <img className="sm:hidden" src={enterprise_sm} alt="" />
        {/* Text container */}
        <div className="bg-[#1e3e19] lg:col-span-3 pl-7">
          <h3 className="my-7 text-xl">Enterprise Suite</h3>
          <h2 className="text-4xl mb-5 text-[#91E683] text ">
            <span className="text-white text-[1em]">This is how</span> <br />
            good companies <br />
            find good company.
          </h2>
          <p className="text-white pr-24 mb-3">
            Access the top 1% of talent on Upwork, and a full suite of hybrid
            workforce management tools. This is how innovation works now.
          </p>
          <div className="flex space-x-2 mb-2">
            <span className="material-icons text-[#91E683] ">
              design_services
            </span>
            <p className="text-gray-200">
              Access expert talent to fill your skill gaps
            </p>
          </div>
          <div className="flex space-x-2 mb-2">
            <span className="material-icons  text-[#91E683]">
              business_center
            </span>
            <p>Control your workflow: hire, classify and pay your talent</p>
          </div>
          <div className="flex space-x-2 mb-2">
            <span className="material-icons  text-[#91E683]">headset_mic</span>
            <p>Partner with Upwork for end-to-end support</p>
          </div>
          <div className="bg-gray-100 rounded-full text-[#1e3e19] text-lg text-center px-6 py-2 my-5 w-40">
            <a href="">Learn more</a>
          </div>
        </div>
        <img
          className="hidden lg:block col-span-2 overflow-hidden object-none object-center h-full"
          src={enterprise_md}
          alt=""
        />
      </div>
      {/* For Client image and text begins */}
      <div className="relative">
        <img
          className="md:hidden max-w-full"
          src={get_client_sm}
          alt="get client image"
        />
        <img
          className="hidden md:block"
          src={get_client_lg}
          alt="get client image"
        />
        <div className="text-white  absolute top-5 left-5">
          <h3 className="mb-24 text-lg">For clients</h3>
          <h2 className="text-5xl">
            Find talent <br />
            your way
          </h2>
          <p className="mt-5 mb-3">
            Work with the largest network of independent <br /> professionals
            and get things done—from quick <br /> turnarounds to big
            transformations.
          </p>
          <div className="grid md:grid-cols-3 gap-x-3">
            <div className="flex space-x-3 items-end bg-green-700 p-3 pt-5 mb-3 rounded-md">
              <p className="text-xl">
                Post a job <br />
                and hire a pro
              </p>
              <div className="flex ">
                <p className="mr-2">
                  Talent Marketplace<sup>TM</sup>
                </p>
                <span className="material-icons">east</span>
              </div>
            </div>
            {/* button2 start*/}
            <div className="flex space-x-3 items-end bg-green-700 p-3 pt-5 mb-3 rounded-md">
              <p className="text-xl">
                Post a job <br />
                and hire a pro
              </p>
              <div className="flex ">
                <p className="mr-2">
                  Talent Marketplace<sup>TM</sup>
                </p>
                <span className="material-icons">east</span>
              </div>
            </div>
            {/* button3 start */}
            <div className="sm:flex-row flex-col float-right space-x-3 items-end bg-green-700 p-3 pt-5 mb-3 rounded-md ">
              <p className="text-xl">
                Post a job <br />
                and hire a pro
              </p>
              <div className="flex ">
                <p className="mr-2">
                  Talent Marketplace<sup>TM</sup>
                </p>
                <span className="material-icons">east</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
