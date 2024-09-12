import '../styles/cards.css'

const Result = document.getElementById('Result');
const inputText = document.getElementById('TextCirculation')

console.log(inputText)

function ColorValue() {
    const selectElement = document.getElementById("selector");
    const selectedValue = selectElement.value;

    return selectedValue;
}

const checkbox = function () {
    const checkboxValue = document.getElementById('CheckboxVal');
    return checkboxValue.checked
}

const checkboxPaper = function () {
    const checkboxPaperValue = document.getElementById('CheckboxPaperValue');
    return checkboxPaperValue.checked
}

const arrayPrice = [                  // Прайс по цветности
    [4.93, 5.74, 6.79, 10.24, 7.82],
    [4.24, 2.82, 6.31, 10.24, 6.77],
    [3.44, 4.59, 5.51, 8.04, 6,38],
    [3.21, 4.24, 4.49, 7.30, 5.41],
    [3.09, 4.08, 4.32, 6.56, 4.99],
    [2.98, 3.88, 4.08, 5.97, 4.59],
    [2.82, 3.67, 3.9, 5.51, 4.47],
    [2.4, 3.07, 3.44, 5.05, 3.99],
    [2.22, 2.82, 2.86, 4.16, 3.67]
]

const laminationPrice = [5.29, 4.89, 3.7, 3.57, 3.44, 3.3, 2.05, 2.01, 1.96];   // Прайс ламинации

const circulationArrayPrice = [0,1,2,3,4,5,6,7,8]   // Индекс тиража

const getCirculationPrice = function () {
    if (parseInt(inputText.value) > 49 && parseInt(inputText.value) < 100) {
        return 0
    } else if ((parseInt(inputText.value) > 99 && parseInt(inputText.value) < 200)) {
        return 1
    } else if ((parseInt(inputText.value) > 199 && parseInt(inputText.value) < 350)) {
        return 2
    } else if ((parseInt(inputText.value) > 349 && parseInt(inputText.value) < 500)) {
        return 3
    } else if ((parseInt(inputText.value) > 499 && parseInt(inputText.value) < 750)) {
        return 4
    } else if ((parseInt(inputText.value) > 749 && parseInt(inputText.value) < 1000)) {
        return 5
    } else if ((parseInt(inputText.value) > 999 && parseInt(inputText.value) < 2000)) {
        return 6
    } else if ((parseInt(inputText.value) > 1999 && parseInt(inputText.value) < 3000)) {
        return 7
    } else if ((parseInt(inputText.value) > 2999 && parseInt(inputText.value) < 4000)) {
        return 8
    }
}

const getResult = function (a,b,c) {
    let result = 0;
    result = result + arrayPrice[a][b] * c;
    return result
}

const submitBtn = function () {
    const color = parseInt(ColorValue()); //a
    const lamination = checkbox();  //b
    const paper = checkboxPaper();  //c
    const circulation = parseInt(inputText.value);  //d
    const CCpaper = 1.15;  //e

    var result = 0;
    if (circulation <= 49) {
        Result.innerHTML = `
        Стоимость: ${"< 50 - не рассчитываем"}
        `
    } else if ((typeof inputText.value) !== 'number') {
        Result.innerHTML = `
        Стоимость: ${"Введите число"}
        `
    } 

    if (circulation >= 50) {
        result = result + getResult(getCirculationPrice(),color,circulation)
    }

    console.log(result);
    console.log(getCirculationPrice());
    if ((paper == true) && (lamination == true)) {
        result = result + laminationPrice[getCirculationPrice()]*circulation + circulation*1.15
    } else if (paper == true) {
        result = result + circulation*CCpaper
    } else if (lamination == true) {
        result = result + laminationPrice[getCirculationPrice()]*circulation   
    }
    if (circulation > 49) {
    Result.innerHTML = `
        Стоимость: ${parseInt(result)}
        `    
    }
}

export default function Cards() {
   return (
    <div className='calculator-div'>
        <h3>Расчет визиток</h3>
        <div className="selector-cmyk">
            <label htmlFor="selector">Цветность: &nbsp;</label>
                <select id="selector">
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
            <input type="text" className='TextCirculation' id='TextCirculation'/>
        </div>
        <div className="selector-param">
            <label className="checkBox">Ламинация
                <input type="checkbox" id="CheckboxVal"/>
            </label>
            <label className="checkBox">Гладкая бумагаx
                <input type="checkbox" id="CheckboxPaperValue"/>
            </label>
        </div>
        <div className='ResultDiv'>
            <span className='ResultSpan'>
                <button className='ResultBtn' onClick={submitBtn}>Рассчет</button>
            </span>
            <span className='ResultSpan'>
                <p id='Result'>-</p>    
            </span>
        </div>
      </div>
   ) 
}