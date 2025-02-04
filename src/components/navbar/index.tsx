import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import { FiSearch } from 'solid-icons/fi'
import { IoBagRemoveSharp } from 'solid-icons/io'
import { AiOutlineFacebook } from 'solid-icons/ai'
import { AiOutlineYoutube } from 'solid-icons/ai'
import { BsInstagram } from 'solid-icons/bs'

const Navbar = () => {
  const [isFocused, setIsFocused] = createSignal(false);
  const [isHovered, setIsHovered] = createSignal(false);

  const inputClass = () =>
    `placeholder-black text-[13px] h-[38px] w-[300px] px-5 py-1 rounded-md focus:outline-none ${isFocused() || isHovered() ? "bg-white" : ""
    }`;
  return (
    <div class="font-inter sticky top-0 z-50">
      <div class="flex h-[45px] w-full justify-between items-center px-48 bg-soft-cream-shade">
        <div class="flex justify-center items-center gap-2">
          <FiSearch size={17} />
          <input
            type="text"
            placeholder="Search courses"
            class={inputClass()}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div class="flex gap-6 items-center">
          <IoBagRemoveSharp size={22} />
          <AiOutlineFacebook size={22} />
          <AiOutlineYoutube size={22} />
          <BsInstagram size={22} />
        </div>
      </div>

      <div class="w-full h-[73px] flex gap-6 justify-between items-center px-48 bg-white">
        <div class="flex gap-6">
          <A href="/explore" class="hover:text-blue-500 transition">Explore</A>
          <A href="/careers" class="hover:text-blue-500 transition">Careers</A>
        </div>

        <div class="text-2xl font-bold">
          <A href="/">SolidJS</A>
        </div>

        <div class="flex gap-6">
          <A href="/login" class="hover:text-blue-500 transition">Login</A>
          <A href="/signup" class="hover:text-blue-500 transition">Signup</A>
        </div>
      </div>
    </div>
  )
}

export default Navbar
