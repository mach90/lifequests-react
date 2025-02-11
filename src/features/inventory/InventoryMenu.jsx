import InventoryLink from "./InventoryLink";
import { items } from "../../data/items";
import CardMenu from "../../ui/CardMenu";

const guildsMenuContainerStyle = "col-span-3 row-span-full";
const guildsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant5 [&::-webkit-scrollbar-thumb]:hover:bg-variant5 [&::-webkit-scrollbar:horizontal]:hidden";

function GuildsMenu() {
    return (
        <div className={guildsMenuContainerStyle}>
            <CardMenu title="Inventory" sort="Inventory" filter="Inventory" pagination={true}>
                {/* <div>Filter/Sort + Search</div> */}
                <div className={guildsListStyle}>
                    {items.map(item => <InventoryLink key={item.id} itemId={item.id} itemName={item.name} itemType={item.type} itemQty={item.quantity} />)}
                </div>
            </CardMenu>
        </div>
    );
};

export default GuildsMenu;
