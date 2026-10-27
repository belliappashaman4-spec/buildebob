import React, { createContext, useContext, useState } from 'react';

interface OpenModalOptions {
  service?: string;
  packageTier?: string;
  budget?: string;
}

interface LeadModalContextType {
  isOpen: boolean;
  preselectedData: OpenModalOptions;
  openDemoModal: (options?: OpenModalOptions) => void;
  closeDemoModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export const LeadModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedData, setPreselectedData] = useState<OpenModalOptions>({});

  const openDemoModal = (options?: OpenModalOptions) => {
    if (options) {
      setPreselectedData(options);
    } else {
      setPreselectedData({});
    }
    setIsOpen(true);
  };

  const closeDemoModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadModalContext.Provider value={{ isOpen, preselectedData, openDemoModal, closeDemoModal }}>
      {children}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = () => {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error('useLeadModal must be used within a LeadModalProvider');
  }
  return context;
};
