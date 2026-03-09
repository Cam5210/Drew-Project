import { useLocation } from 'react-router-dom'

function PageTransition({ children }) {
  const location = useLocation()

  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  )
}

export default PageTransition
