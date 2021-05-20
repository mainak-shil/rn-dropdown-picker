# rn-simple-dropdown-picker

##### A simple React Native Dropdown Picker with React-Native's core components.

### Features

- Easy to use
- Consistent look and feel on iOS and Android
- Customizable font size, colors
- Dynamic dropdown size and position
- Configurable visible item count
- RTL support
- Pure javascript implementation

### Installation

`npm install --save rn-simple-dropdown-picker`

### Usage

```javascript
import React, { Component } from 'react';
import { Dropdown } from 'rn-simple-dropdown-picker';

class Example extends Component {
  render() {
    let data = [{
	  {value: 'Baseball'},
	  {value: 'Basketball'},
	  {value: 'Bodybuilding'},
	  {value: 'Field Hockey'},
	  {value: 'Fitness'},
	  {value: 'Football'},
    }];

    return (
      <Dropdown
        data={data}
      />
    );
  }
}
```
