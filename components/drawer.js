// import { useState } from "react";
// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
// } from '@mui/material';
// import { FaBars } from "react-icons/fa";


// function DrawerComponent() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const handleDrawer=()=>{
//     setOpenDrawer(!openDrawer);
//   }
//   return (
//     <>
//     <div style={{ display:'flex',justifyContent:'flex-end' }}>
//     <IconButton onClick={handleDrawer}>
//         <FaBars />
//       </IconButton>
//     </div>
//       <Drawer
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         anchor='right'
//       >
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
//          <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               About Us
//             </ListItemText>
//           </ListItem>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               Our Gin
//             </ListItemText>
//           </ListItem>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               Serves
//             </ListItemText>
//           </ListItem>
//           <ListItem onClick={() => setOpenDrawer(false)}>
//             <ListItemText>
//               Contact Us
//             </ListItemText>
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// }
// export default DrawerComponent;