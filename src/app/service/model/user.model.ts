export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  subscription?: Subscription;
  imageUrl?: string;
}

export enum Subscription {
  FREE = '1',
  PREMIUM = '0',
}
