import React from 'react'
import { action } from '@storybook/addon-actions'
import PersonForm from './index'


export default {
  title: 'Forms/PersonForm',
  component: PersonForm,
}


export const Default = () => (
  <PersonForm onSubmit={action('click.onSubmit')} />
)

export const Loading = () => (
  <PersonForm isLoading onSubmit={action('click.onSubmit')} />
)
