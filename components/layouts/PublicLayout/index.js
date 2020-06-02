import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { ActiveLink } from 'components/design'

import {
  REQUEST_STATUS_LOADED,
} from 'slices/constants'

import styles from './index.module.scss'


const PublicLayout = ({ children }) => {
  const person = useSelector(({ personsSlice }) => personsSlice?.person)
  const { status } = useSelector(({ personsSlice }) => personsSlice?.personRequest)

  const isLoaded = useMemo(() => status === REQUEST_STATUS_LOADED, [status])

  return (
    <>
      <header className={styles.HeaderNavigation}>
        <ActiveLink href="/home" passHref activeClassName={styles.ActiveLink}>
          <a>Home</a>
        </ActiveLink>

        <ActiveLink href="/person" passHref activeClassName={styles.ActiveLink}>
          <a>Person</a>
        </ActiveLink>

        <ActiveLink href="/person-form" passHref activeClassName={styles.ActiveLink}>
          <a>Person Form</a>
        </ActiveLink>

        <ActiveLink href="/404" passHref activeClassName={styles.ActiveLink}>
          <a>404</a>
        </ActiveLink>

        <div>
          {isLoaded && (
            <>
              Loaded Person:
              {' '}
              <span className={styles.PersonName}>{person?.name}</span>
            </>
          )}
        </div>
      </header>

      <main className={styles.ContentWrap}>
        {children}
      </main>
    </>
  )
}


PublicLayout.propTypes = {
  children: PropTypes.node,
}

PublicLayout.defaultProps = {
  children: null,
}

export default memo(PublicLayout)
