import Select from 'react-select'
import styled from 'styled-components'

export default styled(Select)`
  margin-bottom: ${props => props.theme.size[700]};
  font-size: ${props => props.theme.size[500]};
`
