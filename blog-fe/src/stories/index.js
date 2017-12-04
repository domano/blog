import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Blog from '../components/blog'

storiesOf('Blog', module)
  .add('default', () => <Blog/>)
