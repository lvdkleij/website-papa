import { createSignal, mergeProps } from "solid-js";
import { MenuButton } from "../../buttons/MenuButton";
import "./Navigation.css";

export function Navigation(_props: { displayContactButton?: boolean }) {
  const props = mergeProps({ displayContactButton: false }, _props);
  const [showMenu, setShowMenu] = createSignal(false);

  return (
    <>
      <div
        id="menu-content"
        class={`menu-content ${showMenu() ? "open" : ""}  z-10 mt-[--space-xl]`}
      >
        <div class="w-full bg-white" style="min-height: 100vh;">
          <a
            data-astro-prefetch
            class="block px-[--space-m] py-[--space-xs] w-full"
            href="./contact"
          >
            Over mij
          </a>
          <a
            data-astro-prefetch
            class="block px-[--space-m] py-[--space-xs] w-full"
            href="./contact"
          >
            Contact
          </a>
        </div>
      </div>

      <section class="p-[--space-xs] flex items-center z-20 relative">
        <a href="/" data-astro-prefetch>
          <div class="font-1 font-bold mr-[--space-xs]">Logo</div>
        </a>
        <div class="@[45rem]/main:flex hidden">
          <div class="py-[--space-2xs] px-[--space-xs] font--1 font-semibold cursor-pointer">
            Diensten
          </div>
          <div class="py-[--space-2xs] px-[--space-xs] font--1 font-semibold cursor-pointer">
            Over mij
          </div>
        </div>

        <div class="flex ml-auto items-center">
          <MenuButton onClick={() => setShowMenu(!showMenu())} />
        </div>
      </section>
    </>
  );
}
