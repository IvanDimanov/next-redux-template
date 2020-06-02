import React, { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { PersonCard, Error } from 'components/design'
import forms from 'components/forms'
import PublicLayout from 'components/layouts/PublicLayout'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'slices/constants'
import personsSlice from 'slices/persons'

import styles from './index.module.scss'


const { PersonForm } = forms


const PersonFormPage = () => {
  const personResponse = useSelector(({ personsSlice }) => personsSlice?.person)
  const { status, errorMessage } = useSelector(({ personsSlice }) => personsSlice?.personRequest)

  const person = useMemo(() => (status === REQUEST_STATUS_ERROR ? {} : personResponse), [personResponse, status])

  const isLoading = useMemo(() => status === REQUEST_STATUS_LOADING, [status])

  const dispatch = useDispatch()
  const fetchPersonById = useCallback(({ id }) => {
    dispatch(personsSlice.actions.fetchPersonById(id))
  }, [dispatch])


  return (
    <PublicLayout>
      <h1>Person</h1>

      <PersonCard
        person={person}
        isLoading={isLoading}
      />

      <br />
      {errorMessage && <Error className={styles.Error}>{errorMessage}</Error>}

      <PersonForm
        className={styles.Form}
        onSubmit={fetchPersonById}
        isLoading={isLoading}
      />
    </PublicLayout>
  )
}


export default PersonFormPage
