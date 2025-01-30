import GLBViewer from "../ui/GLBViewer";

const inventoryContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";
const inventoryCardStyle = "bg-variant5/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const inventoryViewerStyle = "bg-variant5/50 col-span-6 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const inventoryTitleStyle = "bg-variant5 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function Inventory() {
    return (
        <div className={inventoryContainerStyle}>
            <div className={inventoryCardStyle}>
                <h2 className={inventoryTitleStyle}>Inventory</h2>
            </div>
            <div className={inventoryViewerStyle}>
                <h2 className={inventoryTitleStyle}>Viewer</h2>
                <GLBViewer modelUrl="3d/gold-hammer.glb"/>
            </div>
            <div className={inventoryCardStyle}>
                <h2 className={inventoryTitleStyle}>Inventory</h2>
            </div>
        </div>
    );
};

export default Inventory;
