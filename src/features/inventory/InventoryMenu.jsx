import InventoryLink from "./InventoryLink";
import { items } from "../../data/items";
import CardMenu from "../../ui/CardMenu";
import { BsBackpack4Fill } from "react-icons/bs";

const guildsMenuContainerStyle = "col-span-3 row-span-full";
// const contractsListStyle = "overflow-scroll flex flex-col gap-2 justify-start items-center flex-col w-full p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-variant6 [&::-webkit-scrollbar-thumb]:hover:bg-variant6 [&::-webkit-scrollbar:horizontal]:hidden";
const guildsListStyle = "overflow-hidden flex flex-col gap-2 justify-start items-center flex-col w-full p-4";

function GuildsMenu() {
    return (
        <div className={guildsMenuContainerStyle}>
            <CardMenu title="Inventory" icon={BsBackpack4Fill} sort="Inventory" filter="Inventory" pagination={true}>
                {/* <div>Filter/Sort + Search</div> */}
                <div className={guildsListStyle}>
                    {items.map(item => <InventoryLink key={item.id} itemId={item.id} itemName={item.name} itemType={item.type} itemQty={item.quantity} />)}
                </div>
            </CardMenu>
        </div>
    );
};

export default GuildsMenu;
