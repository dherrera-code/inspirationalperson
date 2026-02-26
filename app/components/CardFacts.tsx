"use client"
import { Card } from 'flowbite-react'
import Image from "next/image";


// Created a prop to shape data for incoming cards!
interface CardInfo {
    title: string;
    desc: string;
    img: string;
    alt: string
}

//Insert a render image prop to make all images consistent
const CardFacts = ({ title, desc, img, alt }: CardInfo) => {
    return (
        <div className='object-contain'>
            <Card className="max-w-sm !sm:w-[500px] dark:bg-[#F3F4F6] text-black shadow-md " imgSrc={img} imgAlt={alt}
            horizontal>
                <h5 className="text-2xl font-bold tracking-tight">{title}</h5>
                <p className="font-normal">{desc}</p>
            </Card>
            {/* <Card className="max-w-sm  dark:bg-[#F3F4F6] text-black shadow-md " 
            horizontal>
                <Image width={200} height={20} src={img} alt={alt}></Image>
                <h5 className="text-2xl font-bold tracking-tight">{title}</h5>
                <p className="font-normal">{desc}</p>
            </Card> */}
            {/* <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-[#F3F4F6] dark:text-black">
                <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt={alt} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
            </div> */}

        </div>
    )
}

export default CardFacts