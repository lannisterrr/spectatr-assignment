interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      defaultValue={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-4 border rounded-md  outline-none  text-xl"
    />
  );
};

export default SearchBar;
