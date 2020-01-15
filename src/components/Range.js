import styled from 'styled-components'

export default styled.input.attrs({type: 'range'})`
  margin-bottom: ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[400]} 0;
  background-color: transparent;
  -webkit-appearance: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: ${props => props.theme.size[200]};
    background: ${props => props.theme.grayscale[300]};
    border: none;
    border-radius: ${props => props.theme.size[100]};
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-webkit-slider-thumb {
    margin-top: -6px;
    border: none;
    height: ${props => props.theme.size[500]};
    width: ${props => props.theme.size[500]};
    border-radius: 50%;
    background: ${props => props.theme.grayscale[300]};
    will-change: background;
    transition: background 0.3s ease-out;
    -webkit-appearance: none;

    ${props => props.theme.media.tabletVertical`
      margin-top: -${props => props.theme.size[300]};
      height: ${props => props.theme.size[600]};
      width: ${props => props.theme.size[600]};
    `}
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.color.info};
  }

  &:focus::-webkit-slider-thumb {
    background: ${props => props.theme.color.info};
  }

  &::-moz-range-track {
    height: ${props => props.theme.size[200]};
    background: ${props => props.theme.grayscale[300]};
    border: none;
    border-radius: ${props => props.theme.size[200]};
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-moz-range-thumb {
    border: none;
    height: ${props => props.theme.size[500]};
    width: ${props => props.theme.size[500]};
    border-radius: 50%;
    background: goldenrod;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  /*hide the outline behind the border*/
  &:-moz-focusring{
    outline: ${props => props.theme.size[100]} solid white;
    outline-offset: -${props => props.theme.size[100]};
  }

  &::-ms-track {
    height: ${props => props.theme.size[200]};
    
    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;
    
    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: ${props => props.theme.size[200]} 0;

    /*remove default tick marks*/
    color: transparent;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-ms-fill-lower {
    background: ${props => props.theme.grayscale[700]};
    border-radius: ${props => props.theme.size[400]};
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-ms-fill-upper {
    background: ${props => props.theme.grayscale[300]};
    border-radius: ${props => props.theme.size[400]};
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-ms-thumb {
    border: none;
    height: ${props => props.theme.size[500]};
    width: ${props => props.theme.size[500]};
    border-radius: 50%;
    background: goldenrod;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &:focus::-ms-fill-lower {
    background: ${props => props.theme.color.info};
  }

  &:focus::-ms-fill-upper {
    background: ${props => props.theme.color.info};
  }
`
