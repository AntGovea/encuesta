import type { Application } from 'express';
import log4jsLogger from '@utils/logger/log4jsLogger';
import { preguntasRoutes } from '@routers/routers';


const initializeRoutes = (app: Application, baseAPIPath: string): Application => {
    try {
        
        app.use(`${baseAPIPath}/preguntas`, preguntasRoutes);
        

    } catch (error) {
        log4jsLogger.error("Error al inicializar las rutas de los routers: ", error);
    }   

    return app;
};

export default initializeRoutes;