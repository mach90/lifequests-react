import { NavLink, useSearchParams } from "react-router-dom";
import { FaFileContract, FaRegBookmark } from "react-icons/fa";

const contractLinkStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const contractLinkActiveStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const contractLinkNameStyle = "w-full text-sm font-bold";
const contractLinkIcon = "";
const contractLinkStatusIconActiveStyle = "text-xs font-bold text-blue1 bg-blue2 p-1 w-24 text-center";
const contractLinkStatusIconFinishStyle = "text-xs font-bold text-green1 bg-green2 p-1 w-24 text-center";

function ContractLink({contractId, name, status}) {
    const [searchParams] = useSearchParams();

    const to = {
        pathname: `/contracts/${contractId}`,
        search: searchParams.toString()
    };

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? contractLinkActiveStyle : contractLinkStyle}>
            <div className={contractLinkIcon}><FaFileContract /></div>
            <h2 className={contractLinkNameStyle}>{name}</h2>
            {status === "active" && <div className={contractLinkStatusIconActiveStyle}>ACTIVE</div>}
            {status === "finished" && <div className={contractLinkStatusIconFinishStyle}>FINISHED</div>}
            <FaRegBookmark />
        </NavLink>
    );
};

export default ContractLink;
