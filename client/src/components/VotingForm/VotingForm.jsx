import React, { useState } from 'react';
import './VotingForm.css';

const VotingForm = () => {
  const [prompt, setPrompt] = useState('');
  const [options, setOptions] = useState([]);
  const [inputType, setInputType] = useState('radio');
  const [newOption, setNewOption] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleNewOptionChange = (e) => {
    setNewOption(e.target.value);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = options.slice();
    newOptions[index].value = event.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      setOptions([...options, { value: newOption }]);
      setNewOption('');
    }
  };

  const handleInputTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission
    console.log('Prompt:', prompt);
    console.log('Options:', options.map(option => option.value));
    console.log('Input Type:', inputType);
  };

  return (
    <form className='poppins-light txt-m' onSubmit={handleSubmit}>

      {/*** Question***/}
      <div className='input-container'>
        <textarea className='txt-area-input input-margin' placeholder='Type your question' type='text' rows='1' value={prompt} onChange={handlePromptChange}></textarea>
      </div>

      {/*** Input Type Dropdown ***/}
      <div className='input-type-dropdown'>
        <label>Type of question:</label>
        <select className='select-input' value={inputType} onChange={handleInputTypeChange}>
        <option value="radio">Single Choice</option>
        <option value="checkbox">Multiple Choice</option>
        </select>
      </div>

      {/*** Options List ***/}
      <div>
        <ul className='no-bullets'>
          {options.map((option, index) => (
            <li key={index}>
              <input className='radio-btn' type={inputType} name="options" value={option.value} disabled></input>
              {`${option.value}`}
            </li>
          ))}
        </ul>
      </div>
      
      {/*** Add Option ***/}
      <div className='input-container option-txt-input'>
        <input className='txt-input input' type="text" placeholder='Option #1' value={newOption} onChange={handleNewOptionChange}></input>
        <button className='add-option-btn' type="button" onClick={handleAddOption}>+ Add Option</button>
      </div>

      <button className='btn btn-1' type="submit"><span class='qr-code-icon material-icons md-24 white'>qr_code_2</span>Get QR Code</button>
    </form>
  );
};

export default VotingForm;