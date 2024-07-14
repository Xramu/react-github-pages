import styled, { css } from "styled-components"

/* File for shared styling between different components */

// Generic Styled CSS

export const PageVerticalMargin = css`
  margin-top: var(--margin-page-vertical-primary);
  margin-bottom: var(--margin-page-vertical-primary);
`

export const BasicBoxShadowCSS = css`
  box-shadow: 5px 5px 5px var(--color-shadow-primary);
`

// Divisions

export const PageInlineSpaceBetweenWrapStyledDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const PageInlineCenterStyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`

// Media Previews

export const MediaPreviewMediaItemCSS = css`
  ${BasicBoxShadowCSS}
  border-radius: 0.5rem;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`

// Animations CSS

export const BouncyClickAnimationsCSS = css`
  transition: all var(--animation-speed-hover-default) ease-in;

  &:hover {
    transform: scale(110%);
    transition: all var(--animation-speed-hover-default) ease-in;
  }

  &:active {
    transform: scale(90%);
    transition: all var(--animation-speed-active-default) ease-in;
  }
`
