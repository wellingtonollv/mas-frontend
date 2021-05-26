import { Container } from './styles';
import { ActivyTable } from '../../components/ActivyTable'
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';

export function Dashboard(){
    return(
        <>
            <Header />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
        </>
    )
}