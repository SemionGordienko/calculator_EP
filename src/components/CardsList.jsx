export default function CardsList(props) {

    const { cardsData } = props;

    const data = cardsData[0]

    const getColorName = (a) => {
        if (a == 0) {
            return '1+0'
        } else if (a == 1) { 
            return '1+1'
        } else if (a == 2) { 
            return '4+0'
        } else if (a == 3) { 
            return '4+4'
        } else if (a == 4) {
            return '4+1'
        } else {
            return 'Error'
        }
    }
    
    return (
    <div className='CardsListMainDiv'>
        <ul className='ListMain'>
            <li className='ListElement'>
                <p>Цветность: {getColorName(data.color)}.</p>
                <p>Тираж: {data.circulation}.</p>
                <p>Ламинация: {data.lamination ? "Да" : "Нет" }.</p>
                <p>Гладкая бумага: {data.paper ? "Да" : "Нет" }.</p>
            </li>
        </ul>
    </div>
    )
}