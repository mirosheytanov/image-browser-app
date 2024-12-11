import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h2>Whoops.. Something went wrong. <Link to="/">Back to home</Link></h2>
    </div>
  )
}

export default NotFoundPage