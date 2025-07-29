
import { useEffect, useState } from 'react'
import { Box, Container, CssBaseline} from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity] = useState<Activity | undefined>(undefined);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/Activities')
      .then(response => setActivities(response.data))
    return () => { }
  }, [])
  const handleSelectActivity = (id : string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }
  const hanleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  return (
    <Box sx={{bgColor: '#eeeee'}}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={hanleCancelSelectActivity}
        selectedActivity={selectedActivity} />
      </Container>
    </Box>
  )
}

export default App
