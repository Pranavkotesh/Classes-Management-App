import React from 'react';
import { FormControl, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorIcon from "@mui/icons-material/Error";




function AppTextInput({
  type,
  name,
  onChange,
  onBlur,
  value,
  rows,
  placeholder,
  className,
  label,
  error,
  icon,
  multiline,
  errorText,
  helperText,
 endIcon,
 mBottom,
  ...rest
}) {
 
  return (
   
    <FormControl fullWidth margin="normal" >
      {label && <Typography >{label}</Typography>}
      <TextField
        size="small"
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        error={error||errorText ? true : false}
        
        helperText={errorText||helperText}
        value={value}
        disabled={rest.disabled}
        multiline ={multiline||rows?true:false}
        rows={rows||1}
        sx={{bgcolor:'background.grid',color:'background.grid',marginBottom:mBottom,'&.selectedText':{
          bgcolor:'background.grid'
        }}}
    //     sx={{bgcolor:'background.card',
    //   '&.MuiInputBase-input':{
    //     bgcolor:'background.card'
    //   },
    // '&.MuiFormHelperText-root':{
    //   bgcolor:'background.card'
    // }}}
        
        {...rest}
        InputProps={{
          
          startAdornment:(
            <InputAdornment position="start">
                {icon}
            </InputAdornment>
          ),
          endAdornment:( 
            <InputAdornment position="end" sx={{color:'#e60000'}}>
              {errorText ? <ErrorIcon/>:" "}
                
            </InputAdornment>
            
          )}
        
        }
       
      />
    </FormControl>
    
  );
}

export default AppTextInput;


