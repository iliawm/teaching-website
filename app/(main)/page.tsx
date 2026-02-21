
import Navbar from "@/Components/Navbar";
import TextType from "@/components/TextType";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import Antigravity from "@/components/Antigravity";
import Image from "next/image";
import {MdArrowForwardIos} from "react-icons/md";
import {MVideo} from "@/Components/MainpageVideo";

type Product = {
    _id: string
    title: string
    description: string
    image?: string
    price: number
    Category: string[]
}

export  default async function Home() {
    const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' })
    const products = await res.json()

    
    return (
    <div className={"min-w-screen min-h-screen h-fit"}>
      <div className="w-full h-fit flex items-center justify-end  bg-[url('/Hero.jpg')] bg-cover bg-center md:p-10 p-7 rounded-b-4xl flex-col " >
          <div className={"absolute w-full h-full z-30"}>
              <Antigravity
                  count={300}
                  magnetRadius={6}
                  ringRadius={2}
                  waveSpeed={0.4}
                  waveAmplitude={1}
                  particleSize={1.5}
                  lerpSpeed={0.05}
                  color="red"
                  autoAnimate
                  particleVariance={1}
                  rotationSpeed={0}
                  depthFactor={1}
                  pulseSpeed={3}
                  particleShape="capsule"
                  fieldStrength={10}
              />
          </div>

          <div className={"h-2/10 w-full z-50"}>
              <Navbar />
          </div>
          <div className={"h-8/10 w-full flex "}>


          {/*<div className="w-1/2 h-full">*/}
          
          {/*</div>*/}
<div className="w-full h-full ">
    <div className={"h-fit w-full flex justify-end"}>
          <div className="my-10 flex flex-row-reverse items-baseline justify-center gap-1 w-fit" dir="rtl" >
                <span className="font-extrabold text-3xl text-white">
        
    </span>
              <span className="font-extrabold  lg:text-3xl text-white text-2xl">
        زبان
    </span>

              <h1 className="Hero-img font-extrabold md:text-6xl bg-[url('/Back.jpg')] text-5xl ">
                  آموزشگاه
              </h1>
          </div>
          </div>
    <div className="h-fit w-full flex justify-end text-white md:text-lg font-bold text-end ">
        فراتر از کلمات، مسلط به دنیا؛ آموزشگاه زبان اف‌پی‌او. با ما، یادگیری زبان نه یک چالش، که یک تجربه لذت‌بخش و ماندگار است
    </div>
    <div className={"w-full h-fit mt-10 flex justify-end mb-10"}>
    <div className="h-10 w-30  text-white text-lg bg-red-500 rounded-2xl flex justify-center items-center font-bold cursor-pointer z-30">
        تماس با ما
    </div>
    </div>
</div>
      </div>

      </div>
    <div className={"w-full h-fit flex  flex-col Courses text-indigo-500 md:text-2xl text-xl  font-bold"}>
        <div className={"flex justify-between w-full items-center h-full mt-10"}>
            <Link href={"/products"} className={"ml-6"}>مشاهده</Link>

            <TextType
                text={["لیست دوره ها"]}
                typingSpeed={90}
                pauseDuration={5000}
                showCursor
                cursorCharacter=""
                texts={["", ""]}
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                variableSpeed={undefined}
                onSentenceComplete={undefined}
                className={"mr-10 font-bold"}
            />
        </div>

        <div className={"w-full h-140 p-10 overflow-x-scroll flex gap-10 pb-0 overflow-y-hidden items-center "}>

            {products.filter((e: Product) => e.Category.includes("course")).map((e: Product) => (
                <Link key={e._id} href={`/products/${e._id}`} className={"w-75 h-fit shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>
                    <CardContainer className="w-full h-full " containerClassName="py-0">
                        <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full rounded-xl p-6 border">
                            <CardItem translateZ="100" className="w-full h-full">
                                <Image
                                    src={e.image || "/temp.png"}
                                    height={1000}
                                    width={1000}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="product"
                                    priority/>
                            </CardItem>
                            <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white mt-4">
                                {e.title}
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                                {e.description}
                            </CardItem>
                            <div className="flex items-center mt-6 justify-end">
                                <CardItem translateZ={20} className="px-6 py-2 rounded-xl bg-indigo-400 dark:bg-white dark:text-black text-white text-sm font-bold">
                                    <MdArrowForwardIos />
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </Link>
            ))}







        </div>
    </div>
        <div className={"w-full h-fit flex  flex-col Courses text-indigo-500 md:text-2xl text-xl  font-bold"}>
            <div className={"flex justify-between w-full items-center h-full mt-10"}>
                <Link href={"/products"} className={"ml-6"}>مشاهده</Link>

                <TextType
                    text={["لیست کتاب ها"]}
                    typingSpeed={90}
                    pauseDuration={5000}
                    showCursor
                    cursorCharacter=""
                    texts={["", ""]}
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                    variableSpeed={undefined}
                    onSentenceComplete={undefined}
                    className={"mr-10 font-bold"}
                />
            </div>
            <div className={"w-full h-140 p-10 pb-0 overflow-x-scroll flex gap-10 overflow-y-hidden items-center "}>


                {products.filter((e: Product) => e.Category.includes("Book")).map((e: Product) => (
                    <Link key={e._id} href={`/products/${e._id}`} className={"w-75 h-fit shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>
                        <CardContainer className="w-full h-full " containerClassName="py-0">
                            <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full rounded-xl p-6 border">
                                <CardItem translateZ="100" className="w-full h-full">
                                    <Image
                                        src={e.image || "/temp.png"}
                                        height={1000}
                                        width={1000}
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="product"
                                    />
                                </CardItem>
                                <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white mt-4">
                                    {e.title}
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                                    {e.description}
                                </CardItem>
                                <div className="flex items-center mt-6 justify-end">
                                    <CardItem translateZ={20} className="px-6 py-2 rounded-xl bg-indigo-400 dark:bg-white dark:text-black text-white text-sm font-bold">
                                        <MdArrowForwardIos />
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </Link>
                ))}

            </div>
        </div>
        <div className={"w-full h-fit mb-3 "}>
            <MVideo/>
        </div>
      </div>
  );
}