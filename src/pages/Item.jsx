import { useParams } from "react-router-dom";
import { items } from "../data/items"; /* !!!!!!!!!!!!! TEMPORARY !!!!!!!!!!!!! */
import GLBViewer from "../features/inventory/GLBViewer";
import AppViewer from "../features/inventory/AppViewer";
import BookViewer from "../features/inventory/BookViewer";
import DocumentViewer from "../features/inventory/DocumentViewer";

const itemContainerStyle = "grid grid-flow-col grid-cols-9 grid-rows-12 gap-4 text-white w-full h-full";
const item3DViewerStyle = "bg-variant5/50 col-span-6 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemAppViewerStyle = "bg-variant5/50 col-span-9 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemBookViewerStyle = "bg-variant5/50 col-span-9 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemDocViewerStyle = "bg-variant5/50 col-span-9 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemDescriptionCardStyle = "bg-variant5/50 col-span-3 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant5";
const itemTitleStyle = "bg-variant5 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";
const itemDescriptionStyle = "p-8";

function Item() {
    const { itemId } = useParams();

    const item = items.find(item => item.id === itemId);

    return (
        <div className={itemContainerStyle}>
            {item?.model && <div className={item3DViewerStyle}>
                <h2 className={itemTitleStyle}>3D Viewer</h2>
                <GLBViewer modelUrl={`/3d/${item.model}.glb`} />
            </div>}
            {item?.type === "app" && <div className={itemAppViewerStyle}>
                <h2 className={itemTitleStyle}>App Viewer</h2>
                <AppViewer />
            </div>}
            {item?.type === "book" && <div className={itemBookViewerStyle}>
                <h2 className={itemTitleStyle}>Book Viewer</h2>
                <BookViewer />
            </div>}
            {item?.type === "doc" && <div className={itemDocViewerStyle}>
                <h2 className={itemTitleStyle}>Document Viewer</h2>
                <DocumentViewer />
            </div>}

            {item?.model && <div className={itemDescriptionCardStyle}>
                <h2 className={itemTitleStyle}>Description</h2>
                <p className={itemDescriptionStyle}>{item?.description}</p>
            </div>}
        </div>
    );
};

export default Item;
