import React, { useRef, useState } from 'react'
import Crosshair from "@/content/Animations/Crosshair/Crosshair";
import { useRouter } from 'next/navigation';


function EntryPoint() {
      const router = useRouter(); // Initialize router for redirection
    
    const containerRef = useRef(null);
    const [linkText, setLinkText] = useState('Aim.. aand..')
    const [color, setColor] = useState('#ffffff');
    const [targeted, setTargeted] = useState(false);

    return (
        <>
            <div id='EntryPoint'>
                <div ref={containerRef} className="demo-container overflow-hidden min-h-screen relative">
                    <Crosshair containerRef={targeted ? null : containerRef} color={color} />

                    <div className='flex flex-col justify-center items-center h-screen'>
                        <button onClick={() => router.push("/pages/Dashboard")} className='hover:text-cyan-500 duration-300 text-center font-bold text-9xl' href="https://github.com/DavidHDev/react-bits"
                            onMouseEnter={() => setLinkText('Dashboard!!!')}
                            onMouseLeave={() => setLinkText('Now  aaim..')}
                        >
                            {linkText}
                        </button>
                        <p className="relative top-6 text-3xl text-[#7e7e7e]">Click to use this Tool</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EntryPoint