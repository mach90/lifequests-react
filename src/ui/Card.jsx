function Card({ title, icon: IconComponent, legend, children }) {
    const cardStyle = "flex flex-col p-5 gap-5 bg-main1 border border-main3 rounded-3xl h-full w-full justify-start items-start";
    const cardHeaderStyle = "w-full flex flex-row gap-2.5 justify-between items-center";
    const cardTitleStyle = "uppercase text-base text-neutral0 font-bold flex flex-row gap-2 items-center";
    const cardLegendStyle = "uppercase text-xs text-neutral500 font-bold";
    const cardChildrenStyle = "w-full h-full";

    return (
        <div className={cardStyle}>
            <div className={cardHeaderStyle}>
                <h3 className={cardTitleStyle}>{IconComponent && <IconComponent size={16} />} {title}</h3>
                <h4 className={cardLegendStyle}>{legend}</h4>
            </div>
            <div className={cardChildrenStyle}>
                {children}
            </div>
        </div>
    );
};

export default Card;
