import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
// import {Button} from 'react-native-material-buttons';

import styles from './styles';

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    disabledColor: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let {onPress, index} = this.props;

    if ('function' === typeof onPress) {
      onPress(index);
    }
  }

  render() {
    let {children, style, index, ...props} = this.props;

    return (
      <TouchableOpacity
        {...props}
        style={[styles.container, style]}
        onPress={this.onPress}>
        {children}
      </TouchableOpacity>
    );
  }
}
