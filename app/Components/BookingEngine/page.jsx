"use client";

import React, { useState } from "react";

import CustomCalendar from "./CustomCalendar";
import DoubleCalendar from "./DoubleCalender";
function Page() {
 

  

  return (
    <div className="">
      <div className="p-6 flex flex-col space-y-4 bg-opacity-55">
        <form action="
        ">
          <div className=" space-x-3">

          <input type="text " placeholder="Hotel"  className=" p-2 rounded-lg "  />
              <input type="text" placeholder="City"  className=" p-2 rounded-lg " />
          </div>

        </form>

       <div className=" block lg:hidden">

        <CustomCalendar/>
       </div>
<div className=" hidden lg:block">

       <DoubleCalendar />
</div>

       
      </div>
    </div>
  );
}

export default Page;
