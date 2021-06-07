import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faChartBar, faStickyNote } from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState} from 'react';
import api from '../../services/api';
import {Container} from './styles';

interface Activy {
    id: string;
    name: string;
    grade: number;
    activity_date: Date;
}

interface CourseUnit {
    id: string;
    name: string;
    description: string;
}

export function Summary() {

    const [activies, setActivies] = useState<Activy[]>([])
    const [courseUnits, setcourseUnits] = useState<CourseUnit[]>([])

    useEffect(() => {

        api.get('/activy')
            .then(response => setActivies(response.data))
    },[])

    useEffect(() => {

        api.get('/courseunit')
            .then(response => setcourseUnits(response.data))
    },[])

    return (
        <Container>
            <div>
                <header>
                    <p>Unidades Curriculares</p>
                    <FontAwesomeIcon icon={faFile} />
                </header>
                <strong>
                    {courseUnits.length}
                </strong>
            </div>
            <div>
                <header>
                    <p>Atividades</p>
                    <FontAwesomeIcon icon={faStickyNote} />
                </header>
                <strong>
                    {activies.length}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Média Geral</p>
                    <FontAwesomeIcon icon={faChartBar} />
                </header>
                <strong>
                    {Number(activies.reduce((average,activy) => {
                       return average + Number(activy.grade)
                    },0)/activies.length).toFixed(2)}
                </strong>
            </div>
        </Container>
    )
}
