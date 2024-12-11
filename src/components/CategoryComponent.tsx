import { Button, ButtonGroup } from '@mui/material'

interface Props {
  onClick: (event: React.UIEvent<HTMLButtonElement>) => void
  clearCategory: (event: React.UIEvent<HTMLButtonElement>) => void
}

const categories = [
  'fashion', 'nature', 'science', 'education', 'backgrounds'
]

function CategoryComponent({ onClick, clearCategory }: Props) {
  return (
    <div style={{ margin: '10px' }}>
      <ButtonGroup variant='text'>
        {categories.map((category: string) => {
          return (
            <Button key={category} size='small' onClick={onClick}>{category}</Button>
          )
        })}
       
      </ButtonGroup>
      <Button variant='outlined' size='small' onClick={clearCategory}>Clear Category</Button>
    </div>
  )
}

export default CategoryComponent