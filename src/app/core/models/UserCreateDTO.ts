export interface UserCreateDTO {
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  dateOfBirth?: Date | null;
  password?: string | null;
}
