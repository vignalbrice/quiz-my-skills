import React from 'react';
import styled from 'styled-components'
import { Theme } from './theme';




export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type TypographyProps = {
  tag: Tag
  children: React.ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>


export const DynamicTypography = ({ tag, children, ...props }: TypographyProps) => React.createElement(tag, props, children);






export const RubikMediumTitle = styled.h1`
  color: ${p => p.theme.color.text}!important;
  all: unset;
  font-weight: 600;
  `;
export const RubikRegularTitle = styled.h1`
  color: ${p => p.theme.color.text}!important;
  all: unset;
  font-weight: 500;
`;
export const RubikLightTitle = styled.h1<{
  theme: Theme;
}>`
  color: ${p => p.theme.color.text}!important;
  all: unset;
  font-weight: thin
  ;
`;
export const RubikMediumText = styled.p`
  color: ${p => p.theme.color.text}!important;
  all: unset;
  font-weight: 600;
  `;
export const RubikRegularText = styled.p`
  color: ${p => p.theme.color.text}!important;
  all: unset;
  font-weight: 400;
  `;
export const RubikLightText = styled.p`
  color: ${p => p.theme.color.text}!important;
  all: unset;
  font-weight: 100;
  `;

export const RubikItalicText = styled.p`
  color: ${p => p.theme.color.subtitle}!important;
  all: unset;
  font-weight: 400;
  line-height: 150%;
  font-style: italic;
  `;