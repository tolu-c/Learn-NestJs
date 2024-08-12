export class User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRole;
}
export type UserRole = 'scholar' | 'staff' | 'admin';
