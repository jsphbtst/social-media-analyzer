import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import theme from 'utils/theme'

const useStyles = makeStyles({
  centered: {
    textAlign: 'center'
  },
  svgGroup: {
    transform: 'translate(0,0)'
  }
})

function App() {
  const width = 1080
  const height = 720
  const ref = React.useRef(null)
  const classes = useStyles()

  useEffect(() => {
    const svg = d3.select(ref.current) // here's the React version of d3.select via refs
    const g = svg.select('g') // select the g tag in order to append the d3 elements

    g.append('circle')
      .attr('class', 'circle')
      .attr('r', 100)
      .attr('fill', theme.palette.primary.main)
      .attr('transform', `translate(${width / 2}, ${height / 2 - 250})`)
      .style('stroke-width', '5px')
      .style('stroke', 'black')
      .on('mouseover', function mouseOverEffect() {
        d3.select(this).style('opacity', '0.5').style('transition', '.3s')
      })
      .on('mouseout', function mouseOutEffect() {
        d3.select(this).style('opacity', '1').style('transition', '.3s')
      })
  }, [])

  return (
    <div className='App'>
      <Typography variant='h1' className={classes.centered}>
        Social Media Analyzer
      </Typography>
      <svg width={width} height={height} ref={ref}>
        <g className={classes.svgGroup} />
      </svg>
    </div>
  )
}

export default App
