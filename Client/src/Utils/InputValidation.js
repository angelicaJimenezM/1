//----------------
export const handleChangeText = (event, setValue) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z\s]*$/
    .test(inputValue)) {
        setValue(inputValue)
    } else {
        alert("Escriba solo letras")
        setValue('')
    }
}
export const handleChangenumber = (event, setValue) => {
    const inputValue = event.target.value;
    if (/^[0-9]+$/.test(inputValue)) {
        setValue(inputValue)
    } else {
        alert("Escriba solo numeros")
        setValue('')
    }
}