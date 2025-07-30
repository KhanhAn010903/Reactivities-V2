
import { useState } from 'react'
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { activities, isPending } = useActivities();
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities?.find(x => x.id === id));
  }
  const hanleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }
  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else hanleCancelSelectActivity();
    setEditMode(true);
  }
  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgColor: '#eeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={hanleCancelSelectActivity}
            selectedActivity={selectedActivity}
            openForm={handleOpenForm}
            editMode={editMode}
            closeForm={handleFormClose}
             />
        )}
      </Container>
    </Box>
  )
}

export default App
