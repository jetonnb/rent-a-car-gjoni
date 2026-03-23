/** Modeli i rezervimit */
export interface Reservation {
  id: string;
  carId: string;
  clientName: string;
  /** ISO 8601 string me datë dhe orë */
  startDate: string;
  /** ISO 8601 string me datë dhe orë */
  endDate: string;
  pricePerDay: number;
  totalPrice: number;
}
