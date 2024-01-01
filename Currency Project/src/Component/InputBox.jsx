import React,{useId} from 'react';

function InputBox({
  label, //label: Represents the label text for the input field.
  amount, // amount: Represents the amount value for the input field.
  onAmountChange, //onAmountChange: Is a function that gets executed when the amount input changes.
  onCurrencyChange, //onCurrencyChange: Is a function that gets executed when the currency selection changes.
  currencyOptions = [], //An array containing currency options to populate the dropdown.
  selectCurrency = "usd", //Represents the currently selected currency.
  amountDisable = false, //If true, disables the amount input field.
  currencyDisable = false, //If true, disables the currency dropdown.
  className = "", //Allows for additional CSS classes to be applied to the component for custom styling.
}) {

  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor='{amountInputId}'
          className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id='{amountInputId}'
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Mapping through the currencyOptions array to create <option> elements */}
          {currencyOptions.map((currency) => (
            // Add return statement and unique 'key' prop for each option
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;


