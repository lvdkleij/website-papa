import { createSignal } from "solid-js";

export function LargeScreenNavigation() {
  return (
    <>
      <section class="p-[--space-xs] flex items-center z-20 relative">
        <a href="/" data-astro-prefetch>
          <div class="font-1 font-bold mr-[--space-xs]">Logo</div>
        </a>
        <div class="@[45rem]/main:flex hidden">
          <DropdownButton />
          <LinkButton text="Coaching" uri="./coaching" />
          <LinkButton text="Over mij" uri="./about-me" />
        </div>
      </section>
    </>
  );
}

function LinkButton(_props: { text: string; uri: string }) {
  return (
    <a
      href={_props.uri}
      class="py-[--space-2xs] px-[--space-xs] font--1 font-semibold cursor-pointer"
    >
      {_props.text}
    </a>
  );
}

function DropdownButton() {
  const [isOpen, setIsOpen] = createSignal(false);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div>
      <div
        class="relative"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <button class="py-[--space-2xs] px-[--space-xs] font--1 font-semibold cursor-default">
          Diensten
        </button>
        {isOpen() && (
          <div class="h-[--space-xs] w-[--space-xs] absolute bg-[#f6f9fb] -translate-x-1/2 rotate-45 left-1/2 top-full translate-y-1 rounded-sm"></div>
        )}
        {isOpen() && (
          <div class="top-full absolute -left-[1rem] pt-[--space-2xs]">
            <div class=" bg-[#f6f9fb] px-[--space-6xs] py-[--space-6xs] rounded-lg">
              <div class="bg-white p-[--space-xs] rounded-lg">
                <ul class="flex flex-col gap-[--space-2xs]">
                  <li>
                    <a
                      href="./solutions/financien"
                      class="font--1 font-semibold"
                    >
                      Financien
                    </a>
                  </li>
                  <li>
                    <a
                      href="./solutions/financien"
                      class="font--1 font-semibold"
                    >
                      Rapportages
                    </a>
                  </li>
                  <li>
                    <a
                      href="./solutions/financien"
                      class="font--1 font-semibold"
                    >
                      Voorraadbeheer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
