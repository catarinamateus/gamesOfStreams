import React from 'react';

import {Icon, IconProps} from 'react-native-material-ui';

const MaterialIcon = (props: IconProps): JSX.Element => {
  // Check https://mui.com/components/material-icons/ to search for icon names
  return <Icon {...props} />;
};

export default MaterialIcon;
