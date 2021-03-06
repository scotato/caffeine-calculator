import styled from 'styled-components'

export default styled.label`
  display: flex;
  margin-bottom: ${props => props.theme.size[400]};
  justify-content: space-between;
  font-size: ${props => props.theme.size[500]};
  user-select: none;
`
