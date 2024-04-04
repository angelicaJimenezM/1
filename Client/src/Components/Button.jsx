import propTypes from 'prop-types'
import {Link} from 'react-router-dom';
export const Button = (props) => {
    const {label = 'Default', style, link = '/'} = props
    return (
        <button 
            style={{
            width: '14rem',
            height: '2.9rem',
            fontSize: '16px',
            background: '#22C55E',
            color: '#fff',
            borderRadius: '10px',
            fontWeight: 'bold',
            ...style
        }}>
            <Link to = {link}>{label}</Link>
        </button>
    )
}
Button.propTypes = {
    label:propTypes.string.isRequired,
    link:propTypes.string,
    style:propTypes.object
}