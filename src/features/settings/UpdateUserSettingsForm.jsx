import { useLocalStorageState } from "../../hooks/useLocalStorageState";

const updateUserSettingsFormSectionTitleStyle = "text-white text-xl font-medium underline";

function UpdateUserSettingsForm() {
    const [xpDisplayStyle, setXpDisplayStyle] = useLocalStorageState(false, "xpDisplayStyle");

    function handleXpDisplayStyle(e) {
        setXpDisplayStyle(e.target.checked);
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className={updateUserSettingsFormSectionTitleStyle}>UI Settings</h2>
            <label className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    checked={xpDisplayStyle} 
                    onChange={handleXpDisplayStyle}
                /> 
                Display remaining XP instead of Total
            </label>
        </div>
    );
};

export default UpdateUserSettingsForm;
