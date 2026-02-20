import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface componyContextType {
  componyProfile: any;
  setComponyProfile: any;
  statistics: any;
  setStatistics: any;
}

const componyContext = createContext<componyContextType | undefined>(undefined);

export function ComponyDetailProvider({ children }: { children: ReactNode }) {
  const [componyProfile, setComponyProfile] = useState({});
  const [statistics, setStatistics] = useState([]);

  return (
    <componyContext.Provider value={{ componyProfile, setComponyProfile, statistics, setStatistics }}>
      {children}
    </componyContext.Provider>
  );
}

export function useComponyDetail() {
  const context = useContext(componyContext);
  if (context === undefined) {
    throw new Error("useComponyDetail must be used within a componyDetailProvider");
  }
  return context;
}
