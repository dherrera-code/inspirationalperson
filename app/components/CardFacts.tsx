import { Card } from 'flowbite-react'
import React from 'react'

// Created a prop to shape data for incoming cards!
interface CardInfo {
    title: string;
    desc: string;
    img: string;
    alt: string
}

const CardFacts = ({ title, desc, img, alt }: CardInfo) => {
    return (
        <div>
            <Card className="max-w-sm dark:bg-[#F3F4F6] text-black shadow-md" imgAlt={alt} imgSrc={img} horizontal>
                <h5 className="text-2xl font-bold tracking-tight">
                    {title}
                </h5>
                <p className="font-normal">
                    {desc}
                </p>
            </Card>
        </div>
    )
}

export default CardFacts