// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/componet/ui/Card";
// import Sidebar from "../components/Slidebar";

// export default function page() {
//   return (
//     <div className="max-w-[1440px] mx-auto w-full flex">
//       <div className=" first w-[25%]">
//         <Sidebar />
//       </div>
//       <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
//         <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
//           <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
//             <div>
//               <Image src={"/View.png"} alt="" width={492} height={360} />
//             </div>
//             <div className=" flex items-center justify-between gap-2 lg:gap-2">
//               <Image src={"/View 1.png"} alt="" width={148} height={124} />
//               <Image src={"/View 2.png"} alt="" width={148} height={124} />
//               <Image src={"/View 3.png"} alt="" width={148} height={124} />
//             </div>
//           </div>
//           <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
//             <Image
//               src={"/Detail Car (1).png"}
//               alt="Detail Car"
//               width={492}
//               height={508}
//               className="w-full h-auto rounded-t-xl object-cover"
//             />

//             <div className="p-4 flex  items-center gap-4">
//               <div className="flex items-center justify-between w-full">
//                 <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
//                   $80.00 /{" "}
//                   <span className="text-gray-500 text-sm lg:text-base">
//                     day $100.00
//                   </span>
//                 </h1>
//               </div>
//               <Link href={"/payment"}>
//                 <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
//                   Rent Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>
//         <section className=" w-full flex items-center justify-center">
//           <Image
//             src={"/Reviews.png"}
//             alt=""
//             width={1010}
//             height={452}
//             className=" hidden md:flex"
//           />
//           <Image
//             src={"/Reviews (1).png"}
//             alt=""
//             width={492}
//             height={384}
//             className=" md:hidden"
//           />
//         </section>
//         <section className="popular w-full flex flex-col gap-5">
//           <div className="first w-full flex items-center justify-between px-10 xl:px-14">
//             <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
//             <Link href={"/category"}>
//               <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
//                 View All
//               </h1>
//             </Link>
//           </div>
//           <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
//             <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//               <CardHeader>
//                 <CardTitle className="w-full flex items-center justify-between">
//                   Koenigsegg{" "}
//                   <Image src={"/heart.png"} alt="" width={20} height={20} />
//                 </CardTitle>
//                 <CardDescription>Sport</CardDescription>
//               </CardHeader>
//               <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//                 <Image src={"/carp1.png"} alt="" width={220} height={68} />
//                 <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//               </CardContent>
//               <CardFooter className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold leading-none tracking-tight">
//                   $99.00/
//                   <span className="text-sm font-medium text-gray-500">day</span>
//                 </p>
//                 <Link href={"/detailPage"}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">
//                     Rent Now
//                   </button>
//                 </Link>
//               </CardFooter>
//             </Card>

//             <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//               <CardHeader>
//                 <CardTitle className="w-full flex items-center justify-between">
//                   NissanGT - R{" "}
//                   <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//                 </CardTitle>
//                 <CardDescription>Sport</CardDescription>
//               </CardHeader>
//               <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//                 <Image src={"/car (1).png"} alt="" width={220} height={68} />
//                 <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//               </CardContent>
//               <CardFooter className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold leading-none tracking-tight">
//                   $80.00/
//                   <span className="text-sm font-medium text-gray-500">day</span>
//                   <br />
//                   <span className="text-sm font-medium text-gray-500 line-through">
//                     $100.00
//                   </span>
//                 </p>
//                 <Link href={"/detailPage"}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">
//                     Rent Now
//                   </button>
//                 </Link>
//               </CardFooter>
//             </Card>

//             <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//               <CardHeader>
//                 <CardTitle className="w-full flex items-center justify-between">
//                   Rolls-Royce{" "}
//                   <Image src={"/heart.png"} alt="" width={20} height={20} />
//                 </CardTitle>
//                 <CardDescription>Sedan</CardDescription>
//               </CardHeader>
//               <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//                 <Image src={"/Car (2).png"} alt="" width={220} height={68} />
//                 <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//               </CardContent>
//               <CardFooter className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold leading-none tracking-tight">
//                   $96.00/
//                   <span className="text-sm font-medium text-gray-500">day</span>
//                 </p>
//                 <Link href={"/detailPage"}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">
//                     Rent Now
//                   </button>
//                 </Link>
//               </CardFooter>
//             </Card>

//             <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//               <CardHeader>
//                 <CardTitle className="w-full flex items-center justify-between">
//                   All New Rush{" "}
//                   <Image src={"/heart.png"} alt="" width={20} height={20} />
//                 </CardTitle>
//                 <CardDescription>SUV</CardDescription>
//               </CardHeader>
//               <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//                 <Image src={"/carp4.png"} alt="" width={220} height={68} />
//                 <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//               </CardContent>
//               <CardFooter className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold leading-none tracking-tight">
//                   $72.00/
//                   <span className="text-sm font-medium text-gray-500">day</span>
//                   <br />
//                   <span className="text-sm font-medium text-gray-500 line-through">
//                     $80.00
//                   </span>
//                 </p>
//                 <Link href={"/detailPage"}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">
//                     Rent Now
//                   </button>
//                 </Link>
//               </CardFooter>
//             </Card>

//             <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//               <CardHeader>
//                 <CardTitle className="w-full flex items-center justify-between">
//                   CR - V{" "}
//                   <Image src={"/heart 2.png"} alt="" width={20} height={20} />
//                 </CardTitle>
//                 <CardDescription>SUV</CardDescription>
//               </CardHeader>
//               <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//                 <Image src={"/suv (4).png"} alt="" width={220} height={68} />
//                 <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//               </CardContent>
//               <CardFooter className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold leading-none tracking-tight">
//                   $80.00/
//                   <span className="text-sm font-medium text-gray-500">day</span>
//                 </p>
//                 <Link href={"/detailPage"}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">
//                     Rent Now
//                   </button>
//                 </Link>
//               </CardFooter>
//             </Card>

//             <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
//               <CardHeader>
//                 <CardTitle className="w-full flex items-center justify-between">
//                   All New Terios{" "}
//                   <Image src={"/heart.png"} alt="" width={20} height={20} />
//                 </CardTitle>
//                 <CardDescription>SUV</CardDescription>
//               </CardHeader>
//               <CardContent className="w-full flex flex-col items-center justify-center gap-4">
//                 <Image src={"/carp4.png"} alt="" width={220} height={68} />
//                 <Image src={"/Spesification.png"} alt="" width={256} height={24} />
//               </CardContent>
//               <CardFooter className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold leading-none tracking-tight">
//                   $74.00/
//                   <span className="text-sm font-medium text-gray-500">day</span>
//                 </p>
//                 <Link href={"/detailPage"}>
//                   <button className="bg-[#3563e9] p-2 text-white rounded-md">
//                     Rent Now
//                   </button>
//                 </Link>
//               </CardFooter>
//             </Card>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client"

import React, { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import type { Car } from "@/app/types"
import { FiSearch } from "react-icons/fi"
import { client } from "@/sanity/lib/client"

const Recomend = () => {
  const [cars, setCars] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true)
      setHasError(false)
      try {
        const query = `*[_type == "car"] | order(pricePerDay asc) {
                    _id,
                    name,
                    "slug": slug.current,
                    brand,
                    type,
                    fuelCapacity,
                    transmission,
                    seatingCapacity,
                    pricePerDay,
                    originalPrice,
                    tags,
                    "imageUrl": image.asset->url
                }`
        const data = await client.fetch(query)
        setCars(data)
      } catch (error) {
        console.error("Failed to fetch cars:", error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCars()
  }, [])

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white">
  <h1 className="text-2xl font-semibold text-gray-800 mb-4">Failed to load cars</h1>
  <p className="text-gray-600 mb-6">
    We encountered a problem while fetching the data. Please try again.
  </p>
  <button
    onClick={() => window.location.reload()}
    className="bg-[#3563E9] text-white px-6 py-2 text-sm font-medium rounded-md border border-[#3563E9] hover:bg-blue-600 hover:border-blue-700 active:bg-blue-700 active:border-blue-800 transition-all duration-200"
  >
    Retry
  </button>
</div>

    
    )
  }

  return (
    <div className="min-h-screen p-4 bg-[#FFFFFF]">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#90A3BF] text-3xl font-bold">Recommendation Cars</h1>
          <Link href="/all-cars" className="text-[#3563E9] font-bold">
            View all
          </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>  
      </div>

      {filteredCars.length === 0 ? (
        <div className="text-center text-gray-500 mt-8"></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {filteredCars.map((car) => (
            <div
            key={car._id}
            className="w-[295px] rounded-lg overflow-hidden shadow-lg bg-lime p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-gray-800 p-4">{car.name}</h2>
              <Image src="/heart.svg" alt="Heart" width={24} height={24} />
            </div>
            <h2 className="text-[#90A3BF] ml-4">{car.brand}</h2>
            <Image
              src={car.imageUrl}
              alt="Car"
              className="object-cover mt-4"
              width={295}
              height={200}
            />
            <div className="p-4">
              <p className="text-[#90A3BF] mb-2">
                Brand: <span className="font-bold text-gray-800">{car.brand}</span>
              </p>
              <p className="text-[#90A3BF] mb-2">
                Transmission:{" "}
                <span className="font-bold text-gray-800">{car.transmission}</span>
              </p>
              <p className="text-[#90A3BF] mb-2">
                Seating Capacity:{" "}
                <span className="font-bold text-gray-800">{car.seatingCapacity}</span>
              </p>
              <p className="text-[#90A3BF] mb-2">
                Fuel Capacity:{" "}
                <span className="font-bold text-gray-800">{car.fuelCapacity}</span>
              </p>
              <p className="text-[#90A3BF] mb-4">
                Tags:{" "}
                <span className="font-bold text-gray-800">{car.tags?.join(", ")}</span>
              </p>
              <div className="flex items-center justify-between mt-4 gap-2">
                <p className="text-lg font-bold text-gray-800">
                  ${car.pricePerDay}/<span className="text-[#90A3BF]">day</span>
                </p>
                <Link href={`/card/${car._id}`}>
                  <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                    Rent now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          ))}
        </div>
      )}
    </div>
  )
}

export default Recomend

