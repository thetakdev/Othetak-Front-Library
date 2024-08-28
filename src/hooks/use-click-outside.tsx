import { MutableRefObject, useEffect, useState } from 'react';

type MultiRef = {
  ref1: MutableRefObject<HTMLDivElement | null>;
  ref2?: MutableRefObject<HTMLDivElement | null>;
};

const useClickOutSide = (refs: MultiRef, onFocusOut?: () => void, initialState = false) => {
  const [visible, setVisible] = useState(initialState);

  useEffect(() => {
    const checkIfClickedOutside = (e: globalThis.MouseEvent) => {
      if (refs.ref2) {
        if (
          refs.ref1.current &&
          !refs.ref1.current.contains(e.target as Node) &&
          refs?.ref2?.current &&
          !refs?.ref2.current.contains(e.target as Node)
        ) {
          setVisible(false);
          onFocusOut && onFocusOut();
        }
      } else {
        if (refs.ref1.current && !refs.ref1.current.contains(e.target as Node)) {
          setVisible(false);
          onFocusOut && onFocusOut();
        }
      }
    };

    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [visible]);

  return { visible, setVisible };
};

export default useClickOutSide;
