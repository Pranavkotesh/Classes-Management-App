import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EventIcon from '@mui/icons-material/Event';
import ListItemIcon from '@mui/material/ListItemIcon';





export default function BasicSelect({
  background,
  colorIn,
  marginL,
  marginR,
  icon,
  label,
  arr

}) {
  

  return (
    <Box >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:'white',fontSize:14,marginTop:-2}}>{label}</InputLabel>
        <Select
          display='inline'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          sx={{width:150,
            height:30,
            color:'white',
          fontSize:14,backgroundColor:{background},
          marginRight:{marginR},marginLeft:{marginL}
        }}
          
        >
          
          {arr.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          
        </Select>
      </FormControl>
    </Box>
  );
}
