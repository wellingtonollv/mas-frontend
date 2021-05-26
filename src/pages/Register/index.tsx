import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faUser, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Container, Content, FormContainer, InputContainer, Background } from "./styles"

export function Register() {
	return (
		<Container>
			<Content>
				<FormContainer>
					<h2>Faça seu cadastro</h2>
					<form action="">
						<InputContainer>
							<FontAwesomeIcon icon={faUser} />
							<input type="text" placeholder="Nome" />
						</InputContainer>
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
						<Button type="submit">Cadastrar</Button>
					</form>
					<Link to="/">
						<FontAwesomeIcon icon={faArrowLeft} />
						Voltar para login
					</Link>
				</FormContainer>
			</Content>
			<Background />
		</Container>
	)
}
