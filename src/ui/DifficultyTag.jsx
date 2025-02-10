import { FaStar } from "react-icons/fa";

const difficultyTagEasyStyle = "flex flex-row gap-1 text-sm w-max text-neutral0";
const difficultyTagMediumStyle = "flex flex-row gap-1 text-sm w-max text-neutral0";
const difficultyTagHardStyle = "flex flex-row gap-1 text-sm w-max text-neutral0";

function DifficultyTag({difficulty}) {
    return (
        <div>
            {difficulty === "easy" && <div className={difficultyTagEasyStyle}><FaStar /></div>}
            {difficulty === "medium" && <div className={difficultyTagMediumStyle}><FaStar /><FaStar /></div>}
            {difficulty === "hard" && <div className={difficultyTagHardStyle}><FaStar /><FaStar /><FaStar /></div>}
        </div>
    );
};

export default DifficultyTag;
