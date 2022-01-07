import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

function usePasswordTog (initialstate : boolean) {
    const [visible, setVisible] = useState<boolean>(initialstate);
    
}

export default usePasswordTog;