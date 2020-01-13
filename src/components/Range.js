import styled from 'styled-components'

export default styled.input.attrs({type: 'range'})`
  margin-bottom: 32px;
  padding: 8px 0;
  -webkit-appearance: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ccc;
    margin-top: -5px;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #ccc;
  }

  &::-moz-range-track {
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }

  &::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
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
  }

  &::-ms-fill-lower {
    background: #777;
    border-radius: 10px;
  }

  &::-ms-fill-upper {
    background: #ddd;
    border-radius: 10px;
  }

  &::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
  }

  &:focus::-ms-fill-lower {
    background: #888;
  }

  &:focus::-ms-fill-upper {
    background: #ccc;
  }
`
