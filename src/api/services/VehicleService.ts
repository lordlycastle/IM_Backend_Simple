import { Logger, LoggerInterface } from '../../decorators/Logger';
import { VehicleRepository } from '../repositories/VehicleRepository';
import {VehicleDto} from '../models/dto/vehicleDto';

export class VehicleService {

    constructor(
        private vehicleRepository: VehicleRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public findById(id: string): Promise<VehicleDto | undefined> {
        this.log.info('Find all vehicles');
        return this.vehicleRepository.find(id);
    }

}
