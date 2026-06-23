import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for Britam's professional standard
interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  category: string;
}

interface BankContextType {
  balance: number;
  transactions: Transaction[];
  loading: boolean;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export const BankProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState(125400.50); // Hardcoded starting balance in KES
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulate a REST API Fetch (Britam JD requirement)
  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData: Transaction[] = [
        { id: '1', title: 'Britam Policy Payment', amount: -4500, date: '2026-06-20', type: 'expense', category: 'Insurance' },
        { id: '2', title: 'Dividend Payout', amount: 12000, date: '2026-06-19', type: 'income', category: 'Investment' },
        { id: '3', title: 'Supermarket', amount: -2100, date: '2026-06-18', type: 'expense', category: 'Shopping' },
      ];
      
      setTransactions(mockData);
      setLoading(false);
    };

    fetchTransactions();
  }, []);

  return (
    <BankContext.Provider value={{ balance, transactions, loading }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => {
  const context = useContext(BankContext);
  if (!context) throw new Error('useBank must be used within a BankProvider');
  return context;
};