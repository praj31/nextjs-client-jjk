import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const usePasswordToggle = () : (string | JSX.Element)[] => {
  const [visible, setVisibility] = useState<boolean>(false);
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => setVisibility((visibility) => !visibility)}
    />
  );

  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;