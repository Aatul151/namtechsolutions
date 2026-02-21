import {
    getFormEntriesByFormName,
} from "../services/formservices";

export const customFormServices = {
    formReference: {
        fetchOptions: async (formName: string, fieldName: string) => {
            try {                
                const response = await getFormEntriesByFormName(formName);
                return response.map((entry: any) => ({
                    label:
                        entry.payload?.[fieldName] ||
                        entry[fieldName] ||
                        `Entry ${entry._id}`,
                    value: entry._id,
                }));
            } catch (error) {
                console.error(`Error fetching ${formName} options:`, error);
                return [];
            }
        },
    },
    ckEditorLicenseKey: "GPL",
};
