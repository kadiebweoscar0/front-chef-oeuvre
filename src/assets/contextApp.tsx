// ContextApp.tsx
import { createContext, useState, ReactNode, useContext } from "react";

interface User {
  ID_user: number;
  Role: string;
  email: string;
  nom: string;
  prenom: string;
  // Ajoutez d'autres propriétés nécessaires ici
}

interface ContextAppProps {
  tokenExists: boolean;
  setTokenExists: (exists: boolean) => void;
  infoUserConnect: User | null; // Utilisez 'User | null' pour initialiser à null
  setInfoUserConnect: (user: User | null) => void;
}

const ContextApp = createContext<ContextAppProps | undefined>(undefined);

export const ContextAppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tokenExists, setTokenExists] = useState(false);
  const [infoUserConnect, setInfoUserConnect] = useState<User | null>(null);

  return (
    <ContextApp.Provider
      value={{
        tokenExists,
        setTokenExists,
        infoUserConnect,
        setInfoUserConnect,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export const useContextApp = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw new Error("useContextApp must be used within a ContextAppProvider");
  }
  return context;
};

export default ContextApp;
