import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <ul>
            {heroes.map(hero => (
                <li key={hero.id}>{hero.characters}</li>
            ))}
        </ul>
    )
}
