import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate('/');
            })
            .catch((error) => {
                navigate('/error');
            });
    };

    return (
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && (
                <div className="flex items-center justify-center p-1 bg-slate-200">
                    <img
                        src={user?.photoURL}
                        alt="userIcon"
                        className="w-6 h-6 mr-2"
                    />
                    <button onClick={handleSignOut}>(Sign Out)</button>
                </div>
            )}
        </div>
    );
};

export default Header;
