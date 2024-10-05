import React from 'react'
import { useState } from 'react'
import InputBox from './components/IndexBox.jsx'
import useCurrencyInfo from './hook/useCurrencyInfo.js'


function App() {
  const [amount , setAmout] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to , setTo] = useState('pkr');
  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = ()=>{
      setConvertedAmount(amount * currencyInfo[to]);
  }



  return (
    <div
        className="contain w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            // backgroundImage: "url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
    >   
        <div className="w-full">

            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(newAmount)=>setAmout(newAmount)}
                        />
                    </div>


                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            onAmountChange={(amount)=>setAmout(amount)}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-5" onClick={convert}>
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
