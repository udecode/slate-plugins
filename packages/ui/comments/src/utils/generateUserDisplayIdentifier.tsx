import { User } from '../types';

export const generateUserDisplayIdentifier = ({
  user,
  isLoggedInUser,
}: {
  user: User;
  isLoggedInUser: boolean;
}): string => {
  return isLoggedInUser ? 'you' : user.name || user.email;
};
