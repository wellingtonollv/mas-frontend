import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faChartBar, faStickyNote } from "@fortawesome/free-solid-svg-icons"
import { Container } from "./styles"

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Unidades Curriculares</p>
					<FontAwesomeIcon icon={faFile} />
				</header>
				<strong>25</strong>
			</div>

			<div>
				<header>
					<p>Atividades</p>
					<FontAwesomeIcon icon={faStickyNote} />
				</header>
                <strong>80</strong>
			</div>

			<div className="highlight-background">
				<header>
					<p>Media Geral</p>
					<FontAwesomeIcon icon={faChartBar} />
				</header>
                <strong>75</strong>
			</div>
		</Container>
	)
}
