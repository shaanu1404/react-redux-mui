import { TextField } from "@mui/material";

interface SearchBarProps {
  search: string;
  onChange: (value: string) => void;
}

function SearchBar({ search, onChange }: SearchBarProps) {
  return (
    <div style={{ maxWidth: 300, marginTop: "1rem" }}>
      <TextField
        fullWidth
        placeholder="Search todo"
        size="small"
        type="search"
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
