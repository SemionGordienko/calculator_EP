/* eslint-disable react/prop-types */
export default function CardsList(props) {

    const { data } = props;

    const getColorName = (a) => {
        const colors = {
            0: '1+0',
            1: '1+1',
            2: '4+0',
            3: '4+4',
            4: '4+1',
        };
        return colors[a] || 'Error';
    };
    
    return (
    <div className='CardsListMainDiv'>
        <ul className='ListMain'>
            {data.map((card, index) => (
                <li key={index} className='ListElement'>
                    <p>Цветность: {getColorName(Number(card.color))}.</p>
                    <p>Тираж: {card.circulation}.</p>
                    <p>Ламинация: {card.lamination ? "Да" : "Нет" }.</p>
                    <p>Гладкая бумага: {card.paper ? "Да" : "Нет" }.</p>
            </li>
            ))}   
        </ul>
    </div>
    )
}