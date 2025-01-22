/* //////////////////////////////////////////////////
IMPORT - REACT ROUTER DOM OUTLET
To display child routes
////////////////////////////////////////////////// */
import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";

/* //////////////////////////////////////////////////
IMPORT - UI
////////////////////////////////////////////////// */
import Header from "./Header";
// import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

/* //////////////////////////////////////////////////
APPLAYOUT UI COMPONENT
////////////////////////////////////////////////// */
const appLayoutStyle = "bg-background flex flex-col p-6 gap-6 h-screen max-w-screen";
const appLayoutMainStyle = "bg-container flex-1 overflow-hidden rounded-md";
// const toggleMusicButtonStyle = "fixed bottom-6 left-6 w-10 hover:bg-primary/20 rounded-full transition-colors";
// const toggleMusicIconStyle = "bg-red-600 w-full h-full p-1 rounded-full";

function AppLayout() {
    // const [isMuted, setIsMuted] = useState(false);
    // const [audioElement, setAudioElement] = useState(null);

    // useEffect(() => {
    //     const audio = new Audio('/audio/ambiance.mp3');
    //     audio.loop = true;
    //     audio.volume = 0.3;
    //     setAudioElement(audio);
        
    //     audio.play().catch(error => {
    //         console.log('Audio autoplay failed:', error);
    //     });

    //     return () => {
    //         audio.pause();
    //         audio.src = '';
    //     };
    // }, []);

    // const toggleMute = () => {
    //     if (audioElement) {
    //         audioElement.volume = isMuted ? 0.3 : 0;
    //         setIsMuted(!isMuted);
    //     }
    // };

    return (
        <main className={appLayoutStyle}>
            <Header />
            {/* <button onClick={toggleMute} className={toggleMusicButtonStyle} aria-label={isMuted ? "Unmute" : "Mute"}>
                {isMuted ? <FaVolumeMute className={toggleMusicIconStyle} /> : <FaVolumeUp className={toggleMusicIconStyle} />}
            </button> */}
            <main className={appLayoutMainStyle}>
                <Outlet />
            </main>
        </main>
    );
}

export default AppLayout;