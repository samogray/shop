import React from 'react'
import {connect} from 'react-redux'
import {fetchPhones} from './../actions/fetch-phones'

class Phones extends React.Component {
	componentDidMount() {
		this.props.fetchPhones()
	}
	render() {
		return <div>Phones</div>
	}
}
const mapDispatchToProps = {
	fetchPhones
}
export default connect(null, mapDispatchToProps)(Phones)
