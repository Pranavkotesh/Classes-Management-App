import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import EventIcon from "@mui/icons-material/Event";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from '@mui/styles';
export default function DateSelector({label,onChange,onBlur,error,errorText,value,name, ...rest}) {
//  const today=dayjs;
//  const yesterday=dayjs().subtract(1,'day');
 const classes=useStyles()
//  const [value, setValue] = React.useState(null);
//  const [error,setError]=React.useState(false);
//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
//   const handleBlur=(newValue)=>{
//     setValue(newValue);
//   }
//   function handleErr(){
//     if (!value){
//         setError(true);
//     }else{
//         setError(false);
//     }
//   }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2}>
        
        <MobileDatePicker
          label={label}
          name={name}
          inputFormat="MM/DD/YYYY"
          InputProps={{sx:{height:40}}}
          emptyLabel="Select"
          value={value}
          onChange={onChange}
          disablePast
          renderInput={(params) =><TextField {...params} 
          className={classes.textField}
          onBlur={onBlur}
          error={error||errorText?true:false}
          helperText={errorText}
          InputProps={{startAdornment:(
            <InputAdornment position="start">
                <EventIcon/>
            </InputAdornment>
          )}}
          />}
        />
        
      </Stack>
    </LocalizationProvider>
  );
}

const useStyles=makeStyles(()=>({
    textField:{
        height:30,
        px:10
    }
}))