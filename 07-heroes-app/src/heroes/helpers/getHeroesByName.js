import { heroes } from "../data/heroes"

export const getHeroesByName = (heroName = '') => {

    heroName = heroName.trim().toLocaleLowerCase()

    if (heroName.length === 0) {
        return []
    }

    return heroes.filter(x => x.superhero.toLocaleLowerCase().includes(heroName))
}