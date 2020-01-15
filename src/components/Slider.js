import styled from 'styled-components'
import Slider from 'rc-slider'

export default styled(Slider)`
  margin-bottom: ${props => props.theme.size[700]};
  padding: ${props => props.theme.size[200]} 0;
  height: ${props => props.theme.size[500]};
  user-select: none;

  .rc-slider-rail {
    background-color: ${props => props.theme.grayscale[100]};
    height:  ${props => props.theme.size[300]};
  }

  .rc-slider-step {
    height:  ${props => props.theme.size[300]};
  }

  .rc-slider-track {
    background-color: transparent;
  }

  .rc-slider-handle {
    margin-top: -${props => props.theme.size[200]};
    width: ${props => props.theme.size[500]};
    height: ${props => props.theme.size[500]};
    background-color: ${props => props.theme.grayscale[300]};
    border: 0;

    &:focus,
    &:active {
      box-shadow: 0 0 0 ${props => props.theme.size[100]} ${props => props.theme.color.info};
    }
  }

  .rc-slider-dot {
    bottom: ${props => props.theme.size[100]};
    margin-left: -${props => props.theme.size[100]};
    width: ${props => props.theme.size[200]};
    height: ${props => props.theme.size[200]};
    border: 0;
    background-color: ${props => props.theme.grayscale[300]};

    &:first-child,
    &:last-child {
      display: none;
    }
  }
`