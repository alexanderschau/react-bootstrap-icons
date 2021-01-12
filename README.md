# Bootstrap Icons React Component

This package contains a simple React Component, which implements the latest version of the [Bootstrap Icons](https://github.com/twbs/icons) into React (even with Typescript).

## Install

To add the package to your existing React project just type in one of the following commands:

```
npm i @reacticons/bootstrap-icons
```

or

```
yarn add @reacticons/bootstrap-icons
```

## Usage

```js
import React from 'react';
import Icon from '@reacticons/bootstrap-icons';

export const Component = () => (
  <>
    <Icon name="award" />
  </>
);
```

## Supported Icons

This package supports all Bootstrap Icons of the matching version. To see a full list of them, you can take a look at the official [Bootstrap Icons website](https://icons.getbootstrap.com/).

## Hint

By the way, the `<Icon>` Component has the same attributes as a typical `<div>` element.