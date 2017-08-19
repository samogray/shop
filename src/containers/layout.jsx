import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

const Layout = ({children}) => <div className="view-container">
	<Grid>
		<Row className="show-grid">
			<Col xs={12} md={3}>
				Sidebar
			</Col>
			<Col xs={12} md={9}>
				{children}
			</Col>
		</Row>
	</Grid>
</div>

export default Layout
