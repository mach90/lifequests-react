import { NavLink, useSearchParams } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const inventoryLinkStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-transparent hover:border-main4 text-main4 duration-200";
const inventoryLinkActiveStyle = "flex flex-row gap-4 w-full h-10 px-3 py-1.5 bg-main1 rounded-lg items-center justify-between border border-neutral0 text-neutral0 duration-200";
const inventoryLinkItemTypeStyle = "h-4 w-4";
const inventoryLinkNameStyle = "w-full text-sm font-bold";

function InventoryLink({itemId, itemName, itemType, itemQty}) {
    return (
        <NavLink to={`/inventory/item/${itemId}`} className={({ isActive }) => isActive ? inventoryLinkActiveStyle : inventoryLinkStyle}>
            <div className="flex flex-row gap-2 items-center">
                <img src={itemType ? `${serverUrl}/img/items/item-type-${itemType}.png` : `${serverUrl}/img/items/default-type.png`} alt="item type-image" className={inventoryLinkItemTypeStyle} />
                <h2 className={inventoryLinkNameStyle}>{itemName}</h2>
                <p className="text-xs bg-main2 px-1 rounded-sm text-main4 uppercase">{itemType}</p>
            </div>
            <p className="text-base text-main4 font-bold">{itemQty}</p>
        </NavLink>
    );
};

export default InventoryLink;
