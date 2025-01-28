import React from "react";
import ScratchToReveal from "@/components/ui/scratch-to-reveal";
import ShineBorder from "../ui/shine-border";
import SparklesText from "../ui/sparkles-text";

function ScratchToRevealComponent() {
    const handleComplete = () => {
        // Do Something
    };
    return (
        <>
            <ShineBorder
                className="relative p-2 flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border dark:bg-transparent md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} >
                <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-transparent">
                    <div className="flex gap-3 z-0">
                        <p className="text-8xl">This tool is </p><SparklesText className="z-0 text-8xl text-green-500" text="Free" />
                    </div>
                </div>

            </ShineBorder>
        </>
    )
}

export default ScratchToRevealComponent