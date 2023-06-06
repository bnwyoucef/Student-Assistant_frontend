import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import axios from '../../Api/Axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  async function signUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post("ms-user/user/signUp", { email, password });
        if (response.data.status === 409) {
          setErrorMessage(response.data.message)
        } else {
          navigate("/");
        }
      } catch (error: any) {
        setErrorMessage(error.response?.data?.message);
      }
    } else {
      setErrorMessage("Passwords do not match!");
    }
  }
  const checkAuth=()=>{
 
    const auth=localStorage.getItem("user");
    if(auth){
      navigate("/student/", { replace: true });
    }
    else{
      return ;
    }
  }
  useEffect(()=>{
    checkAuth();   
  },[])
  useEffect(() => {
    setErrorMessage('');
  }, [email, password, confirmPassword])

  return (
    <div className="min-height-form flex flex-col justify-center">
      <div
        className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden"
      >
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <img
            className="absolute h-auto w-full object-cover"
            src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
            alt="my zomato"
          />
        </div>
        <div className="w-full xl:w-1/2 p-8">
          <form onSubmit={signUp}>
            <h1 className=" text-2xl font-bold">Create an account!</h1>
            <div>
              <span className="text-gray-600 text-sm">
                Have an account?
              </span>
              <Link to="/" className="text-gray-700 text-sm font-semibold">
                Sign in
              </Link>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="flex text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                required
                id="email"
                type="text"
                placeholder="Your email address"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-4 mt-6">
              <label
                className="flex text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                required
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="flex text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                required
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              {errorMessage &&
                <span
                  className="text-md appearance-none rounded w-full py-2 px-3 text-red-500 mb-1 leading-tight h-10"
                  id="errorMsg"
                >{errorMessage}</span>}
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
