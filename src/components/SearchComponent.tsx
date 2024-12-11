import { Button, TextField } from '@mui/material'

import './SearchComponent.scss'

interface Props {
  inputData: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  buttonClickHandler: () => void
}

function SearchComponent({ inputData, onChange, buttonClickHandler }: Props) {

  return (
    <div>
      <TextField className='search-text-field' size='small' variant='outlined' value={inputData} onChange={onChange} />
      <Button className='search-button' size='large' variant='contained' onClick={() => {buttonClickHandler()}}>Search</Button>
    </div>
  )
}

export default SearchComponent