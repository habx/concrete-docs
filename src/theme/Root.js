// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

import {
  Provider,
  ThemeProvider,
  theme,
  EuclidFont,
  ANIMATION_DURATIONS,
  ANIMATION_TIMING_FUNCTION,
} from '@habx/ui-core'

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${theme.font()};
    --ifm-color-primary: ${theme.color('primary')};
    --ifm-color-primary-dark: ${theme.color('primary')};
    --ifm-color-primary-darker: ${theme.color('primary', {
      variation: 'loud',
    })};
    --ifm-color-primary-darkest: ${theme.color('primary', {
      variation: 'louder',
    })};
    --ifm-color-primary-light: ${theme.color('primary', { variation: 'calm' })};
    --ifm-color-primary-lighter: ${theme.color('primary', {
      variation: 'calmer',
    })};
    --ifm-color-primary-lightest: ${theme.color('primary', {
      variation: 'calmer',
    })};
    --ifm-code-font-size: 95%;
    --ifm-footer-background-color: ${theme.color('secondary')};
    --ifm-footer-color: ${theme.neutralColor('100')};
    --ifm-footer-link-color: ${theme.neutralColor('100')};
  }

  .docusaurus-highlight-code-line {
    background-color: rgb(72, 77, 91);
    display: block;
    margin: 0 calc(-1 * var(--ifm-pre-padding));
    padding: 0 var(--ifm-pre-padding);
  }
  #__docusaurus , #__docusaurus > div {
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: none;
  }
  .navbar__brand {
    margin-top: -2px;
    margin-right: 8px;
  }
  .navbar__logo {
    height: 24px;
    margin: 0;
  }
  
  .aa-DetachedSearchButton {
    margin-left: 24px;
    width: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    user-select: none;
    vertical-align: middle;
    text-align: left;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    position: relative;

    max-width: 100%;
    font-family: ${theme.font()};
    letter-spacing: 0.1px;
    border: none;

    transition-property: box-shadow, background-color;
    transition-duration: ${ANIMATION_DURATIONS.m}ms;
    transition-timing-function: ${ANIMATION_TIMING_FUNCTION};

    box-shadow: var(--button-shadow),
    inset 0 0 0 var(--button-border-width) var(--button-border-color),
    0 0 0 var(--button-outline-width) var(--button-outline-color);

    height: var(--button-height);

    --button-border-color: ${theme.color('secondary', { dynamic: true })};
    --button-outline-width: 0;
    --button-outline-color: ${theme.color('primary', { opacity: 0.3 })};
    --button-shadow: 0 0 0 ${theme.neutralColor(1000)};



      font-size: 14px;
      padding: 0 12px;
      --button-height: 36px;
      --button-side-element-margin: 8px;
    

      --button-border-width: 2px;

      background-color: transparent;
      color: ${theme.color('secondary', { dynamic: true })};

      &:hover:not(:focus) {
        --button-border-width: 4px;
      }

      &:active {
        --button-border-width: 3px;
      }

      &:focus:not(:active) {
        --button-outline-width: 4px;
      }

      &:disabled {
        color: ${theme.neutralColor(300)};

        --button-border-color: ${theme.neutralColor(300)};
      }
    
    

    &:disabled {
      pointer-events: none;
    }
  }
  .aa-SubmitIcon {
    height: 14px;
    color: ${theme.textColor()};
  }
`

export default ({ children }) => {
  return (
    <Provider>
      <ThemeProvider>
        {children}
        <GlobalStyle />
      </ThemeProvider>
      <EuclidFont />
    </Provider>
  )
}
