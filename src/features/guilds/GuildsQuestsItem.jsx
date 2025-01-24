const guildsQuestsListItemStyle = "bg-slate-800 flex flex-row gap-2 items-center justify-between px-2 py-1";
const guildsQuestsListItemTextStyle = "flex flex-row gap-4";
const guildsQuestsListButtonStyle = "bg-slate-900 p-2 w-24";

function GuildsQuestsItem({ quest }) {
    return (
        <div key={quest.id} className={guildsQuestsListItemStyle}>
            <div className={guildsQuestsListItemTextStyle}>
                <div>📜</div>
                <div>{quest.name}</div>
                <div>({quest.difficulty})</div>
            </div>
            <button className={guildsQuestsListButtonStyle}>Take Quest</button>
        </div>
    );
};

export default GuildsQuestsItem;
