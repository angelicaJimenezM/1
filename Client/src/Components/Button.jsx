import propTypes from 'prop-types'
export const Button = (props) => {
    const {label = 'Default', style,} = props
    return (
        <button 
            type='submit'
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
            {label}
        </button>
    )
}
Button.propTypes = {
    label:propTypes.string.isRequired,
    link:propTypes.string,
    style:propTypes.object
}