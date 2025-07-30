import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[];
    selectActivity: (id :string) => void;
    cancelSelectActivity : () => void;
    selectedActivity? : Activity | undefined;
    openForm : (id: string) => void;
    closeForm : () => void;
    editMode : boolean;
    submitForm : (activity : Activity) => void
    deleteActivity: (id : string) => void
}
export default function ActivityDashboard({ deleteActivity,submitForm,activities,selectedActivity,cancelSelectActivity, selectActivity,openForm,closeForm,editMode}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={activities}
                 selectActivity={selectActivity}
                 deleteActivity={deleteActivity}/>
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode &&
                <ActivityDetail activity={selectedActivity}
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}/>}
                {editMode &&
                <ActivityForm submitForm={submitForm} closeForm={closeForm} activity={selectedActivity}/>}
            </Grid2>
        </Grid2>
    )
}
