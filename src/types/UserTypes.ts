export type userMeta = {
    id: number,
    firstName: string,
    lastName: string,
    ageClass: string
  };

export type User = {
  id: number,
  first_name: string,
  last_name: string,
  parent_id: number,
  type: string,
  age_classification: string,
  email: string,
  credit: number,
  birthday: string,
  signature: string
}

export type UserContextProps = {
      user: User | {},
      updateUser : (userInfo?: User) => void,
  };
  