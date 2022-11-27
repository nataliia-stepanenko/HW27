import { useForm, Controller } from "react-hook-form";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4">Passenger 1 (Adult)</Typography>
            <Box>
                <Controller 
                control={control}
                name="First name"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField  
                        {...field} 
                        id="outlined-basic"
                        label="First name" 
                        variant="outlined" 
                        error={!!error}
                        helperText={error?.message}
                        required
                    />
                  )} 
                />
                <Controller 
                control={control} 
                name="Middle"
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Middle" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    />                
                )} 
                />
                <Controller 
                control={control} 
                name="Last name"
                rules={{ required: "The field is required" }}
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Last name" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    required
                    sx={{
                        mr: 0,
                      }}
                    />
                )} 
                />
            </Box>
            <Box>
            <Controller 
                control={control} 
                name="Suffix"
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Suffix" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    />                
                )} 
                />
            <Controller 
                control={control} 
                name="Date of birth"
                rules={{ required: "The field is required" }}
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Date of birth" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?error.message:"MM/DD/YY"}
                    required
                    type="date" 
                    InputLabelProps={{shrink: true,}}
                    sx={{
                        width: 252,
                      }}
                    />
                )} 
                />
            </Box>
            <Box>
            <Controller 
                control={control} 
                name="Email address"
                rules={{ required: "The field is required" }}
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Email address" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    required
                    sx={{
                        width: 300,
                      }}
                    />
                )} 
                />
            <Controller 
                control={control} 
                name="Phone number"
                rules={{ required: "The field is required" }}
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Phone number" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    required
                    type="tel" 
                    InputLabelProps={{shrink: true,}}
                    sx={{
                        width: 300,
                        mr: 0,
                      }}
                    />
                )} 
                />
            </Box>
            <Box mb={6}>
            <Controller 
                control={control} 
                name="Redress number"
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Redress number" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    sx={{
                        width: 300,
                      }}
                    />                
                )} 
                />
                <Controller 
                control={control} 
                name="Known traveller number"
                rules={{ required: "The field is required" }}
                render={({field, fieldState: {error}}) => (
                    <TextField  
                    {...field} 
                    id="outlined-basic" 
                    label="Known traveller number" 
                    variant="outlined" 
                    error={!!error}
                    helperText={error?.message}
                    required
                    sx={{
                        width: 300,
                        mr: 0,
                      }}
                    />
                )} 
                />
            </Box>

            <Button variant="outlined" type="submit">Save and close</Button>
        </form>
    );
};

export default Form;