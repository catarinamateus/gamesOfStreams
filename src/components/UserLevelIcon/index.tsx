import React from 'react';
import {useAppContext} from '../../context';
import {UserLevelEnum} from '../../context/types';
import MaterialIcon from '../MaterialIcon';

interface UserLevelIconProps {
  size?: number;
}

const UserLevelIconConverter = {
  //TODO - Update with avatars ?
  [UserLevelEnum.Initial]: 'star',
  [UserLevelEnum.Medium]: 'star',
  [UserLevelEnum.Master]: 'star',
  [UserLevelEnum.Expert]: 'star',
};

const UserLevelIcon = (props: UserLevelIconProps): JSX.Element => {
  const {user} = useAppContext();

  if (!user) {
    return <React.Fragment />;
  }

  const iconName = UserLevelIconConverter[user.level];

  return <MaterialIcon {...props} name={iconName} color="#fabc0b" />;
};

export default UserLevelIcon;
