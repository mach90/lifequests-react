const labelStyle = "text-neutral500 uppercase font-bold text-sm flex flex-row justify-between items-center";
const selectStyle = "bg-main2 shadow-inner shadow-main1 p-2 rounded-lg text-neutral0 w-full";

function Select({ inputName, label, value, onChange, disabled, required, options = [] }) {
    return (
        <>
            <label className={labelStyle}>{label}</label>
            <select
                id={inputName}
                name={inputName}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className={selectStyle}
            >
                {options.map((option) => (
                    <option 
                        key={option.value} 
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;