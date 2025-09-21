
const SectionHeader = ({ title }) => {
  return (
    <div className="px-3 py-2  dark:border-gray-700  ">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide mb-3">
        {title}
      </h3>
    </div>
  );
};


export default SectionHeader