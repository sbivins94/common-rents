import React, { useState } from 'react';

function DemographicForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    occupation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/renters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </div>
      <div>
        <label>Occupation:</label>
        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DemographicForm;
