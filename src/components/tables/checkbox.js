import { forwardRef, useRef, useEffect } from "react";

const CheckBox = forwardRef(({ data, indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <div>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </div>
  );
});

export default CheckBox;
