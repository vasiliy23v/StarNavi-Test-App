import { optionStyle } from "../styles/commonStyles";
import { Mode } from "../types/modesTypes";

interface SelectProps {
  setSelectedMode: React.Dispatch<React.SetStateAction<Mode | null>>;
  modes: Mode[];
}
const Select: React.FC<SelectProps> = ({ setSelectedMode, modes }) => {
  return (
    <select
      onChange={(e) => setSelectedMode(modes[parseInt(e.target.value, 10)])}
      style={optionStyle}
    >
      <option value="">Select mode</option>
      {modes.map((mode, index) => (
        <option key={index} value={index}>
          {mode.name} - {mode.field}x{mode.field}
        </option>
      ))}
    </select>
  );
};

export default Select;
