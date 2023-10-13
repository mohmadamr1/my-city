
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium','btn--large']

const Botton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSisze

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0]
     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSisze : SIZES[0]
     return (
        <Link to='/sing-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}> 
                {children}
            </button>
        </Link>
     )
}

export default Botton;
