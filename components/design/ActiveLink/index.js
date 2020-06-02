/**
 * Credit goes to:
 *    https://github.com/zeit/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js
 */
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children, cloneElement } from 'react'

const ActiveLink = ({
  children, activeClassName, href, ...props
}) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href} {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string.isRequired,
  href: PropTypes.string,
}

ActiveLink.defaultProps = {
  href: '',
}

export default ActiveLink
