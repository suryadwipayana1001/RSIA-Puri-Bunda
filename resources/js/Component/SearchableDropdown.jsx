import React, { useState } from 'react';
import Select from 'react-select';

function SearchableDropdown() {
    // Data yang akan ditampilkan di dropdown
    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'banana', label: 'Banana' },
        { value: 'grape', label: 'Grape' },
        { value: 'kiwi', label: 'Kiwi' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <h2>Select Fruit</h2>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true} // Mengaktifkan fitur pencarian
            />
        </div>
    );
}

export default SearchableDropdown;
