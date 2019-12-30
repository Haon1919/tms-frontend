export type userMeta = {
    id: number,
    firstName: string,
    lastName: string,
    ageClass: string
  };

export type UserInfo = {
    id: number,
    firstName: string,
    lastName: string,
    ageClass: string
  }
  
export type UserContextProps = {
      user: UserInfo | {},
      updateUser : (userInfo?: UserInfo) => void,
  };
  