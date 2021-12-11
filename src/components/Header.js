import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    const navItem = (
        <nav>
            <ul>
                <li>
                    <a href="/">My Products</a>
                </li>
                <li>
                    <a href="/">My Sales</a>
                </li>
                <li>
                    <button onClick={logoutHandler}>Logout</button>
                </li>
            </ul>
        </nav>
    );
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuth && navItem}
        </header>
    );
};

export default Header;
