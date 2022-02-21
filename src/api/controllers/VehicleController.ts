import {
    Authorized, Get, JsonController, OnUndefined, Param
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import {VehicleDto} from '../models/dto/vehicleDto';
import {VehicleNotFoundError} from '../errors/VehicleNotFoundError';
import {VehicleService} from '../services/VehicleService';

@Authorized()
@JsonController('/users')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class VehicleController {

    constructor(
        private vehicleService: VehicleService
    ) { }


    @Get('/:id')
    @OnUndefined(VehicleNotFoundError)
    @ResponseSchema(VehicleDto)
    public one(@Param('id') id: string): Promise<VehicleDto | undefined> {
        return this.vehicleService.findById(id);
    }
}
