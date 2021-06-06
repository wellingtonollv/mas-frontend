import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare, faUser, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Container, Content, FormContainer, InputContainer, Background, Error } from "./styles"
import { useForm } from 'react-hook-form';

interface FormData {
	name: string;
	email: string;
	password : string;

}
export function Register() {

	const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

	const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

	return (
		<Container>
			<Content>
				<FormContainer>
					<h2>Faça seu cadastro</h2>
					<form onSubmit={onSubmit}>
						<InputContainer>
							<FontAwesomeIcon icon={faUser} />
							<input type="text" placeholder="Nome" 
							{...register("name", {required: true})}
							/>
						</InputContainer>
						{errors.name && <Error>O preenchimento do campo é obrigatório</Error>}
						<InputContainer>
							<FontAwesomeIcon icon={faEnvelopeSquare} />
							<input type="email" placeholder="E-mail" 
							{...register("email", {required:true})}
							/>
						</InputContainer>
						{errors.email && <Error>O preenchimento do campo é obrigatório</Error>}
						<InputContainer>
							<FontAwesomeIcon icon={faLock} />
							<input
								type="password"
								placeholder="Senha"
								{...register("password",{required:true})}
							/>
						</InputContainer>
						{errors.password && <Error>O preenchimento do campo é obrigatório</Error>}
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
