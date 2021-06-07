import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faSignInAlt, faLock } from "@fortawesome/free-solid-svg-icons"
import { Container, Content, FormContainer, InputContainer, Error, Background } from "./styles"
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/Auth"

interface FormData {
	email: string
	password: string
}

export function Login() {
	const { signIn } = useAuth()

	const history = useHistory()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit = handleSubmit(
		async (data) =>
			await signIn({
				email: data.email,
				password: data.password,
			}).then(() => history.push("/dashboard"))
	)

	return (
		<Container>
			<Content>
				<FormContainer>
					<h2>Faça seu login</h2>
					<form onSubmit={onSubmit}>
						<InputContainer>
							<FontAwesomeIcon icon={faEnvelopeSquare} />
							<input placeholder="E-mail" {...register("email", { required: true })} type="email" />
						</InputContainer>
						{errors.email && <Error>O prenchimento do campo é obrigatório</Error>}
						<InputContainer>
							<FontAwesomeIcon icon={faLock} />
							<input placeholder="Senha" {...register("password", { required: true })} type="password" />
						</InputContainer>
						{errors.password && <Error>O prenchimento do campo é obrigatório</Error>}
						<Button type="submit">Entrar</Button>
					</form>
					<Link to="/register">
					<FontAwesomeIcon icon={faSignInAlt} />
						Cadastre sua conta
					</Link>
				</FormContainer>
			</Content>
			<Background />
		</Container>
	)
}
