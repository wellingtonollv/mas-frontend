import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Container, Error } from './styles'
import api from '../../services/api';

interface NewCourseUnitModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewCourseUnitModalData {
    name: string;
    description: string;
}

export function NewCourseUnitModal({isOpen, onRequestClose}:NewCourseUnitModalProps) {

    const { register, handleSubmit, formState: {errors} } = useForm<NewCourseUnitModalData>();
    
    const onSubmit = handleSubmit(data => api.post('/courseunit', data)
        .then(onRequestClose));

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Unidade Curricular</h2>
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
                        placeholder="Nome"
                        {...register("name")}
                    />
                    {errors.name && <Error>O prenchimento do campo é obrigatório</Error>}
                    <input 
                        type="text"
                        placeholder="Descrição"
                        {...register("description")}
                    />
                    {errors.description && <Error>O prenchimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Container>
        </Modal>
        
    )
}