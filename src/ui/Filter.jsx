import { useSearchParams } from "react-router-dom";

const filterRowStyle = "flex flex-row justify-center items-center w-full h-max p-1 gap-1 bg-main border-b border-main3";

function Filter({filterField, options}) {
    const filterButtonStyle = "p-1.5 rounded-lg hover:bg-main3 text-main4 font-bold uppercase text-sm cursor-pointer duration-200";
    const filterButtonActiveStyle = "p-1.5 rounded-lg bg-main3 text-neutral0 font-bold uppercase text-sm cursor-pointer duration-200";

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
