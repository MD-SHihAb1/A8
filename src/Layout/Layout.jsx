
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';

const Layout = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "Loading" ? <p>Loading......</p> : <Outlet></Outlet>
            }
          
        </div>
    );
};

export default Layout;