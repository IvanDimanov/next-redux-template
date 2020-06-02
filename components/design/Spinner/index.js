import React, { memo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import SpinnerIcon from 'public/images/spinner.svg'

import styles from './index.module.scss'


const Spinner = ({
 full, alt, className, size,
}) => (
  <SpinnerIcon
    alt={alt}
    width={size}
    height={size}
    className={clsx(className, styles.Spinner, full && styles.Full)}
  />
)


Spinner.propTypes = {
  full: PropTypes.bool,
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
}

Spinner.defaultProps = {
  full: false,
  alt: 'Loading ...',
  className: '',
  size: 150,
}

Spinner.displayName = 'Spinner'


export default memo(Spinner)
