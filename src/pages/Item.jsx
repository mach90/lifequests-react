import { useParams } from "react-router-dom";
import GLBViewer from "../features/inventory/GLBViewer";
import { items } from "../data/items"; /* !!!!!!!!!!!!! TEMPORARY !!!!!!!!!!!!! */

const itemContainerStyle = "grid grid-flow-col grid-cols-9 grid-rows-12 gap-4 text-white w-full h-full";
const itemViewerStyle = "bg-variant5/50 col-span-6 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemDescriptionCardStyle = "bg-variant5/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemTitleStyle = "bg-variant5 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const itemDescriptionStyle = "p-8";

function Item() {
    const { itemId } = useParams();

    const item = items.find(item => item.id === itemId);

    return (
        <div className={itemContainerStyle}>
            <div className={itemViewerStyle}>
                <h2 className={itemTitleStyle}>Viewer</h2>
                {item?.model && <GLBViewer modelUrl={`/3d/${item.model}.glb`} />}
            </div>
            <div className={itemDescriptionCardStyle}>
                <h2 className={itemTitleStyle}>Description</h2>
                <p className={itemDescriptionStyle}>{item?.description}</p>
            </div>
        </div>
    );
};

export default Item;
