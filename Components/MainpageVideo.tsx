"use client"

import LiquidEther from "@/components/LiquidEther";
import { VideoPlayer } from "@/components/ui/video-player";

export function MVideo() {
    return (
        <div className={"w-full h-150 bg-indigo-600"}>
            <div style={{ width: '100%', height: 600, position: 'relative' }} suppressHydrationWarning>
                <LiquidEther
                    colors={[ '#FFFFFF', '#FF0000', '#FFFFFF' ]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
                <div className={"absolute top-0 left-0 z-10 flex p-4 w-full h-full"}>
                    <div className={"w-1/2 flex flex-col h-full justify-center items-center p-4"}>
                        <VideoPlayer className="w-full aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-85">
                            <video
                                slot="media"
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                className="w-full h-full"
                                controls
                                suppressHydrationWarning
                            />
                        </VideoPlayer>
                    </div>
                    <div className={"w-1/2 flex flex-col h-full p-10 justify-center items-end text-4xl text-white font-bold"}>آسون و بدون اتلاف وقت زبان یاد بگیر</div>
                </div>
            </div>
        </div>
    )
}