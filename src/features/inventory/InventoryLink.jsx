import { NavLink } from "react-router-dom";

const inventoryLinkStyle = "flex flex-row justify-start items-center gap-2 px-2 py-1 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant5/50 border-b-4 border-slate-800";
const inventoryLinkActiveStyle = "flex flex-row justify-start items-center gap-2 px-2 py-1 bg-red-600 w-full rounded-l-full rounded-br-full bg-variant5 border-b-4 border-slate-800";
const inventoryLinkItemTypeStyle ="h-4 w-4";
const inventoryLinkNameStyle ="text-slate-800 font-black uppercase text-sm";

function InventoryLink({itemId, name, itemType}) {
    return (
        <NavLink to={`/inventory/item/${itemId}`} className={({ isActive }) => isActive ? inventoryLinkActiveStyle : inventoryLinkStyle}>
            <img src={itemType ? `http://127.0.0.1:3000/img/items/item-type-${itemType}.png` : "http://127.0.0.1:3000/img/items/default-type.png"} alt="item type-image" className={inventoryLinkItemTypeStyle} />
            <h2 className={inventoryLinkNameStyle}>{name}</h2>
        </NavLink>
    );
};

export default InventoryLink;
