import styled, { css } from "styled-components"

/* File for shared styling between different components */

// Generic Styled CSS

export const BasicBoxShadowCSS = css`
  box-shadow: 5px 5px 5px var(--primary-box-shadow-color);
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
  align-content: center;
  justify-content: center;
`

// Media Previews

export const MediaPreviewMediaItemCSS = css`
  ${BasicBoxShadowCSS}
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`

// Animations CSS

const hoverEnterAnimationTime = 100
const activeEnterAnimationTime = 70
const animationExitTime = 100

export const BouncyClickAnimationsCSS = css`
  transition: all ${animationExitTime}ms ease-in;

  &:hover {
    transform: scale(110%);
    transition: all ${hoverEnterAnimationTime}ms ease-in;
  }

  &:active {
    transform: scale(90%);
    transition: all ${activeEnterAnimationTime}ms ease-in;
  }
`
