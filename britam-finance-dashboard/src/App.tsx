import { Wallet, ArrowUpRight, ArrowDownLeft, History, Search } from 'lucide-react';
import { useBank } from './context/BankContext';
import { StatCard } from './components/StatCard';
import { useState, useMemo } from 'react';

// Missing Component: The Loading Skeleton
const TransactionSkeleton = () => (
  <div className="animate-pulse p-4 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className="rounded-lg bg-gray-200 h-10 w-10"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-32"></div>
        <div className="h-3 bg-gray-100 rounded w-20"></div>
      </div>
    </div>
    <div className="h-5 bg-gray-200 rounded w-16"></div>
  </div>
);

function App() {
  const { balance, transactions, loading } = useBank();
  const [searchQuery, setSearchQuery] = useState('');

  // OPTIMIZATION: Memoize the filtered transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter(tx => 
      tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [transactions, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-blue-900 uppercase tracking-tight">Britam BetaLab Portal</h1>
        <p className="text-gray-500">Welcome back, Donson Oluoch</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Current Balance" amount={`KES ${balance.toLocaleString()}`} Icon={Wallet} color="bg-blue-600" />
        <StatCard title="Monthly Income" amount="KES 45,000" Icon={ArrowUpRight} color="bg-green-500" />
        <StatCard title="Monthly Expenses" amount="KES 12,300" Icon={ArrowDownLeft} color="bg-red-500" />
      </div>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Search & Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <History className="w-5 h-5 text-blue-900" />
              <h2 className="font-bold text-gray-800">Recent Transactions</h2>
            </div>
            <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name or category..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-100 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Transaction List */}
        <div className="divide-y divide-gray-50">
          {loading ? (
            <>
              <TransactionSkeleton />
              <TransactionSkeleton />
              <TransactionSkeleton />
            </>
          ) : (
            filteredTransactions.map((tx) => (
              <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${tx.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {tx.type === 'income' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDownLeft className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{tx.title}</p>
                    <p className="text-xs text-gray-400 uppercase font-semibold">{tx.category} • {tx.date}</p>
                  </div>
                </div>
                <p className={`font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-gray-800'}`}>
                  {tx.type === 'income' ? '+' : '-'} KES {Math.abs(tx.amount).toLocaleString()}
                </p>
              </div>
            ))
          )}
          {!loading && filteredTransactions.length === 0 && (
            <div className="p-10 text-center text-gray-400 italic">No transactions found matching your search.</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;