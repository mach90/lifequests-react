const labelStyle = "text-neutral500 uppercase font-bold text-sm flex flex-row justify-between items-center";
const inputTextStyle = "bg-main2 shadow-inner shadow-main1 p-2 rounded-lg text-neutral0 w-full";
const inputTextareaStyle = "bg-main2 shadow-inner shadow-main1 p-2 rounded-lg text-neutral0 w-full h-full";
const inputFileStyle = "bg-main2 shadow-inner shadow-main1 p-2 rounded-lg text-neutral500";
const inputCheckboxStyle = "w-4";

function Input({ type, inputName, label, placeholder, autoComplete, value, onChange, disabled, accept, required, minLength, checked }) {
    return (
        <>
            <label className={labelStyle}>{label}</label>
            {type === "text" && <input
                type={type}
                id={inputName}
                name={inputName}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                minLength={minLength}
                className={inputTextStyle}
            />}
            {type === "textarea" && <textarea
                type="text"
                id={inputName}
                name={inputName}
                placeholder={placeholder}
                // value={value}
                // onChange={onChange}
                // disabled={disabled}
                required={required}
                // minLength={minLength}
                className={inputTextareaStyle}
            />}
            {type === "password" && <input
                type={type}
                id={inputName}
                name={inputName}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                minLength={minLength}
                className={inputTextStyle}
            />}
            {type === "email" && <input
                type={type}
                id={inputName}
                name={inputName}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                minLength={minLength}
                className={inputTextStyle}
            />}
            {type === "file" && <input
                type={type}
                id={inputName}
                name={inputName}
                accept={accept}
                onChange={onChange}
                disabled={disabled}
                className={inputFileStyle}
            />}
            {type === "checkbox" && <input
                type={type}
                onChange={onChange}
                checked={checked}
                className={inputCheckboxStyle}
            />}
        </>
    );
};

export default Input;