
import {Navbar} from "@/Components/Navbar";
import TextType from "@/components/TextType";

import Link from "next/link";
import TiltedCard from "@/components/TiltedCard";
export default function Home() {
  return (
    <div className={"min-w-screen min-h-screen h-1200"}>
      <div className="w-full h-fit flex items-center justify-end  bg-[url('/Hero.jpg')] bg-cover bg-center p-10 rounded-b-4xl flex-col">
          <div className={"h-2/10 w-full"}>
              <Navbar/>
          </div>
          <div className={"h-8/10 w-full flex "}>


          <div className="w-1/2 h-full">

          </div>
<div className="w-1/2 h-full ">
    <div className={"h-fit w-full flex justify-end"}>
          <div className="my-10 flex flex-row-reverse items-baseline justify-center gap-1 w-fit" dir="rtl" >
                <span className="font-extrabold text-3xl text-white">
        اف پی او
    </span>
              <span className="font-extrabold text-3xl text-white">
        زبان
    </span>

              <h1 className="Hero-img font-extrabold text-6xl bg-[url('/Back.jpg')]">
                  آموزشگاه
              </h1>
          </div>
          </div>
    <div className="h-fit w-full flex justify-end text-white text-lg font-bold text-end">
        فراتر از کلمات، مسلط به دنیا؛ آموزشگاه زبان اف‌پی‌او. با ما، یادگیری زبان نه یک چالش، که یک تجربه لذت‌بخش و ماندگار است
    </div>
    <div className={"w-full h-fit mt-10 flex justify-end mb-10"}>
    <div className="h-10 w-30  text-white text-lg bg-red-500 rounded-2xl flex justify-center items-center font-bold t">
        تماس با ما
    </div>
    </div>
</div>

      </div>
      </div>
    <div className={"w-full h-full flex items-end flex-col"}>
        <TextType
            text={["دوره ها"]}
            typingSpeed={90}
            pauseDuration={5000}
            showCursor
            cursorCharacter=""
            texts={["", ""]}
            deletingSpeed={50}
            cursorBlinkDuration={0.5} variableSpeed={undefined} onSentenceComplete={undefined}    className={"text-indigo-500 text-3xl mt-10 mr-10 font-bold"}    />
        <div className={"w-full h-90 p-10 overflow-x-scroll flex gap-10 overflow-y-hidden"}>


       <Link href={"/"} className={"w-75 h-75  shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>

            <TiltedCard
                imageSrc="/picture.png"
                altText=""
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}


            />
        </Link>
            <Link href={"/"} className={"w-75 h-75  shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>

                <TiltedCard
                    imageSrc="/picture.png"
                    altText=""
                    captionText=""
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}


                />
            </Link>
            <Link href={"/"} className={"w-75 h-75  shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>

                <TiltedCard
                    imageSrc="/picture.png"
                    altText=""
                    captionText=""
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}


                />
            </Link>
            <Link href={"/"} className={"w-75 h-75  shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>

                <TiltedCard
                    imageSrc="/picture.png"
                    altText=""
                    captionText=""
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}


                />
            </Link>



        </div>
    </div>
      </div>
  );
}