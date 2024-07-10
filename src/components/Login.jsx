import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        toast.error(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                            toast.error(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                    toast.error(errorMessage);
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage);
                    toast.error(errorMessage);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div
            className="relative h-screen"
            style={{ backgroundImage: `url(${BG_URL})` }}
        >
            <Header />
            <div className="top-0 left-0 w-full h-full flex justify-center items-center">
                <form
                    className="w-[350px] mx-auto bg-black min-h-[300px] p-12 bg-opacity-80 text-white"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="signin mb-5">
                        <h1 className="text-3xl font-bold">
                            {isSignInForm ? 'Sign In' : 'Sign Up'}
                        </h1>
                    </div>
                    {!isSignInForm && (
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                ref={name}
                                type="text"
                                name="floating_name"
                                id="floating_name"
                                className="block py-2.5 px-0 w-full text-sm text-white !bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                                placeholder=" "
                                required
                            />
                            <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Full Name
                            </label>
                        </div>
                    )}
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            ref={email}
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-white !bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email address
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            ref={password}
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-white !bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-white-600 peer"
                            placeholder=" "
                            required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Password
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white mb-6 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={handleButtonClick}
                    >
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>
                    <div className="signup cursor-pointer">
                        <p onClick={toggleSignInForm}>
                            {isSignInForm
                                ? 'New to Netflix? Sign up now.'
                                : 'Already registered? Sign In Now.'}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
