export default function Confirm({ actionType, resourceName, onConfirm, disabled, onCloseModal }) {
    return (
        <div className="w-full max-w-lg flex flex-col gap-3 rounded-md p-6">
            <h3 className="text-lg text-neutral0 font-semibold">Confirm {resourceName}</h3>
            <p className="text-main4 mb-3">
                This action is permanent and can't be undone.
            </p>
            <div className="flex justify-end gap-3">
                <button 
                    className="px-4 py-2 text-main4 hover:text-neutral0 bg-main3 rounded hover:bg-main4 cursor-pointer"
                    onClick={onCloseModal}
                    disabled={disabled}
                >
                    Cancel
                </button>
                {actionType === "validation" && <button 
                    className="px-4 py-2 text-white bg-green1 rounded hover:bg-green2 disabled:opacity-50 cursor-pointer"
                    onClick={onConfirm} 
                    disabled={disabled}
                >
                    Confirm
                </button>}
                {actionType === "delete" && <button 
                    className="px-4 py-2 text-white bg-red1 rounded hover:bg-red2 disabled:opacity-50 cursor-pointer"
                    onClick={onConfirm} 
                    disabled={disabled}
                >
                    Confirm
                </button>}
            </div>
        </div>
    );
}
