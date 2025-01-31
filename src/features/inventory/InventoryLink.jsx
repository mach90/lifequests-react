import { NavLink } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

const inventoryLinkStyle = "flex flex-row justify-between items-center gap-2 px-4 py-1 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant5/50 border-b-4 border-slate-800";
const inventoryLinkActiveStyle = "flex flex-row justify-between items-center gap-2 px-4 py-1 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant5 border-b-4 border-slate-800";
const inventoryLinkItemTypeStyle ="h-4 w-4";
const inventoryLinkNameStyle ="text-slate-800 font-black uppercase text-sm";

function InventoryLink({itemId, itemName, itemType, itemQty}) {
    return (
        <NavLink to={`/inventory/item/${itemId}`} className={({ isActive }) => isActive ? inventoryLinkActiveStyle : inventoryLinkStyle}>
            <div className="flex flex-row gap-2 items-center">
                <img src={itemType ? `${serverUrl}/img/items/item-type-${itemType}.png` : `${serverUrl}/img/items/default-type.png`} alt="item type-image" className={inventoryLinkItemTypeStyle} />
                <h2 className={inventoryLinkNameStyle}>{itemName}</h2>
                <p className="text-xs bg-slate-800 px-1 rounded-full text-slate-400 uppercase">{itemType}</p>
            </div>
            <p className="text-base text-slate-800 font-bold">{itemQty}</p>
        </NavLink>
    );
};

export default InventoryLink;
