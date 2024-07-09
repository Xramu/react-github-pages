import styled, { css } from "styled-components"

/* File for shared styling between different components */

// Divisions

export const PageInlineSpaceBetweenStyledDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`

export const PageInlineCenterStyledDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

// Media Previews

export const MediaPreviewMediaItemCSS = css`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`

// Animations

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
