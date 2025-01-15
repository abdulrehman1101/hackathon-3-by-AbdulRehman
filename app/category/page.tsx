"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/componet/ui/Card";
import Sidebar from "../components/Slidebar";
import PickDropForm from "../components/PickDropForm";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-[1440px] mx-auto w-full flex">
      {/* sidebar  */}
      <div className="first w-[25%]">
        <Sidebar />
      </div>

      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
            
            
         {/* Booking Section */}
       <div className="flex flex-col w-[950px] md:flex-row items-center gap-4 mt-8 bg-white p-6 px-10 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="border rounded-md p-2">
                  <option>Select your city</option>
                  <option>Karachi</option>
                  <option>lahore</option>
                  <option>Islamabad</option>
                  <option>Hyderabad</option>
                  <option>Larkana</option>
                  <option>Multan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
                
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className=" border rounded-md p-2">
                <option>Select your city</option>
                  <option>Karachi</option>
                  <option>lahore</option>
                  <option>Islamabad</option>
                  <option>Hyderabad</option>
                  <option>Larkana</option>
                  <option>Multan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>  
        </div>  {/* finish */} 
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  Koenigsegg{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/carp1.png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $99.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  NissanGT - R{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car (1).png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $100.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  Rolls-Royce{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sedan</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/Car (2).png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $96.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Rush{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/carp4.png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $72.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $80.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  CR - V{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/suv (4).png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Terios{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/carp4.png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $74.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  MG ZX Exclusive{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Hatchback</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/carp10.png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $76.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $80.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  NEW MG ZS{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/carp4.png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  MG ZX Excite{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Hatchback</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/carp10.png"} alt="" width={220} height={68} />
                <Image src={"/Spesification.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $74.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                    <button className="bg-[#3563e9] hover:bg-blue-500 p-2 text-white rounded-md">
                       Rent Now
                    </button>
                </Link> 
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] hover:bg-blue-500 px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
