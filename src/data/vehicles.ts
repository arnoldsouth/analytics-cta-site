export interface Vehicle {
  id: string;
  vin: string;
  make: string;
  model: string;
  year: string;
  price: number;
  mileage: number;
  image: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    vin: "1HGCM82633A123456",
    make: "Toyota",
    model: "Camry",
    year: "2023",
    price: 28999,
    mileage: 12500,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500",
    description: "Well-maintained Toyota Camry with excellent fuel efficiency.",
  },
  {
    id: "2",
    vin: "2HGES16575H123457",
    make: "Honda",
    model: "CR-V",
    year: "2022",
    price: 32999,
    mileage: 15800,
    image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=500",
    description: "Spacious family SUV with advanced safety features.",
  },
  {
    id: "3",
    vin: "3VWFK7AJ5CM123458",
    make: "Ford",
    model: "Mustang",
    year: "2023",
    price: 45999,
    mileage: 8900,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500",
    description: "Powerful Mustang with premium features and striking design.",
  },
];
