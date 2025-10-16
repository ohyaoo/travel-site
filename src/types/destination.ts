export interface Destination {
  id: string;
  name: string;
  description: string;
  location: {
    country: string;
    city: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  images: {
    main: string;
    gallery: string[];
  };
  pricing: {
    basePrice: number;
    currency: string;
    discounts?: {
      type: "early_bird" | "group" | "seasonal";
      amount: number;
      endDate: Date;
    }[];
  };
  rating: {
    average: number;
    count: number;
  };
  tags: string[];
  features: string[];
}
