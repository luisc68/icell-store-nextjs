import App from './components/App'
import AuthButton from '../AuthButton';



export default function HomePage() {
  return(
    <div>
      <nav>
            <AuthButton />
          </nav>
      <App/>
    </div>
  )
}