import React, { useState } from "react";

const Form: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [accepted, setAccepted] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Submitted: ${username}, ${age}, Terms: ${accepted}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleNameChange} />
      </label>

      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          checked={accepted}
          onChange={handleCheckbox}
        />
        Accept Terms
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
