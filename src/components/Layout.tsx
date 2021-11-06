import React from 'react'
import { connect } from 'react-redux'

import { GlobalReset } from '../globalStyle'
import { Header, ProgressBar } from '.'
import { AppState } from '../store'

interface StateProps {
  progress: number
}

interface OwnProps {
  children: React.ReactNode
}

type Props = OwnProps & StateProps

const UnconnectedLayout: React.FC<Props> = ({ progress, children }) => (
  <>
    <GlobalReset />
    <ProgressBar show={progress > 0} />
    <Header />
    <main id="content">{children}</main>
    <footer />
  </>
)

const mapState = ({ progress }: AppState) => ({ progress })

export const Layout = connect<StateProps, {}, OwnProps, AppState>(mapState)(
  UnconnectedLayout
)
