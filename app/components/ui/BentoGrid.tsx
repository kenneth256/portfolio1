'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradient";
import { GlobeDemo } from "./GridGlobe";
import React, { useState } from 'react'; 
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'; 
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    description, 
    id,
     title, 
     titleClassName, 
     spareImg,
      img, 
      imgClassName,  
      className,
      
}: {
    description?: string;
    id?: number;
     title?: string;
     titleClassName?: string;
     spareImg?: string;
      img?: string;
      imgClassName?: string; 
      className?: string;

}) => {
const [copied, setCopied] = useState(false);
const handleCopy = () => {
  navigator.clipboard.writeText("Kennethdavid256@gmail.com");
  setCopied(true)
}

  return (
    <div className={cn("row-span-1 rounded-3xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex overflow-hidden flex-col space-y-4",
        className
      )
    }
style={{
    background: 'rgb(2,0,36)',
backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(89,89,122,1) 35%, rgba(0,212,255,1) 100%)'
}}

    >
          <div className={`${id === 6 && 'flex justify-center'} h-full`}> 
            <div className="absolute w-full h-full">
                {img && (
                    <img src={img} alt={img} 
                    className={cn(imgClassName, 'object-cover, object-center')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
                { spareImg && (
                        <img src={spareImg} alt={spareImg} className={"object-cover, object-center  w-full h-full " }/>
                    )
                }

            </div>
            {
                id === 6 && (
                    <BackgroundGradientAnimation >
                    </BackgroundGradientAnimation>
                )
            }
            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
               <div className="font-sans font-extralight text-[#c1c2d3]  text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-xl lg:text-3xl max-w-96 z-10 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
            
            {id ===2 && (<GlobeDemo />)}
            {id ===3 && (<div className="flex gap-1 w-fit lg:gap-5 absolute -right-2 lg:-right-8">
              <div className="flex flex-col gap-2 lg:gap-8">
                {['React.js', 'Next.js','typescript'].map(item => (
                  <span key={item} className="py-1 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
                <span className="text-center rounded-lg py-4 px-3 bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-2 lg:gap-8">
                {['React.js', 'Next.js','typescript'].map(item => (
                  <span key={item} className="py-1 lg:py4 lg:px-3 px-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
                <span className="text-center rounded-lg py-4 px-3 bg-[#10132E]" />
              </div>
            </div>)}
            {
              id === 6 && (<div className="mt-5 relative ">
                <div className={`absolute  -bottom-5 right-0`}>
                  <Lottie options={{
                    loop: copied,
                    autoplay:  copied,
                    animationData,
                    rendererSettings:{
                      preserveAspectRatio: 'xMidYMid slice',
                    }
                  }} />
                </div>
                <MagicButton title={copied ? "Email Copied" : "Copy Email"} icon={<IoCopyOutline />} position='left' otherClasses="!bg-[#161a31]" handleClick={handleCopy}/>
              </div>)
            }
        </div>
    </div>
    </div>
  );
};
