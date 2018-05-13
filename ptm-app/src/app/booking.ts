import { Activity } from './activity';

export class Booking {
  id: number;
  activity: Activity;
  bookingday: string;
  starttime: string;
  endtime: string;
}
