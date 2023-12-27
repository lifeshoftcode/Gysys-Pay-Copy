import { ApplicationDetailsService } from "../services/applicationDetailsService.js";

export const createApplication = async (req, res) => {
    try {
        const application = await ApplicationDetailsService.createApplicationDetails(req.body);
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getApplication = async (req, res) => {
    try {
        const application = await ApplicationDetailsService.getApplicationDetails(req.params.id);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Aplicacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getApplications = async (req, res) => {
    try {
        const applications = await ApplicationDetailsService.getApplicationDetails();
        if (applications) {
            res.status(200).json(applications);
        } else {
            res.status(404).json({ message: 'Aplicaciones no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateApplication = async (req, res) => {
    try {
        const updated = await ApplicationDetailsService.updateApplication(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Aplicacion actualizada correctamente' });
        } else {
            res.status(404).json({ message: 'Aplicacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deleteApplication = async (req, res) => {
    try {
        const deleted = await ApplicationDetailsService.deleteApplication(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Aplicacion eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Aplicacion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
