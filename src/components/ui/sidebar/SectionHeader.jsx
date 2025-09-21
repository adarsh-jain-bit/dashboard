const SectionHeader = ({ title, open }) => {
  if (!open) return null;
  
  return (
    <div className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
      {title}
    </div>
  );
};

export default SectionHeader