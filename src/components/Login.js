import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RedirectButton from "../common/RedirectButton";

export default function Login( {clientService}){

  const { getURIforSignIn } = {
    ...clientService,
  };
  const uri_UI = getURIforSignIn()
 const [ email, setEmail]=useState('')
 const [ password , setPassword]= useState('')
 const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        const dummyUser = {
            email: "mosip@gmail.com",
            password: "mosip123",
          };
      
          if (email === dummyUser.email && password === dummyUser.password) {
            // Redirect to the user dashboard or another page
            window.alert("hello")
            setEmail("");
    setPassword("");
    navigate('/userprofile');
          } else {
            // Handle authentication error
            setEmail("");
            setPassword("");
            alert("Invalid credentials. Please try again.");
          }
    }
    return(
        <>
      <section>
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign in
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Don&#x27;t have an account?{" "}
          <Link
            href="#"
            title=""
            className="font-semibold text-black transition-all duration-200 hover:underline"
          >
            Create a free account
          </Link>
        </p>
        <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label  className="text-base font-medium text-gray-900">
                  {" "}
                  Password{" "}
                </label>
                <Link
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </Link>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Get started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="mt-3 space-y-3">
            <RedirectButton
          redirectURL={uri_UI}
          text="Sinin with e-signet"
        />
        </div>
      </div>
    </div>
    <div className="h-full w-full">
      <img
        className="mx-auto h-full w-full rounded-md object-cover"
        src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
        alt=""
      />
    </div>
  </div>
</section>
        </>
    )
}

