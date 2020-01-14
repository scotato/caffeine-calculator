import styled from 'styled-components'

const backgroundColor = ({ type = 'default', theme }) => theme.colors[type]

export default styled.button`
  padding: 16px 24px;
  color: white;
  font-size: inherit;
  font-weight: 500;
  cursor: pointer;
  background-color: ${backgroundColor};
  border-radius: 64px;
  border: 0;
`
