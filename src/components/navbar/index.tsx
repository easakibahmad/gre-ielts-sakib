import { createSignal } from "solid-js";
import { Search } from "lucide-solid";

const Navbar = () => {
  const [isFocused, setIsFocused] = createSignal(false);
  const [isHovered, setIsHovered] = createSignal(false);

  const inputClass = () =>
    `placeholder-black text-[13px] h-[38px] w-[300px] px-5 py-1 rounded-md focus:outline-none ${
      isFocused() || isHovered() ? "bg-white" : ""
    }`;
  return (
      <div class="flex h-[45px] w-full justify-between items-center bg-soft-cream-shade px-48 font-inter fixed">
        <div class="flex justify-center items-center gap-2">
          <Search size={17} />
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
        <div>ICONS</div>
      </div>
  )
}

export default Navbar
