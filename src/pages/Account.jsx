function Account() {
    return (
        <div className="grid grid-flow-col grid-cols-12 grid-rows-12 p-4 gap-4 h-full">
            <div className="bg-stone-900 col-span-4 row-span-6 text-gray-500 flex justify-center items-center">Account menu</div>
            <div className="bg-stone-900 col-span-8 row-span-full text-gray-500 flex justify-center items-center">Account settings</div>
        </div>
    );
};

export default Account;
