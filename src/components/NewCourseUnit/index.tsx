import Modal from 'react-modal';
import {useForm} from 'react-hook-form';
import {Container, Error} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

interface NewCourseUniteProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewCourseUnitedData {
    name: string;
    description: string;
}

export function NewCourseUnite({isOpen, onRequestClose}:NewCourseUniteProps){

    const {register, handleSubmit, formState:{errors}} = useForm<NewCourseUnitedData>();
    const onSubmit = handleSubmit(data=>alert(JSON.stringify(data)))

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
                        {...register("name",{required:true})}
                    />
                    {errors.name && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input
                        type="text"
                        placeholder="Descrição"
                        {...register("description",{required:true})}
                    />
                    {errors.description && <Error>O preenchimento do campo é obrigatório</Error>}
               </form>
           </Container>
        </Modal>
    )
}