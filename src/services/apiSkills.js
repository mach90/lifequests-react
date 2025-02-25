/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS API URL FROM ENV
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const apiURL = import.meta.env.VITE_API_URL;

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET ALL SKILLS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export async function getSkills(params = {}) {
    try {
        if (params.sortBy) {
            const [field, direction] = params.sortBy.split('-');
            params.sort = direction === 'desc' ? `-${field}` : field;
            delete params.sortBy;
        }

        const queryString = new URLSearchParams(params).toString();
        const url = `${apiURL}/skills${queryString ? `?${queryString}` : ''}`;

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();

        return {
            skills: data.data.data,
            totalCount: data.totalCount,
            results: data.results
        };
        
    } catch (error) {
        throw new Error("Skills could not be fetched");
    }
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
GET SKILL BY ID (SKILL ID)
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export async function getSkill(id) {
    try {
        let response = await fetch(`${apiURL}/skills/${id}`);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        return data.data.data;

    } catch(error) {
        throw new Error("Skill could not be fetched");   
    }
}