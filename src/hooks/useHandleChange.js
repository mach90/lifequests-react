import { useState } from 'react';

export const useHandleChange = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData(prev => ({
        //     ...prev,
        //     [name]: value
        // }));

        const { name, type } = e.target;
        
        if (type === "file") {
            const file = e.target.files[0];
            setFormData(prev => ({
                ...prev,
                [name]: file
            }));
        } else {
            const { value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    return {
        formData,
        handleChange,
        setFormData
    };
};