import { useEffect, useRef } from "react";

/* //////////////////////////////////////////////////
CUSTOM HOOK TO DETECT CLICK OUTSIDE A COMPONENT
(MODAL etc.)
////////////////////////////////////////////////// */
export function useOutsideClick(handler, listenCapturing = true) {
  /* 
  Handler: callback function that will be executed when a click occurs outside the referenced element
  Capturing phase (true) - event propagates DOWN the DOM tree from parent to target
  Bubbling phase (false) - event propagates UP the DOM tree from target to parent
  */

  /* Creates a ref to attach to the DOM element that we want to detect clicks outside of */
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        /* Check if the click is outside the ref element */
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      /* Event listener for click events */
      document.addEventListener("click", handleClick, listenCapturing);

      /* Cleanup function to remove the event listener when the component unmounts */
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  /* Returns the ref to be attached to the DOM element */
  return ref;
}