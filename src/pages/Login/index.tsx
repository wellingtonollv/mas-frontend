import { Background, Content, Container, FormContainer, InputContainer } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faSignInAlt, faLock } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Login() {
	return (
		<Container>
			<Content>
				<FormContainer>
					<h2>Faça seu login</h2>
					<form action="">
						<InputContainer>
							<FontAwesomeIcon icon={faEnvelopeSquare} />
							<input type="email" placeholder="E-mail" />
						</InputContainer>
						<InputContainer>
							<FontAwesomeIcon icon={faLock} />
							<input
								type="password"
								placeholder="Senha"
							/>
						</InputContainer>
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
