const authFormPanelStyle = "flex flex-col justify-center items-center w-[30%]";

function AuthPanel({children}) {
    return (
        <div className={authFormPanelStyle}>
            {children}
        </div>
    );
};

export default AuthPanel;