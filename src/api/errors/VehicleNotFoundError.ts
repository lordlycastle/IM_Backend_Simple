import { HttpError } from 'routing-controllers';

export class VehicleNotFoundError extends HttpError {
    constructor() {
        super(404, 'Pet not found!');
    }
}
