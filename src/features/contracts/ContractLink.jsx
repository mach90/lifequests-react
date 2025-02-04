import { FaCheckCircle } from "react-icons/fa";
import { NavLink, useSearchParams } from "react-router-dom";

const contractLinkStyle = "flex flex-row justify-between items-center gap-2 p-2 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant2/50 border-b-4 border-slate-800";
const contractLinkActiveStyle = "flex flex-row justify-between items-center gap-2 p-2 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant2 border-b-4 border-slate-800";
const contractLinkNameStyle ="text-slate-800 font-black uppercase text-base";
const contractLinkStatusIconStyle = "text-stone-300";

function ContractLink({contractId, name, status}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/contracts/${contractId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? contractLinkActiveStyle : contractLinkStyle}>
            <h2 className={contractLinkNameStyle}>{name}</h2>
            {status === "active" ? "" : <div className={contractLinkStatusIconStyle}><FaCheckCircle size={24} /></div>}
        </NavLink>
    );
};

export default ContractLink;
