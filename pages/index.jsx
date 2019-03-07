import React from 'react'
import Head from 'next/head'
import debounce from 'lodash/debounce'
import { getDimensions } from './helpers'
import Stylesheet from './index.style'

class Home extends React.PureComponent {

  state = {}

  update = null

  componentDidMount() {
    this.update()
    window.addEventListener('resize', this.update)
    window.addEventListener('scroll', this.update)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update)
    window.removeEventListener('scroll', this.update)
  }

  update = debounce(() => {
    this.setState({ dimensions: getDimensions() })
  })

  render() {
    const { dimensions } = this.state

    return (
      <div>
        <Head>
          <title>@matchMedia.info - get device viewport dimensions</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="@matchMedia.info - get browser device viewport dimensions" />
          <meta name="description" content="matchMedia.info is a simple helper tool for web and mobile devs" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://matchmedia.info" />
          <meta property="og:title" content="@matchMedia.info - get browser device viewport dimensions" />
          <meta property="og:description" content="matchMedia.info is a simple helper tool for web and mobile devs" />
          <meta property="og:image" content="/static/ogimage.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://matchmedia.info" />
          <meta property="twitter:title" content="@matchMedia - get browser device viewport dimensions" />
          <meta property="twitter:description" content="matchMedia.info is a simple helper tool for web and mobile devs" / >
          <meta property="twitter:image" content="/static/ogimage.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <Stylesheet />
        </Head>
        <div className="container">
          <div className="page">
            {dimensions ? (
              Object.keys(dimensions).map((category) => (
                <div key={category}>
                  <h2>{category}</h2>
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                  >
                    <tbody>
                      {Object.keys(dimensions[category]).map((field) => (
                        <tr key={category + field}>
                          <td>{field}</td>
                          <td width={100} align="right">{dimensions[category][field]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : null}
            <div className="credit">
              <div className="where-credit-is-due">
                Adapted from{' '}
                <a href="https://ryanve.com/_php/airve/chromosome/request.php?request=lab/dimensions/">
                  "Device and Viewport Size In JavaScript"
                </a> by Ryan Van Etten 2012
              </div>
              Thrown together in a hurry by <a href="https://twitter.com/jimle_uk">@jimle_uk</a>
              {' '}&middot;{' '}
              <a href="https://github.com/jimleuk/matchmedia.info">Github</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home