import 'reflect-metadata';

import {bootstrapMicroframework} from 'microframework-w3tec';

import {banner} from './lib/banner';
import {Logger} from './lib/logger';
import {expressLoader} from './loaders/expressLoader';
import {swaggerLoader} from './loaders/swaggerLoader';
import {winstonLoader} from './loaders/winstonLoader';

const log = new Logger(__filename);

bootstrapMicroframework({
    /**
     * Loader is a place where you can configure all your modules during microframework
     * bootstrap process. All loaders are executed one by one in a sequential order.
     */
    loaders: [
        winstonLoader,
        expressLoader,
        swaggerLoader,
    ],
})
    .then(() => banner(log))
    .catch(error => log.error('Application is crashed: ' + error));
