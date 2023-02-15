import {useState} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
const Capital = () => {
  const [capital, setCapital] = useState('India')

  //   const newCapital = countryAndCapitalsList.find(eachObj=>{
  //       if(eachObj.capitalDisplayText === )
  //   })

  const onCapitalChange = e => {
    setCapital(e.target.value)
  }

  return (
    <div>
      <h1>Countries And Capitals</h1>
      <p>
        <span>
          <select onChange={onCapitalChange}>
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.capitalDisplayText}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
        </span>{' '}
        is capital of which country?
      </p>
      <p>{capital}</p>
    </div>
  )
}

export default Capital
