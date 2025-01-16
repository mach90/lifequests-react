const accountContainerStyle = "grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full";
const accountMenuStyle = "bg-card col-span-4 row-span-6 text-white flex justify-center items-center";
const accountStyle = "bg-card col-span-8 row-span-full text-white flex justify-center items-center";

function Account() {
    return (
        <div className={accountContainerStyle}>
            <div className={accountMenuStyle}>Account menu</div>
            <div className={accountStyle}>Account settings</div>
        </div>
    );
};

export default Account;