import InventoryLink from "./InventoryLink";
import { items } from "../../data/items";

const guildsMenuStyle = "bg-variant5/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const guildsListTitleStyle = "bg-variant5 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const guildsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full h-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant5 [&::-webkit-scrollbar-thumb]:hover:bg-variant5 [&::-webkit-scrollbar:horizontal]:hidden";

function GuildsMenu() {
    return (
        <div className={guildsMenuStyle}>
            <h2 className={guildsListTitleStyle}>Inventory</h2>
            <div>Filter/Sort + Search</div>
            <div className={guildsListStyle}>
                {items.map(item => <InventoryLink key={item.id} itemId={item.id} name={item.name} itemType={item.type} />)}
            </div>
        </div>
    );
};

export default GuildsMenu;
