const formRowStyle = "flex flex-col gap-2 w-96";

function FormRow({children}) {
    return (
        <div className={formRowStyle}>
            {children}
        </div>
    );
};

export default FormRow;
