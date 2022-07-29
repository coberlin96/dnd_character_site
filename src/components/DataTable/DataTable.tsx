import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { useGetData } from '../../custon_hooks';
import { characterServerCalls, classesServerCalls, skillsServerCalls, statsServerCalls, subclassesServerCalls } from "../../api"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { Creation } from '../../components'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth: 130 },
  {
    field: 'name',
    headerName: 'Character Name',
    width: 150,
    editable: true,
  },
  {
    field: 'race',
    headerName: 'Race',
    width: 150,
    editable: true,
  },
  {
    field: 'stats',
    headerName: 'Abllity Scores',
    width: 110,
  },
  {
    field: 'classes',
    headerName: 'Classes',
    width: 90
  }
];

interface gridData{
  data:{
    id?:string;
    name?:string;
  }
}

export const DataTable = () => {
  let { characterData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => setOpen(true);
  let handleClose = () => setOpen(false);

  let deleteData = async () =>{
    let char = await characterServerCalls.get(`${gridData[0]}`)
    let statsId = char.stats
    let skillsId = char.skills
    let subclassId = char.subclasses
    let classesId = char.classes

    statsServerCalls.delete(statsId)
    skillsServerCalls.delete(skillsId)
    subclassesServerCalls.delete(subclassId)
    classesServerCalls.delete(classesId)
    characterServerCalls.delete(`${gridData[0]}`)
  }
  console.log(gridData) // a list of id's from the checked rows

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={characterData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={newSelectionModel =>setData(newSelectionModel)}
        {...characterData}
      />
      <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Character</DialogTitle>
          <DialogContent>
            <DialogContentText>Character id: {gridData[0]}</DialogContentText>
              <Creation id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="warning" variant='contained'>Cancel</Button>
            {/* <Button onClick={handleClose} color = "primary">Done</Button>  */}
          </DialogActions>
        </Dialog>
    </Box>
  );
}
