import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

import ArrowNext from "@/assets/svg/ArrowNext.tsx";
import Google from "@/assets/svg/Google.tsx";
import Facebook from "@/assets/svg/Facebook.tsx";
import Apple from "@/assets/svg/Apple.tsx";

const Registration = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');  
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [success, setSuccess] = createSignal(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: Event) => {
    e.preventDefault(); 

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username(),
          password: password(),
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      setSuccess(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return <div class="w-full h-screen flex items-center justify-center bg-root text-white font-inter">
      <div>

          <div class="flex flex-col items-center gap-2 text-center">
            <h1 class="text-4xl font-bold font-grotesk">Create an account</h1>
            <p class="color-grey text-xl">Please complete your registration to continue...</p>
          </div>
            {loading() && <p class="text-yellow-500 text-center">Loading...</p>}
            {error() && <p class="text-red-500 text-center">{error()}</p>}
            {success() && <p class="text-green-500 text-center">User created successfully!</p>}
            {!success() && <div class="flex justify-center gap-14 my-10">

            <div class="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Username" 
                class="border-none px-5 bg-input input-btn-size focus:outline-none focus:ring-0 rounded-md"
                value={username()}
                onInput={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Password" 
                class="border-none px-5 bg-input input-btn-size focus:outline-none focus:ring-0 rounded-md"
                value={password()}
                onInput={(e) => setPassword(e.target.value)}
              />
              <button 
                class="cursor-pointer flex justify-between gap-4 items-center px-5 input-btn-size bg-gradient-to-r from-[#A9A5FD] to-[#EBD75D] rounded-md text-black"
                onClick={handleSubmit}>
                Signup <ArrowNext/>
              </button>
              <p class="font-grotesk text-[11px] color-grey">Already have an account yet? 
                <button 
                  class="text-white hover:underline cursor-pointer" 
                  onClick={() => navigate("/login")}>
                  Login now!
                </button>
              </p>
            </div>

            <div class="flex flex-col gap-3">
              <button class="cursor-pointer flex justify-start gap-4 px-5 items-center input-btn-size border-gradient-yellow">
                <Google/> Sign up with Google
              </button>
              <button class="cursor-pointer flex justify-start gap-4 px-5 items-center input-btn-size border-gradient-blue">
                <Facebook/> Sign up with Facebook
              </button>
              <button class="cursor-pointer flex justify-start gap-4 px-5 items-center input-btn-size border-gradient-yellow">
                <Apple/> Sign up with Apple Account
              </button>
            </div>

          </div>}
      </div>
  </div>
};
export default Registration;
