import Modal from 'react-modal';
import { Container, Error } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {useForm} from 'react-hook-form'

interface NewActivyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData {
    courseunit: string;
    activy: string;
    date: Date;
}

export function NewActivyModal({isOpen, onRequestClose}:NewActivyModalProps){

    const {register, handleSubmit, formState: {errors}} =useForm<NewActivyModalData>()
    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Atividades</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </button>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        placeholder="Unidade Curricular" 
                        {...register("courseunit", {required: true})}
                    />
                    {errors.courseunit && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input 
                        type="text"
                        placeholder="Atividade" 
                        {...register("activy", {required: true})}
                    />
                    {errors.activy && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input 
                        type="date"
                        placeholder="Data da Atividade" 
                        {...register("date", {required: true})}
                    />
                    {errors.date && <Error>O preenchimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>

        </Modal>
    )
}