import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import ContractFinalizer from "./ContractFinalizer";
import QuestGuilds from "../quests/QuestGuilds";
import { FaScroll } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const contractDetailsStyle = "col-span-full row-span-full";
const contractContainerCardStyle = "grid grid-cols-6 grid-rows-10 gap-2.5";
const contractDetailsSectionTitleStyle = "uppercase text-base text-main4 font-black border-r border-r-main1 pr-4";
const contractDetailsTextStyle = "uppercase font-bold text-base text-neutral0";
const contractDetailsStatusStyle = "relative text-main3 w-full h-full flex items-center justify-center font-black text-4xl z-10";
const contractDetailsStampStyle = "absolute z-0 rotate-8 text-green2/75 text-9xl";

function ContractDetails({contract, isPending}) {
    return (
        <div className={contractDetailsStyle}>
            <Card title="Contract">
                <div className={contractContainerCardStyle}>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-4 row-span-1 items-center rounded-tl-xl">
                        <h2 className={contractDetailsSectionTitleStyle}>Contract n°</h2>
                        <p className={contractDetailsTextStyle}>{contract?.id}</p>
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-2 row-span-1 items-center rounded-tr-xl">
                        <h2 className={contractDetailsSectionTitleStyle}>Created</h2>
                        <p className={contractDetailsTextStyle}>{contract?.createdAt ? new Date(contract.createdAt).toLocaleDateString() : ""}</p>
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-4 row-span-1 items-center">
                        <h2 className={contractDetailsSectionTitleStyle}>Quest</h2>
                        <NavLink to={`/quests/${contract?.quest?.id}`} className="flex flex-row gap-2 items-center uppercase text-neutral0 font-black bg-main3 hover:bg-main4 border border-main4 rounded-sm px-2 h-full duration-200"><FaScroll /></NavLink>
                        <p className={contractDetailsTextStyle}>{contract?.quest?.name}</p>
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-2 row-span-1 items-center">
                        <h2 className={contractDetailsSectionTitleStyle}>Completed</h2>
                        <p className={contractDetailsTextStyle}>{contract?.finishedAt ? new Date(contract.finishedAt).toLocaleDateString() : ""}</p>
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-3 row-span-1 items-center">
                        <h2 className={contractDetailsSectionTitleStyle}>Between</h2>
                        <p className={contractDetailsTextStyle}>ME</p>
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-3 row-span-5">
                        <h2 className={contractDetailsSectionTitleStyle}>Rewards</h2>
                        {contract?.id && <ContractFinalizer contractId={contract?.id} contractStatus={contract.status} questId={contract?.quest?.id} />}
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-3 row-span-3">
                        <h2 className={contractDetailsSectionTitleStyle}>And</h2>
                        {contract?.quest?.id && <QuestGuilds questId={contract?.quest?.id} />}
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-3 row-span-4 rounded-bl-xl">
                        <h2 className={contractDetailsSectionTitleStyle}>Summary</h2>
                    </div>

                    <div className="bg-main2 p-4 gap-2.5 flex flex-row col-span-3 row-span-3 rounded-br-xl">
                        <h2 className={contractDetailsSectionTitleStyle}>Status</h2>
                        {contract?.status === "finished" && <div className={contractDetailsStatusStyle}>
                            FINISHED
                            <div className={contractDetailsStampStyle}><IoMdCheckmarkCircleOutline /></div>
                        </div>}
                        {contract?.status === "active" && <div className={contractDetailsStatusStyle}>
                            ACTIVE
                        </div>}
                    </div>

                </div>
            </Card>
        </div>
    );
};

export default ContractDetails;