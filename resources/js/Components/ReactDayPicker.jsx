import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

const ReactDayPicker = ({ data, setData, errors }) => {
  const [selectedDate, setSelectedDate] = useState(data.DateOfMass);

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setData('DateOfMass', day.toISOString().split('T')[0]); // Format as 'YYYY-MM-DD'
  };

  return (
    <div className="mt-4">
      <InputLabel htmlFor="DateOfMass" value="Date of Mass" style={{ color: "#361f08" }} />
      <DayPicker 
        mode="single"
        selected={selectedDate}
        onDayClick={handleDayClick}
        disabledDays={{ before: new Date() }} // Disable past days
        modifiers={{
          disabled: day => day.getDay() !== 0 // Disable all days that are not Sunday
        }}
        styles={{
          day: {
            color: "white",
            backgroundColor: "#361f08",
          },
          dayDisabled: {
            color: "#b0b0b0", // Gray out non-Sunday days
          },
        }}
      />
      <InputError message={errors.DateOfMass} className="mt-2" />
    </div>
  );
};

export default ReactDayPicker;
