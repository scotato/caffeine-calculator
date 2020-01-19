import Select from 'react-select'
import styled from 'styled-components'

export const LabelEmoji = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${props => props.theme.size[400]};
  align-items: center;
`

export default styled(Select)`
  margin-bottom: ${props => props.theme.size[700]};
  font-size: ${props => props.theme.size[500]};
`
