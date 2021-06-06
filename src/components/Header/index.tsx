import { Container, Content } from './styles';

interface HeaderProps {
    onOpenActivyModal: ()=> void;
    onOpenNewCourseUnit: () =>void;
}

export function Header({onOpenActivyModal, onOpenNewCourseUnit}: HeaderProps){
    return(
        <Container>
            <Content>
                <h1>My activies</h1>
                <div>
                    <button onClick={onOpenNewCourseUnit} type="button">Nova Unidade Curricular</button>
                    <button onClick={onOpenActivyModal} type="button">Nova Atividade</button>
                </div>
            </Content>
        </Container>
    )
}