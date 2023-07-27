'use client';

import { Listing } from "@prisma/client";
import { useContext, useState, useEffect } from 'react';
import { ListingsFilter, FilterContext } from "./ListingsFilter";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface ListingPageProps {
    initialItems: Listing[];
}

const ListingPage: React.FC<ListingPageProps> = ({initialItems}) => {

  const [items, setItems] = useState(initialItems)
  
  return (
  <>
<div className="flex flex-row mx-auto max-w-4xl justify-center">
  {items?.map((item) => (
    <div key={item.id} className="">
      <p className="mt-8">{item.make}/{item.model}/{item.coupe_type}</p>
      <h2 className="mt-16 mb-6 font-bold">{item.title}</h2>
      <p className="ml-2 mt-40 absolute text-lg font-semibold text-gray-900 dark:text-orange-1">€{item.price}</p>
      <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1599076311391-28adf17fade5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product Image" />
      <p className="my-6 font-bold">Summary</p>
      <div className="grid grid-cols-3">
        <p className="">Car type: {item.coupe_type}</p>
        {(item.variant) && 
        <p className="">Variant: {item.variant}</p>
        }
        <p className="">Year: {item.year}</p>
        <p className="">Condition: {item.condition}</p>
        <p className="">Fuel: {item.fuel}</p>
        <p className="">Mileage: {item.mileage}</p>
        <p className="">Color: {item.color}</p>
        <p className="">Transmission: {item.transmission}</p>
        <p className="">Number of doors: {item.number_doors}</p>
      </div>
      <div className="">
        <p className="mt-10 mb-4">Description from the seller</p>
        <p className="">{item.body}</p>
        <div className="flex items-center">
          <p className="mr-2 mt-8 text-lg font-semibold text-gray-900 dark:text-gray-900">€{item.price}</p>
            <button className="mt-8 place-self-end">Contact the seller</button>
        </div>
      </div>
    </div>
  ))}
  </div>
  </>
  )
//   return (
//   <>
//   <div className="flex flex-row">
//   {items?.map((item) => (
//     <div key={item.id}className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
//       <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1599076311391-28adf17fade5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product Image" />
//       <div className="p-4">
//         <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{item.title}</h2>
//         <h3 className="mb-2 text-md font-medium dark:text-white text-gray-900">{item.year}, {item.fuel}, {item.mileage}</h3>
//         <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{item.body}</p>
//         <div className="flex items-center">
//           <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">€{item.price}</p>
//         </div>
//       </div>
//     </div>
//   ))}
//   </div>
//   </>
//   )
}

export default ListingPage