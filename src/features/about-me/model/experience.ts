import { Period } from './common';

export interface Location {
  city: string;
  country: string;
}

export interface Experience {
  id: string;
  name: string;
  logoUrl: string;
  period: Period;
  position: string;
  location: Location;
}
