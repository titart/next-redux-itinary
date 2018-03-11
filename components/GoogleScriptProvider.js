import { Fragment } from 'react';
import { withScriptjs } from 'react-google-maps';

const API_KEY = 'AIzaSyAmbWDDtZLseI0s7hHee51RAieFnQGrSqs';

const GoogleScriptProvider = withScriptjs(props => {
  return <Fragment>{props.children}</Fragment>;
});

GoogleScriptProvider.defaultProps = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />
};

export default GoogleScriptProvider;
