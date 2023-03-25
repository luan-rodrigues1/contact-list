import { createContext, ReactNode, useState } from "react";

interface IAccessProvidersProps {
  children: ReactNode;
}
export interface IAccessContext {
  switchButton: boolean
  setSwitchButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccessContext = createContext<IAccessContext>({} as IAccessContext);

export const AccessProvider = ({ children }: IAccessProvidersProps) => {

  const [switchButton, setSwitchButton] = useState<boolean>(true)


  return (
    <AccessContext.Provider value={{
        switchButton,
        setSwitchButton
    }}>
      {children}
    </AccessContext.Provider>
  );
}