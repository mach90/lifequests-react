import LoadingSpinner from "../ui/LoadingSpinner";

const buttonSubmitStyle = "flex flex-row gap-2 justify-center items-center bg-green1 text-neutral0 hover:bg-green2 cursor-pointer w-max rounded-sm px-3 py-2 font-bold text-base uppercase transition-linear duration-200 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:text-neutral0/75";
const buttonValidationStyle = "flex flex-row gap-2 justify-center items-center bg-green1 text-neutral0 hover:bg-green2 cursor-pointer w-max rounded-sm px-3 py-2 font-bold text-base uppercase transition-linear duration-200 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:text-neutral0/75";
const buttonDangerStyle = "flex flex-row gap-2 justify-center items-center bg-red1 text-neutral0 hover:bg-red2 cursor-pointer w-max rounded-sm px-3 py-2 font-bold text-base uppercase transition-linear duration-200 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:text-neutral0/75";
const buttonSmallStyle = "bg-main3 px-2 py-1 rounded-sm text-neutral0 hover:bg-main4 font-medium uppercase cursor-pointer duration-200";

function Button({ type, label, onClick, disabled, isPending }) {
    if(type === "submit") return (
        <button 
            type={type} 
            disabled={disabled}
            className={buttonSubmitStyle}
        >
            {isPending && <LoadingSpinner size="sm" />}{label}
        </button>
    )
    if(type === "validation") return (
        <button 
            type={type} 
            onClick={onClick}
            disabled={disabled}
            className={buttonValidationStyle}
        >
            {isPending && <LoadingSpinner size="sm" />}{label}
        </button>
    )
    if(type === "danger") return (
        <button 
            type={type} 
            onClick={onClick}
            disabled={disabled}
            className={buttonDangerStyle}
        >
            {isPending && <LoadingSpinner size="sm" />}{label}
        </button>
    )
    if(type === "small") return (
        <button 
            type={type} 
            onClick={onClick} 
            className={buttonSmallStyle}
        >
            {isPending && <LoadingSpinner size="xs" />}{label}
        </button>
    )
}

export default Button;