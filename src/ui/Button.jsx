import LoadingSpinner from "../ui/LoadingSpinner";

const buttonSubmitStyle = "flex flex-row gap-2 justify-center items-center bg-green1 text-neutral0 hover:bg-green2 cursor-pointer w-max rounded-sm px-3 py-2 font-bold text-base uppercase transition-linear duration-200 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:text-neutral0/75";
const buttonValidationStyle = "flex flex-row gap-2 justify-center items-center bg-green1 text-neutral0 hover:bg-green2 cursor-pointer w-max rounded-sm px-3 py-2 font-bold text-base uppercase transition-linear duration-200 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:text-neutral0/75";
const buttonDangerStyle = "flex flex-row gap-2 justify-center items-center bg-red1 text-neutral0 hover:bg-red2 cursor-pointer w-max rounded-sm px-3 py-2 font-bold text-base uppercase transition-linear duration-200 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:text-neutral0/75";

function Button({ type, label, onClick, disabled, isUpdating }) {
    if(type === "submit") return (
        <button 
            type={type} 
            disabled={disabled}
            className={buttonSubmitStyle}
        >
            {isUpdating && <LoadingSpinner size="sm" />}{label}
        </button>
    )
    if(type === "validation") return (
        <button 
            type={type} 
            onClick={onClick}
            disabled={disabled}
            className={buttonValidationStyle}
        >
            {isUpdating && <LoadingSpinner size="sm" />}{label}
        </button>
    )
    if(type === "danger") return (
        <button 
            type={type} 
            onClick={onClick}
            disabled={disabled}
            className={buttonDangerStyle}
        >
            {isUpdating && <LoadingSpinner size="sm" />}{label}
        </button>
    )
    if(type === "small") return (
        <button 
            type={type} 
            onClick={onClick} 
            className="bg-amber-400 px-2 py-1 rounded-sm text-amber-950 hover:bg-amber-300 cursor-pointer">
            {label}
        </button>
    )
}

export default Button;