import { useSearchParams } from "react-router-dom";

const filterRowStyle = "flex flex-row gap-1 items-center";

function Filter({filterField, options, color}) {
    const filterButtonStyle = `bg-${color}/50 p-1 rounded-sm text-black cursor-pointer`;
    const filterButtonActiveStyle = `bg-${color} p-1 rounded-sm text-black cursor-pointer`;

    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(filterField, value);
        if(searchParams.get("page")) searchParams.set("page", 1);
        setSearchParams(searchParams);
    }

    return (
        <div className={filterRowStyle}>
            {options.map(opt =>
                <button
                    key={opt.value}
                    onClick={() => handleClick(opt.value)}
                    className={opt.value === currentFilter ? filterButtonActiveStyle : filterButtonStyle}
                >
                    {opt.label}
                </button>
            )}
        </div>
    );
};

export default Filter;
