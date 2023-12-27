import { ApplicationDetails } from "../../../models/applicationDetailsModel.js";

export const ApplicationDetailsService = {
    createApplicationDetails: async (data) => {
        return await ApplicationDetails.create(data);
    },
    getApplicationDetails: async (id) => {
        return await ApplicationDetails.findByPk(id);
    },
    getApplicationDetails: async () => {
        return await ApplicationDetails.findAll();
    },
    updateApplicationDetails: async (id, data) => {
        const application = await ApplicationDetails.findByPk(id);
        if (application) {
            return await application.update(data);
        }
        return null;
    },
    deleteApplicationDetails: async (id) => {
        const application = await ApplicationDetails.findByPk(id);
        if (application) {
            await application.destroy();
            return true;
        }
        return false;
    }
};