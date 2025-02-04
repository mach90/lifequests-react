import { useSearchParams } from "react-router-dom";

function SortBy({ options, color }) {
    const sortBySelectStyle = `bg-${color}/50 p-1 rounded-sm text-black`;
    const sortByOptionStyle = `bg-${color}/50 p-1 rounded-sm text-black`;

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