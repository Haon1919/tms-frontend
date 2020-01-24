import React, { useState, ReactNode } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {UserInfo, UserContextProps} from '../../types/UserTypes';

export const ContextValueWrapper: React.FC<ReactNode> = ({ children }) => {
    const updateUserContext = function (userInfo?: UserInfo): void {
        if (userInfo !== undefined) {
            updateContext({
                ...context,
                user: userInfo,
            });
        } else {
            updateContext({
                ...context,
                user: {}
            });
        }
    }
    const [context, updateContext] = useState<UserContextProps>({
        user: {                        
            id: 1,
            firstName: "John",
            lastName: "Doe",
            ageClass: "Student"
        },
        updateUser: updateUserContext
    });

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}