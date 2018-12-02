import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css';

const cities = [
  'Cartagena,co',
  'Palmira,co',
  'Barranquilla,co',
  'Bogotá,co',
  'London,uk',
  'California,us',
  'Madrid,es'
]

class App extends Component {
  handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`)
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid>

          <Row>
            Títle
            </Row>

          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation} />
            </Col>

            <Col xs={12} md={6}>
              <div className="detail">

              </div>
            </Col>
          </Row>

        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
