import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Form from "./components/Form";


function App() {
  return (
    <Container >
      <Typography variant="h3" color="primary" mb={2}>Passenger information</Typography>
      <Typography variant="subtitle1">Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</Typography>
      <Form />
    </Container>
  );
}

export default App;
