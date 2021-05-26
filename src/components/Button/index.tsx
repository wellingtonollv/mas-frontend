import {Container} from './styles'
import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}
export function Button({children, ...rest}:ButtonProps){
    return(
        <Container type="button" {...rest}>
            {children}
        </Container>
    )
}