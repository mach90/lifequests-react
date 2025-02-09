function Card({ title, icon, children }) {
    const cardStyle = "flex flex-col p-5 gap-5 bg-main1 border border-main3 rounded-3xl h-full w-full justify-start items-start";
    const cardHeaderStyle = "w-full flex flex-row gap-2.5 justify-between items-center";
    const cardTitleStyle = "uppercase text-sm text-neutral0 font-bold";
    const cardChildrenStyle = "w-full h-full";

    return (
        <div className={cardStyle}>
            <div className={cardHeaderStyle}>
                <h3 className={cardTitleStyle}>📄 {title}</h3>
            </div>
            <div className={cardChildrenStyle}>
                {children}
            </div>
        </div>
    );
};

export default Card;
