import { Activity } from './activity';

export class Booking {
  id: number;
  activity: Activity;
  user: string;
  bookingday: string;
  starttime: string;
  endtime: string;
  comment: string;
}
