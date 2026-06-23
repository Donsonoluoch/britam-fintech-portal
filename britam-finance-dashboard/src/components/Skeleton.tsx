export const TransactionSkeleton = () => (
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