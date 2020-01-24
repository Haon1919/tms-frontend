import React from 'react';
import { UserContextProps } from '../types/UserTypes'

export const UserContext = 
  React.createContext<Partial<UserContextProps>>({});