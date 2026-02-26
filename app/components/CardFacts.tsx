
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
        <div className=''>
            <div className="flex flex-col items-center border border-gray-700 shadow-md rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-[#F3F4F6] dark:text-black text-black">
                <img className="object-contain w-auto h-60 rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt={alt} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
                    <p className="mb-3 font-normal ">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFacts