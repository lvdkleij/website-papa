import { createSignal, mergeProps } from "solid-js";
import { MenuIcon } from "../icons/MenuIcon/MenuIcon";

export function MenuButton(_props: { onClick?: () => void }) {
  const props = mergeProps({ onClick: () => {} }, _props);
  const [isActive, setActive] = createSignal(false);
  const onClick = () => {
    setActive(!isActive());
    props.onClick();
  };

  return (
    <button
      onClick={() => {
        onClick();
      }}
      class="@[45rem]/main:hidden px-[--space-xs] py-[--space-2xs]"
    >
      <MenuIcon isActive={isActive()} />
    </button>
  );
}
