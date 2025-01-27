import { FaStar } from "react-icons/fa";

const difficultyTagStyle = "flex flex-row gap-1 text-xs w-max text-white";

function DifficultyTag({difficulty}) {
    return (
        <div>
            {difficulty === "easy" && <div className={difficultyTagStyle}><FaStar /></div>}
            {difficulty === "medium" && <div className={difficultyTagStyle}><FaStar /><FaStar /></div>}
            {difficulty === "difficult" && <div className={difficultyTagStyle}><FaStar /><FaStar /><FaStar /></div>}
        </div>
    );
};

export default DifficultyTag;
