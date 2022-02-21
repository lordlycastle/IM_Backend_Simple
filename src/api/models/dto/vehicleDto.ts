enum Transmission {
    Manual = 'Manual gearbox',
    SemiAuto = 'Semi-automatic',
    Auto = 'Automatic'
}

enum FuelType {
    Petrol,
    Diesel,
    Electric,
    LPG,
    Hybrid,
}

enum VehicleType {
    Cabriolet,
    Coupe,
    SUV,
    Van,
    Small,
    Other,
}

export class VehicleDto {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    make: 'Audi' | 'BMW' | 'VW' | 'Mercedes' | string;
    model: 'A4' | 'A5' | '316i' | 'Passat' | string;
    transmission: Transmission;
    fuelType: FuelType;
    mileage: number;
    vehicleType: VehicleType;
    vehicleColor: string;
    dealerId: string;
}
