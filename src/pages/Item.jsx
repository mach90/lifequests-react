import { useParams } from "react-router-dom";
import { items } from "../data/items"; /* !!!!!!!!!!!!! TEMPORARY !!!!!!!!!!!!! */
import GLBViewer from "../features/inventory/GLBViewer";
import AppViewer from "../features/inventory/AppViewer";
import BookViewer from "../features/inventory/BookViewer";
import DocumentViewer from "../features/inventory/DocumentViewer";
import ImageViewer from "../features/inventory/ImageViewer";
import Card from "../ui/Card";

const itemContainerStyle = "grid grid-flow-col grid-cols-9 grid-rows-12 gap-4 w-full h-full";
const item3DContainerStyle = "col-span-6 row-span-full";
const itemAppContainerStyle = "col-span-9 row-span-full";
const itemBookContainerStyle = "col-span-9 row-span-full";
const itemDocContainerStyle = "col-span-9 row-span-full";
const itemImageContainerStyle = "col-span-9 row-span-full";
const itemDescriptionContainerStyle = "col-span-3 row-span-full";
const itemDescriptionStyle = "p-8";

function Item() {
    const { itemId } = useParams();

    const item = items.find(item => item.id === itemId);

    return (
        <div className={itemContainerStyle}>
            {item?.model && <div className={item3DContainerStyle}>
                <GLBViewer modelUrl={`/3d/${item.model}.glb`} />
            </div>}
            {item?.type === "app" && <div className={itemAppContainerStyle}>
                <AppViewer />
            </div>}
            {item?.type === "book" && <div className={itemBookContainerStyle}>
                <BookViewer />
            </div>}
            {item?.type === "document" && <div className={itemDocContainerStyle}>
                <DocumentViewer />
            </div>}
            {item?.type === "image" && <div className={itemImageContainerStyle}>
                <ImageViewer />
            </div>}
            {item?.model && <div className={itemDescriptionContainerStyle}>
                <Card title="Description">
                    <p className={itemDescriptionStyle}>{item?.description}</p>
                </Card>
            </div>}
        </div>
    );
};

export default Item;
