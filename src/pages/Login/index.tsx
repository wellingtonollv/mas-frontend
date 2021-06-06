import { Background, Content, Container, FormContainer, InputContainer, Error } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faSignInAlt, faLock } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';


interface FormData {
    email: string;
    password: string;
}
export function Login() {

	const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))



	return (
		<Container>
			<Content>
				<FormContainer>
					<h2>Faça seu login</h2>
					<form onSubmit={onSubmit}>
						<InputContainer>
							<FontAwesomeIcon icon={faEnvelopeSquare} />
							<input type="email" placeholder="E-mail" 
								{...register("email", {required: true})}
							/>
						</InputContainer>

						{errors.email && <Error>O preenchimento do campo é obrigatório</Error>}

						<InputContainer>
							<FontAwesomeIcon icon={faLock} />
							<input
								type="password"
								placeholder="Senha"
								{...register("password", {required:true})}
							/>
						</InputContainer>
						{errors.password && <Error>O preenchimento do campo é obrigatório</Error>}
						<Button type="submit">Entrar</Button>
					</form>
					<Link to="/register">
						<FontAwesomeIcon icon={faSignInAlt} />
						Registrar-se
					</Link>
				</FormContainer>
			</Content>
			<Background />
		</Container>
	)
}
