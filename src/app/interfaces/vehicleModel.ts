export enum VehicleBrand {
  KIA = 'Kia',
  CHEVROLET = 'Chevrolet',
  HYUNDAI = 'Hyundai',
  MITSUBISHI = 'Mitsubishi',
  HONDA = 'Honda',
  TOYOTA = 'Toyota',
  SUBARU = 'Subaru',
  GMC = 'GMC',
  FORD = 'Ford',
  JEEP = 'Jeep',
  NISSAN = 'Nissan',
  MERCEDES_BENZ = 'Mercedes-Benz',
  BUICK = 'Buick',
  VOLKSWAGEN = 'Volkswagen',
  LEXUS = 'Lexus',
  AUDI = 'Audi',
  TESLA = 'Tesla',
  ACURA = 'Acura',
  DODGE = 'Dodge',
  BMW = 'BMW',
  VOLVO = 'Volvo',
  PORSCHE = 'Porsche',
  CHRYSLER = 'Chrysler',
  GENESIS = 'Genesis',
  RAM = 'Ram',
  CADILLAC = 'Cadillac',
}

export interface DeathRate {
  lowerBound: number;
  rate: number;
  upperBound: number;
}

export enum VehicleSize {
  MINI = 'mini',
  SMALL = 'small',
  MIDSIZE = 'midsize',
  LARGE = 'large',
  VERY_LARGE = 'very large',
}

export enum VehicleType {
  CARS = 'cars',
  LUXURY_CARS = 'luxury cars',
  SPORTS_CARS = 'sports cars',
  STATION_WAGONS_AND_MINIVANS = 'station wagons/minivans',
  PICKUPS = 'pickups',
  SUVS = 'SUVs',
  LUXURY_SUVS = 'luxury SUVs',
}

export interface YearSpan {
  startYear: number;
  endYear: number;
}

export interface Vehicle {
  brand: VehicleBrand;
  model: string;
  size: VehicleSize;
  type: VehicleType;
  driverDeathRate: DeathRate;
  otherDriverDeathRate: DeathRate;
  modelYearSpan: string;
}
