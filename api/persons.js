import request from 'utils/request'
import getResponseError from 'utils/getResponseError'

/**
 * Alternatives to SWAPI:
 *    https://swapi.co
 *    https://swapi.dev
 *    https://swapi.py4e.com
 */
const SWAP_HOST = 'https://swapi.py4e.com'

const persons = {
  async fetchPersonById(id) {
    try {
      const { data } = await request.get(`${SWAP_HOST}/api/people/${id}`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },

  async fetchSpeciesById(id) {
    try {
      const { data } = await request.get(`${SWAP_HOST}/api/species/${id}`)
      return data
    } catch (error) {
      throw getResponseError(error)
    }
  },
}

export default persons
