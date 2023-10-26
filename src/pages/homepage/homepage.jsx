import WelcomeComponent from './components/welcome';
import NavigationComponent from './components/navigation';
import InstagramComponent from './components/instagram';

export default function HomePage(){
    return(
        <>        
        <WelcomeComponent/>
        <NavigationComponent/>
        <InstagramComponent/>
        </>
    )
}