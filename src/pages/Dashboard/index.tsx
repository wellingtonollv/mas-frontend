import { useState } from 'react';
import { Container } from './styles';
import { ActivyTable } from '../../components/ActivyTable'
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import {NewActivyModal} from '../../components/NewActivyModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';

export function Dashboard(){

    const[NewActivyOpen, setNewActivyOpen ]=useState(false);
    const[NewCourseOpen, setNewCourseOpen ]=useState(false);

    function handleOpenActivyModal(){
        setNewActivyOpen(true);
    }

    function handleCloseActivyModal(){
        setNewActivyOpen(false);
    }

    function handleOpenCourseModal(){
        setNewCourseOpen(true);
    }

    
    function handleCloseCourseModal(){
        setNewCourseOpen(false);
    }

    return(
        <>
            <Header 
                onOpenNewCourseUnit={handleOpenCourseModal}
                onOpenActivyModal={handleOpenActivyModal}
            />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>

            <NewActivyModal
                isOpen={NewActivyOpen}
                onRequestClose={handleCloseActivyModal}
            />
            <NewCourseUnitModal 
                isOpen={NewCourseOpen}
                onRequestClose={handleCloseCourseModal}
            />
        </>
    )
}