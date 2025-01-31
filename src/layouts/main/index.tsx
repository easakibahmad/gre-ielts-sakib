import { JSX } from "solid-js"
import Navbar from "@/components/navbar/index.tsx"

const Main = (props: { children: JSX.Element }) => {
  return (
    <div class="min-h-screen flex flex-col">

      <Navbar />

      <main class="flex-1">
        {props.children}
      </main>

    </div>
  )
}

export default Main
