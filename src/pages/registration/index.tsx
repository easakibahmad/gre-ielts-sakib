import { createSignal } from "solid-js";

import ArrowNext from "@/assets/svg/ArrowNext.tsx";
import Google from "@/assets/svg/Google.tsx";
import Facebook from "@/assets/svg/Facebook.tsx";
import Apple from "@/assets/svg/Apple.tsx";

const Registration = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');  
  const handleSubmit = () => {
    console.log('Username:', username());
    console.log('Password:', password());
  };

  return <div class="w-full h-screen flex items-center justify-center bg-root text-white font-inter">
      <div>

          <div class="flex flex-col items-center gap-2 text-center">
            <h1 class="text-4xl font-bold font-grotesk">Create an account</h1>
            <p class="color-grey text-xl">Please complete your registration to continue...</p>
          </div>

          <div class="flex justify-center gap-14 my-10">

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

          </div>
      </div>
  </div>
};
export default Registration;
