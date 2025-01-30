const questCardStyle = "bg-variant6/50 col-span-9 row-span-full flex justify-start items-center flex-col rounded-lg border-4 border-variant6";
const questTitleStyle = "bg-variant6 w-full text-center text-base font-bold text-white py-1 px-2 uppercase";

function Quest() {
    return (
        <div className={questCardStyle}>
            <h2 className={questTitleStyle}>Quest Description</h2>
        </div>
    );
};

export default Quest;
