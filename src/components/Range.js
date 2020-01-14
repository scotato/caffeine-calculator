import styled from 'styled-components'

export default styled.input.attrs({type: 'range'})`
  margin-bottom: 32px;
  padding: 8px 0;
  -webkit-appearance: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 5px;
    background: ${props => props.theme.colors.defaultLight};
    border: none;
    border-radius: 3px;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-webkit-slider-thumb {
    margin-top: -5px;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${props => props.theme.colors.defaultLight};
    will-change: background;
    transition: background 0.3s ease-out;
    -webkit-appearance: none;

    @media (max-width: 768px) { 
      margin-top: -9px;
      height: 24px;
      width: 24px;
    }
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.colors.info};
  }

  &:focus::-webkit-slider-thumb {
    background: ${props => props.theme.colors.info};
  }

  &::-moz-range-track {
    height: 5px;
    background: ${props => props.theme.colors.defaultLight};
    border: none;
    border-radius: 3px;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  /*hide the outline behind the border*/
  &:-moz-focusring{
    outline: 1px solid white;
    outline-offset: -1px;
  }

  &::-ms-track {
    height: 5px;
    
    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;
    
    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-ms-fill-lower {
    background: #777;
    border-radius: 10px;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-ms-fill-upper {
    background: ${props => props.theme.colors.defaultLight};
    border-radius: 10px;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
    will-change: background;
    transition: background 0.3s ease-out;
  }

  &:focus::-ms-fill-lower {
    background: ${props => props.theme.colors.info};
  }

  &:focus::-ms-fill-upper {
    background: ${props => props.theme.colors.info};
  }
`
