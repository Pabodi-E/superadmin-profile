import React from 'react'
import Box from '@mui/material/Box';
import {  Card, CardContent, Grid,TextField, Badge, Typography,Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';



const user = {
  avatar: "/static/images/avatars/user.jpg",
  
};

export default function Profile() {
  
  return (
    <Grid sx={{backgroundColor:"#1F6FF5"}}>
      <Box  component="form"
      sx={{p: 4}}
      noValidate
      autoComplete="off" >
        
        
        <Card>
          <CardContent>
           <Box
           sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop:5,
            paddingBottom:2
           }}>
            
           <Badge
            badgeContent={<IconButton color="primary" aria-label="upload picture" component="label">
           <input hidden accept="image/*" type="file" />
           <PhotoCamera />
         </IconButton>}
         >
            
        
           <Avatar
                  variant="outlined"
                  src={user.avatar}
                  alt="Pabodi Eranda"
                  sx={{
                    height: 140,
                    mb: 1,
                    mt: -3,
                    width: 140,
                    borderRadius: "90px",
                    borderBottom: 1,
                    borderColor: "primary.main",
                    objectFit:"contain"
                  }}
                  />
           </Badge>
              
           </Box>
            
        
            <Grid container spacing={3}>
              <Grid item md={12} xs={12} textAlign='center'>
                <Typography  variant='h4'>Edit Profile</Typography></Grid>
              <Grid item md={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="First Name"
                defaultValue="First Name"
                fullWidth
              />
              </Grid>
              <Grid item md={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                defaultValue="Last Name"
                fullWidth
              />
              </Grid>
              <Grid item md={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                fullWidth
              />
              </Grid>
              <Grid item md={6} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Mobile Number"
                defaultValue="Mobile Number"
                fullWidth
              />
              </Grid>
              <Grid item md={12} xs={12}>
              <TextField
                required
                id="outlined-required"
                label="About"
                defaultValue="About"
                fullWidth
                multiline
                rows={4}
              />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p:1 ,alignItems:"center"}}>
                
                <Button variant="outlined">Cancel</Button>
                <Button  variant="solid" sx={{backgroundColor:'#1F6FF5'}}>Save</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  )
}
