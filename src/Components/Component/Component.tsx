import { css, cx } from 'emotion';
import React from 'react';

import { BoxShadow, GenerateBoxShadows } from '../Theme/BoxShadow';

type Display =
  'inline'
  | 'block'
  | 'contents'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-table'
  | 'list-item'
  | 'run-in'
  | 'table'
  | 'table-caption'
  | 'table-column-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row-group'
  | 'table-cell'
  | 'table-column'
  | 'table-row'
  | 'none'
  | 'initial'
  | 'inherit';

type JustifyContent =
  'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexFlow =
  'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'row nowrap'
  | 'row wrap'
  | 'row wrap-reverse'
  | 'column nowrap'
  | 'column wrap'
  | 'column wrap-reverse'
  | 'column-reverse nowrap'
  | 'column-reverse wrap'
  | 'column-reverse wrap-reverse';

type AlignItems =
  'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center';

export interface ComponentProps extends React.HTMLAttributes<Element> {
  tag?: string;
  styles?: string;
  display?: Display;
  justifyContent?: JustifyContent;
  flexFlow?: FlexFlow;
  alignItems?: AlignItems;
  boxShadow?: boolean | BoxShadow;
  margin?: string;
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  padding?: string;
  paddingLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
}
const Component: React.FC<ComponentProps> = (props) => {
  const {
    display,
    justifyContent,
    flexFlow,
    alignItems,
    boxShadow,
    margin,
    marginLeft,
    marginTop,
    marginRight,
    marginBottom,
    padding,
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    ...baseComponentProps
  } = props;

  const baseStyles = css`
    display: ${display};
    justify-content: ${justifyContent};
    flex-flow: ${flexFlow};
    align-items: ${alignItems};
    ${GenerateBoxShadows(boxShadow)};
    margin: ${margin};
    margin-left: ${marginLeft};
    margin-top: ${marginTop};
    margin-right: ${marginRight};
    margin-bottom: ${marginBottom};
    padding: ${padding};
    padding-left: ${paddingLeft};
    padding-top: ${paddingTop};
    padding-right: ${paddingRight};
    padding-bottom: ${paddingBottom};
  `;

  return React.createElement(props.tag, {...baseComponentProps, ...{ className: cx(baseStyles, props.styles) }});
};
Component.displayName = 'Component';
Component.defaultProps = {
  tag: 'div'
};

export {
  Component
};
