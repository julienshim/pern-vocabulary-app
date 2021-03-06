import React, { useState, Fragment } from 'react';

const AddBulkLines = (props) => {
  const { scenarioIndex, handleAddNewContent } = props;
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const processBulkLines = (event) => {
    event.preventDefault();
    const inputArr = inputValue.split('\n').filter((input) => input);
    handleAddNewContent(scenarioIndex, inputArr);
    setInputValue('');
    setIsInputActive(false);
  };

  const handleCancelBulkLines = () => {
    setInputValue('');
    setIsInputActive(false);
  };

  return (
    <Fragment>
      <div style={{ minWidth: '400px' }}>
        <span
          className="add-lines-buttons"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            marginLeft: '96px',
            cursor: 'pointer',
            border: '2px solid var(--cadet-grey)',
          }}
          onClick={() => handleAddNewContent(scenarioIndex, null)}
          onKeyUp={() => handleAddNewContent(scenarioIndex, null)}
          role="button"
          tabIndex={0}
        >
          Add Line
        </span>
        <span
          className="add-lines-buttons"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '6px',
            border: '2px solid var(--cadet-grey)',
          }}
          onClick={() => setIsInputActive(true)}
          onKeyUp={() => setIsInputActive(true)}
          role="button"
          tabIndex={0}
        >
          Add Bulk Lines
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(30, 30, 30, 0.5)',
          display: isInputActive ? 'flex' : 'none',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            margin: '30px auto',
            padding: '5px 15px',
            minWidth: '600px',
          }}
        >
          <h3 style={{ color: 'var(--english-violet)' }}>Add Bulk Lines</h3>
          <p>
            Quickly add lots of text lines by pasting in text. Each text line
            should be on it&apos;s own line. Blank lines will be ignored.
          </p>
          <textarea
            style={{
              boxSizing: 'border-box',
              height: '150px',
              width: '100%',
              padding: '8px 15px',
            }}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <div
            style={{
              display: 'flex',
            }}
          >
            <form onSubmit={processBulkLines}>
              <input
                className="submit-button"
                style={{ cursor: 'pointer' }}
                type="submit"
                value="Add Lines"
              />
            </form>
            <div
              className="cancel-button"
              style={{
                display: 'inline-block',
                boxSizing: 'border-box',
                margin: '48px 6px',
                padding: '12px 24px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                border: '3px solid var(--dogwood-rose)',
              }}
              onClick={() => handleCancelBulkLines}
              onKeyUp={() => handleCancelBulkLines}
              role="button"
              tabIndex={0}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBulkLines;
