import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
    const sortBySelectStyle = "bg-transparent hover:bg-main3 cursor-pointer px-1 rounded-sm text-main4 font-bold w-max appearance-none text-right uppercase";
    const sortByOptionStyle = "bg-main2 px-1 rounded-sm text-main4 uppercase font-medium";

    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";

    function handleChange(e) {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    };

    return (
        <select options={options} value={sortBy} onChange={handleChange} className={sortBySelectStyle}>
            {options.map(opt => <option key={opt.value} value={opt.value} className={sortByOptionStyle}>{opt.label}</option>)}
        </select>
    );
};

export default SortBy;