export interface BookingForm {
  tripDates: {
    startDate: Date;
    endDate: Date;
  };
  travelers: {
    adults: number;
    children: {
      age: number;
      count: number;
    }[];
  };
  rooms: {
    type: "single" | "double" | "suite";
    count: number;
  }[];
  additionalServices: {
    id: string;
    name: string;
    price: number;
    selected: boolean;
  }[];
}
