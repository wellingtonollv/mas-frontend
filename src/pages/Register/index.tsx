import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faUser, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Container, Content, FormContainer, InputContainer, Error, Background } from "./styles"

import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button } from "../../components/Button"
import api from "../../services/api"

interface FormData {
	name: string
	email: string
	password: string
}

export function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	const history = useHistory()

	const onSubmit = handleSubmit((data) => api.post("/user", data).then(() => history.push("/")))

	return (
		<Container>
			<Content>
				<FormContainer>
					<h2>Faça seu cadastro</h2>
					<form onSubmit={onSubmit}>
						<InputContainer>
							<FontAwesomeIcon icon={faUser} />
							<input placeholder="Nome" {...register("name", { required: true })} type="text" />
						</InputContainer>
						{errors.name && <Error>O preenchimento deste campo é obrigatório</Error>}
						<InputContainer>
							<FontAwesomeIcon icon={faEnvelopeSquare} />
							<input placeholder="E-mail" {...register("email", { required: true })} type="email" />
						</InputContainer>
						{errors.email && <Error>O preenchimento deste campo é obrigatório</Error>}
						<InputContainer>
							<FontAwesomeIcon icon={faLock} />
							<input placeholder="Senha" {...register("password", { required: true })} type="password" />
						</InputContainer>
						{errors.password && <Error>O preenchimento deste campo é obrigatório</Error>}
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
