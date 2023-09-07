export const reducer = (state , action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                contador: state.contador + 1
            }
        case "DECREMENT":
            return {
                contador: state.contador - 1 
            }
        case "ESCRIBIR":
            return {
                subtitulo: action.subtitulo
            }

        default:
           return state ;
    }
}