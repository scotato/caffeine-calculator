import styled from 'styled-components'

const buttonColors = {
  default: 'gray',
  info: '#007bff',
  success: '#20c997',
  warning: '#ffc107',
  danger: '#dc3545',
}

const backgroundColor = ({ type = 'default'}) => buttonColors[type]

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
