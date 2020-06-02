import personsApi from 'api/persons'
import { REQUEST_STATUS_LOADED } from 'slices/constants'
import Person from './index.page'


export async function getServerSideProps({ params: { id } }) {
  const person = await personsApi.fetchPersonById(id)

  /* Fetch all the species that are related to the Person */
  const speciesIds = person.species
    .map((url) => url.match(/(\d+)\/$/))
    .filter(Boolean)
    .map((matches) => matches[1])
  const fetchedSpecies = await Promise.all(speciesIds.map(personsApi.fetchSpeciesById))

  person.fetchedSpecies = fetchedSpecies

  return {
    props: {
      personsSlice: {
        person,
        personRequest: {
          status: REQUEST_STATUS_LOADED,
          errorMessage: '',
        },
      },
    },
  }
}


export default Person
