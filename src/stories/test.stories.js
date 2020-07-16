import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('test', module)
  .add('x y', () => {
    console.log('render x y'); 
    return <div>x y</div>
  })
  .add('x', () => {
    console.log('render x');
    return <div>x</div>
  });
