// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/componet/ui/Card";
// import { Input } from "@/componet/ui/Input";
// import Image from "next/image";
// import Link from "next/link";

// export default function Page() {
//   return (
//     <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
//       <div className="form w-full lg:w-2/3 space-y-4">
//         <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
//           <CardHeader>
//             <CardTitle>Billing Info</CardTitle>
//             <CardDescription className="w-full flex items-center justify-between">
//               <h1>Please enter your billing info</h1>
//               <h1>Step 1 of 4</h1>
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="flex flex-col gap-6">
//             <div className="w-full flex flex-wrap gap-4">
//               <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
//                 <label className="font-bold" htmlFor="name">
//                   Name
//                 </label>
//                 <Input
//                   placeholder="Your Name"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//               <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
//                 <label className="font-bold" htmlFor="num">
//                   Phone Number
//                 </label>
//                 <Input
//                   placeholder="Your Phone Number"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//             </div>
//             <div className="w-full flex flex-wrap gap-4">
//               <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
//                 <label className="font-bold" htmlFor="add">
//                   Address
//                 </label>
//                 <Input
//                   placeholder="Your Address"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//               <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
//                 <label className="font-bold" htmlFor="city">
//                   Town/City
//                 </label>
//                 <Input
//                   placeholder="Your City"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
//           <CardHeader>
//             <CardTitle>Rental Info</CardTitle>
//             <CardDescription className="w-full flex items-center justify-between">
//               <h1>Please select your rental date</h1>
//               <h1>Step 2 of 4</h1>
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="flex flex-col gap-6">
//             <div className="first">
//               <Image
//                 src={"/Pick - Up (1).png"}
//                 alt="Pick Up"
//                 width={92}
//                 height={20}
//               />
//             </div>
//             <div className="sec w-full flex flex-wrap gap-4">
//               <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
//                 <label className="font-bold" htmlFor="add">
//                   Locations
//                 </label>
//                 <select
//                   title="city"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 >
//                   <option value="">Select Your City</option>
//                 </select>
//               </div>
//               <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
//                 <label className="font-bold" htmlFor="city">
//                   Date
//                 </label>
//                 <select
//                   title="cty"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 >
//                   <option value="">Select Your Date</option>
//                 </select>
//               </div>
//             </div>
//             <div className="third w-full">
//               <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
//                 <label className="font-bold" htmlFor="city">
//                   Time
//                 </label>
//                 <select
//                   title="cit"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 >
//                   <option value="">Select Your Time</option>
//                 </select>
//               </div>
//             </div>
//             <div className="fourth">
//               <Image
//                 src={"/Drop - Off (1).png"}
//                 alt="Drop Off"
//                 width={104}
//                 height={20}
//               />
//             </div>
//             <div className="sec w-full flex flex-wrap gap-4">
//               <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
//                 <label className="font-bold" htmlFor="add">
//                   Locations
//                 </label>
//                 <select
//                   title="city"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 >
//                   <option value="">Select Your City</option>
//                 </select>
//               </div>
//               <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
//                 <label className="font-bold" htmlFor="city">
//                   Date
//                 </label>
//                 <select
//                   title="cty"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 >
//                   <option value="">Select Your Date</option>
//                 </select>
//               </div>
//             </div>
//             <div className="third w-full">
//               <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
//                 <label className="font-bold" htmlFor="city">
//                   Time
//                 </label>
//                 <select
//                   title="cit"
//                   className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
//                 >
//                   <option value="">Select Your Time</option>
//                 </select>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around p-6">
//           <CardHeader>
//             <CardTitle>Payment Method</CardTitle>
//             <CardDescription className="w-full flex items-center justify-between">
//               <h1>Please enter your payment method</h1>
//               <h1>Step 3 of 4</h1>
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="flex flex-col gap-6 bg-[#f6f7f9] rounded-xl pt-6">
//             <div className="first flex justify-between">
//               <Image
//                 src={"/Credit Card.png"}
//                 alt="Pick Up"
//                 width={92}
//                 height={20}
//               />
//               <Image src={"/Visa.png"} alt="Visa" width={92} height={20} />
//             </div>
//             <div className="w-full flex flex-wrap gap-4">
//               <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
//                 <label className="font-bold" htmlFor="name">
//                   Card number
//                 </label>
//                 <Input
//                   placeholder="Card number"
//                   className="bg-white px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//               <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
//                 <label className="font-bold" htmlFor="num">
//                   Expration date
//                 </label>
//                 <Input
//                   placeholder="DD/MM/YY"
//                   className="bg-white px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//             </div>
//             <div className="w-full flex flex-wrap gap-4">
//               <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
//                 <label className="font-bold" htmlFor="add">
//                   Card Holder
//                 </label>
//                 <Input
//                   placeholder="Card number"
//                   className="bg-white px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//               <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
//                 <label className="font-bold" htmlFor="city">
//                   CVC
//                 </label>
//                 <Input
//                   placeholder="CVC"
//                   className="bg-white px-8 h-[56px] rounded-xl"
//                 />
//               </div>
//             </div>
//           </CardContent>

//           <div className="flex flex-col gap-4">
//             {/* PayPal */}
//             <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
//               <div className="flex items-center gap-3">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="paypal"
//                   className="h-5 w-5 accent-blue-600 cursor-pointer"
//                 />
//                 <span className="text-lg font-medium">PayPal</span>
//               </div>
//               <Image src={"/PayPal.png"} alt="PayPal" width={100} height={24} />
//             </label>

//             {/* Credit Card */}
//             <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
//               <div className="flex items-center gap-3">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="credit-card"
//                   className="h-5 w-5 accent-blue-600 cursor-pointer"
//                 />
//                 <span className="text-lg font-medium">Bitcoin</span>
//               </div>
//               <Image
//                 src={"/Bitcoin.png"}
//                 alt="Bitcoin"
//                 width={94}
//                 height={20}
//               />
//             </label>
//           </div>
//         </Card>

//         <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
//           <CardHeader>
//             <CardTitle>Confirmation</CardTitle>
//             <CardDescription className="w-full flex items-center justify-between">
//               <h1>
//                 We are getting to the end. Just a few clicks and your rental is
//                 ready
//               </h1>
//               <h1>Step 4 of 4</h1>
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="flex flex-col gap-8">
//             <div className="flex flex-col gap-4">
//               {/* PayPal */}
//               <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="payment"
//                   value="paypal"
//                   className="h-5 w-5 accent-blue-600 cursor-pointer"
//                 />
//                 <span className="text-lg font-medium">
//                   I agree with sending an Marketing and newsletter emails. No
//                   spam, promissed!
//                 </span>
//               </label>

//               {/* Credit Card */}
//               <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="payment"
//                   value="credit-card"
//                   className="h-5 w-5 accent-blue-600 cursor-pointer"
//                 />
//                 <span className="text-lg font-medium">
//                   I agree with our terms and conditions and privacy policy.
//                 </span>
//               </label>
//             </div>
//             <Link href={"/payment"}>
//               <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
//                 Rent Now
//               </button>
//             </Link>

//             <div>
//               <Image
//                 src={"/ic-security.png"}
//                 alt="Safe Data"
//                 width={32}
//                 height={32}
//                 className="mb-3"
//               />
//               <p className="text-lg font-medium">All your data are safe</p>
//               <h1 className="text-sm text-muted-foreground">
//                 We are using the most advanced security to provide you the best
//                 experience ever.
//               </h1>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       <div className="rental-summary w-full lg:w-1/3 lg:ml-8">
//         <Image
//           src={"/Rental Summary.png"}
//           alt="Rental Summary"
//           width={492}
//           height={568}
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// }


'use client'; // Mark this component as client-side only
import { useSearchParams } from "next/navigation";
import Image from 'next/image';
import { Suspense } from 'react';

const Payment = () => {
  const searchParams = useSearchParams();
  
  // Get query parameters
  const name = searchParams.get('name');
  const type = searchParams.get('type');
  const pricePerDay = searchParams.get('pricePerDay');
  const imageUrl = searchParams.get('imageUrl');

  return (
    
    <div className="flex flex-col justify-between gap-8 px-4 py-6 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row gap-2">
        {/* Billing Info Section */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Billing Info</h2>
          <h2 className="text-[#90A3BF]">Please enter your billing info</h2>
          {/* Billing Form */}
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-black mb-1">Name</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Address</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="Your Address"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Town/City</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="City"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Rental Summary Section */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
          <div className="flex items-center gap-4">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name || "Car Image"}
              className="object-cover rounded-md"
              width={80} 
              height={80}
            />
            <div>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-gray-500 text-sm">{type}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-bold">${pricePerDay}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-600">Tax:</p>
              <p className="font-bold">$0.00</p>
            </div>
            <div className="flex">
              <input
                type="text"
                className="w-[295px] h-[40px] bg-[#F6F7F9] rounded-lg rounded-r-none"
                placeholder="Apply promo code"
              />
              <button className="bg-blue-500 w-[90px] rounded-lg h-[40px]">
                Apply Now
              </button>
            </div>
            <div className="flex justify-between mt-4 text-lg font-bold">
              <p className="text-xl">Total Rental Price:</p>
              <p>${pricePerDay}</p>
            </div>
          </div>
          <p className="text-gray-500">
            Overall price includes rental discount
          </p>
        </div>
      </div>

      {/* Rental Info Section */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Rental Info</h2>
        <h2 className='text-[#90A3BF] mb-2'>Please select your rental date</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Pickup Location</label>
              <input
                type="text"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                placeholder="Enter Pickup Location"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Pickup Date</label>
              <input
                type="date"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Return Location</label>
              <input
                type="text"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                placeholder="Enter Return Location"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Return Date</label>
              <input
                type="date"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Payment Method Section */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
          <p className="text-sm text-gray-500">Step 3 of 4</p>
        </div>
        <p className="text-sm text-[#90A3BF] mb-6">Please enter your payment method</p>
        <div className="border p-4 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <span className='mr-1'>
                <Image src="/mark.svg" alt="Mark" width={16} height={16} />
              </span>
              <span className="text-gray-800 font-medium">Credit Card</span>
            </label>
            <div className="flex space-x-2">
              <Image src="/Visa.svg" alt="Visa" width={32} height={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Card Number</label>
              <input
                type="text"
                placeholder="Card number"
                className="w-full h-[56px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Expiration Date</label>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Card Holder</label>
              <input
                type="text"
                placeholder="Card holder"
                className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
            <span className="text-gray-800 font-medium">PayPal</span>
          </label>
          <Image src="/PayPal.svg" alt="PayPal" width={32} height={20} />
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
            <span className="text-gray-800 font-medium">Bitcoin</span>
          </label>
          <Image src="/Bitcoin.svg" alt="Bitcoin" width={32} height={20} />
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-between mt-8">
        <button className="bg-blue-500 hover:to-blue-800 text-white py-3 px-6 rounded-lg">Rent now</button>
      </div>
    </div>
  );
};

// Wrap the Payment component in Suspense
const PaymentPage = () => (
  <Suspense fallback={<div>Loading payment details...</div>}>
    <Payment />
  </Suspense>
);
  
export default PaymentPage;