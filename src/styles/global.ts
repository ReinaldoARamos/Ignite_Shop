import {globalCss} from '.'

export const GlobalStyles = globalCss({
    '*':{
        margin: 0,
        padding: 0,
    },
    
    body: {
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400
    }
})