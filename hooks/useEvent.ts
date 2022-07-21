import { SyntheticEvent, useEffect } from "react";

export default function useEvent<K extends keyof WindowEventMap>(
  event: K,
  handler: (this: Window, ev: WindowEventMap[K]) => any
) {
  useEffect(() => {
    window.addEventListener(event, handler);

    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
}
