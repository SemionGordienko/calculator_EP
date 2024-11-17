import '../styles/cards.css'
import Prices from '../prices/Prices.json'
import { useState } from 'react'
import CardsList from './CardsList'

export default function Cards() {

    const [selectorValue, setSelectorValue] = useState('0')
    const [circulationValue, setCirculationValue] = useState('')
    const [laminationValue, setLaminationValue] = useState(false)
    const [paperValue, setPaperValue] = useState(false)
    const [resultValue, setResultValue] = useState('0')

    const handleSelectorChange = (event) => {
        setSelectorValue(event.target.value)
    }

    const handleCirculationChange = (event) => {
        setCirculationValue(event.target.value)
    }

    const handleLaminationChecked = (event) => {
        setLaminationValue(event.target.checked)
    }

    const handlePaperChecked = (event) => {
        setPaperValue(event.target.checked)
    }

    const changeResultValue = (a) => {
        setResultValue(a)
    }

    function getCirculationValue() {
        if ((circulationValue > 49 && circulationValue) < 100) {
            return 0
        } else if ((circulationValue > 99 && circulationValue < 200)) {
            return 1
        } else if ((circulationValue > 199 && circulationValue < 350)) {
            return 2
        } else if ((circulationValue > 349 && circulationValue < 500)) {
            return 3
        } else if ((circulationValue > 499 && circulationValue < 750)) {
            return 4
        } else if ((circulationValue > 749 && circulationValue < 1000)) {
            return 5
        } else if ((circulationValue > 999 && circulationValue < 2000)) {
            return 6
        } else if ((circulationValue > 1999 && circulationValue < 3000)) {
            return 7
        } else if ((circulationValue > 2999 && circulationValue < 4000)) {
            return 8
        }
    }

    function getColorPrice() {
        let colorPrice = Prices.colorPrice[selectorValue][getCirculationValue()]
        return colorPrice
    }
    function getPaperPrice() {
        return paperValue ? 1.19 : 0
    }
    function getLaminationPrice() {
        return laminationValue ? Prices.laminationPrice[getCirculationValue()] : 0
    }

    const cardsData = [{
        color: selectorValue,
        circulation: circulationValue,
        lamination: laminationValue,
        paper: paperValue
    }]

    function calculatePrice() {

        if (circulationValue <= 49) {
            changeResultValue('Need more')
        } else {
            let result = (getColorPrice()+getLaminationPrice()+getPaperPrice())*circulationValue
            changeResultValue(parseInt(result))
         }
    }

   return (
    <>
    <div className='calculator-div'>
        <h3>Расчет визиток</h3>
        <div className="selector-cmyk">
            <label htmlFor="selector">Цветность: &nbsp;</label>
                <select 
                    id="selector"
                    value={selectorValue}
                    onChange={handleSelectorChange}
                >
                    <option value="0">1+0</option>
                    <option value="1">1+1</option>
                    <option value="2">4+0</option>
                    <option value="3">4+4</option>
                    <option value="4">4+1</option>
                </select>
                    <p id="displayColor"></p>
        </div>
        <div className="selector-count">
            <label htmlFor="count">Тираж: </label>
            <input 
                type="text" 
                value={circulationValue}
                onChange={handleCirculationChange}
                placeholder='Введите кол-во'
                className='TextCirculation' 
                id='TextCirculation'/>
        </div>
        <div className="selector-param">
            <label className="checkBox">Ламинация
                <input 
                    type="checkbox" 
                    value={laminationValue}
                    onChange={handleLaminationChecked}
                    id="CheckboxVal"/>
            </label>
            <label className="checkBox">Гладкая бумагаx
                <input 
                    type="checkbox" 
                    value={paperValue}
                    onChange={handlePaperChecked}
                    id="CheckboxPaperValue"/>
            </label>
        </div>
        <div className='ResultDiv'>
            <span className='ResultSpan'>
                <button 
                    className='ResultBtn'
                    onClick={() => calculatePrice()}
                >Рассчет</button>
            </span>
            <span className='ResultSpan'>
                <p id='Result'>{resultValue}</p>    
            </span>
        </div>
    </div>
    <CardsList cardsData={cardsData}/>
    </>
   ) 
}
