

const cardArray = [
    { title: "Education", img: "/assets/lab-icon.png", desc: "Majoring in Biomedical Engineering in the University of California, Berkeley and currently working on her bachelors! Considering working on her masters and should!", alt: "An Icon representing medical engineering!" },
    { title: "UNO Champion", img: "/assets/uno-trophy.jpg", desc: "She is the current owner of the Uno Champion of the world trophy! Until next time we play!", alt: "The greatest uno trophy of all time!" },
    { title: "Fun Times", img: "/assets/winnerVanessa.png", desc: "Despite not playing games as much as I, she beat me in a hot wheels racing game in an arcade!", alt: "Vanessa's winning picture wearing a crown!" },
    { title: "Hard Working", img: "/assets/SefeBearLogo.jpg", desc: "While getting her education in a University, she is working with her community to provide a safe environments on university campus!", alt: "The logo of Safe Bears for safe walks!" }]

//Insert a render image prop to make all images consistent
const CardFacts = () => {
    console.log(cardArray);
    return (
        <div className="grid lg:grid-cols-2 place-items-center gap-8 justify-stretch object-contain">
            {cardArray.map((cards, index) => (
                <div key={index} className="flex flex-col items-center border border-gray-700 shadow-md rounded-lg shadow-sm md:flex-row max-w-[20rem] md:max-w-xl hover:bg-gray-100 dark:bg-[#F3F4F6] dark:text-black text-black">
                    <img className="object-contain w-auto h-60 rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg" src={cards.img} alt={cards.alt} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">{cards.title}</h5>
                        <p className="mb-3 font-normal ">{cards.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardFacts