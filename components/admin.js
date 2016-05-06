import React, {Component} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import AppBar from 'material-ui/lib/app-bar'
import ContainerDenuncias from '../components/container-denuncias'
import ContainerDenuncia from '../components/container-denuncia'
import ContainerMap from '../components/container-map'

const style = {
  margin: 12,
}

const Admin = React.createClass({
  // los propTypes ya estan recibidos desde el component app

  handleIncrement() {
    console.log('clicked')
    this.props.onIncrement()
  },
  handleDecrement() {
    this.props.onDecrement()
  },

	render() {
		return (
		  <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <ContainerDenuncias />
        <ContainerDenuncia />
        <ContainerMap />
      </div>
		)
	}
})

export default Admin
