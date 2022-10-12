// import React from 'react'
// import { Button, Card, CardHeader, Divider, ImageList, ImageListItem, CardMedia, Avatar } from '@mui/material'
// import Content from './layout/content/Content';
// import classnames from 'classnames';
// import Section from './layout/content/section';



// function Content2() {
//     const images = [
//         { no: 0, src: "/img9.png" },
//         { no: 1, src: "/img10.png" },
//         { no: 2, src: "/img11.png" },
//     ];
//     const images1 = [
//         { src: "/img16.png" },
//         { src: "/img15.png" },
//         { src: "/img14.png" },
//     ];
//     return (
//         <div>

//             <div style={{ marginBottom: 147 }}></div>
//             <Content title="Our Serves" />

//             <Section>
//                 <ImageList cols={3} gap={36}>
//                     {images.map((item, index) =>
//                     (
//                         <ImageListItem key={index}>
//                             <img
//                                 src={`${item.src}?w=161&fit=crop&auto=format`}
//                                 srcSet={`${item.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
//                                 alt={index}
//                                 loading="lazy"
//                                 sx={{ width: 560, height: 668, position: 'relative' }}
//                             />
//                             {/* <div className={classnames(columnFlex, classes.colDiv)}>
//                                 <div>
//                                     <h5 className={classes.txtDiv}>MAKE YOUR MIXES</h5>
//                                     <h1 className={classes.txtDivTitle}>gin &amp; ginger</h1>
//                                 </div>
//                                 <div className={classnames(classes.rowFlex, classes.horidiv)}>
//                                     <img src='/img17.png' alt="Flower" width={80} height={74} />
//                                     <div className={classes.verticalLine}></div>
//                                     <ul className='ml-8'>
//                                         <li className={classes.txtList}>SODA 250ml</li>
//                                         <li className={classes.txtList}>CHERRY BRANDY 250ml</li>
//                                         <li className={classes.txtList}>LEMON JUICE 20ml</li>
//                                         <li className={classes.txtList}>SLOE 20ml</li>
//                                         <li className={classes.txtList}>ISG 45ml</li>
//                                     </ul>
//                                 </div>
//                                 <ul className={classes.singleTXT}>
//                                     <li>4 are bottled at natural cask strength and unfettered by chill filtration. Carefully selected from</li>
//                                 </ul>
//                             </div> */}
//                         </ImageListItem>
//                     )
//                     )}
//                 </ImageList>
//             </Section>

//             <div className={classnames('columnFlex', 'colDiv')}>
//                 <div>
//                     <h5 className='txtDiv'>MAKE YOUR MIXES</h5>
//                     <h1 className='txtDivTitle'>gin &amp; ginger</h1>
//                 </div>
//                 <div className={classnames('rowFlex', 'horidiv')}>
//                     <img src='/img17.png' alt="Flower" width={80} height={74} />
//                     <div className='verticalLine'></div>
//                     <ul className='ml-8'>
//                         <li className='txtList'>SODA 250ml</li>
//                         <li className='txtList'>CHERRY BRANDY 250ml</li>
//                         <li className='txtList'>LEMON JUICE 20ml</li>
//                         <li className='txtList'>SLOE 20ml</li>
//                         <li className='txtList'>ISG 45ml</li>
//                     </ul>
//                 </div>
//                 <ul className='singleTXT'>
//                     <li>4 are bottled at natural cask strength and unfettered by chill filtration. Carefully selected from</li>
//                 </ul>
//             </div>



//             <div className='flex items-center justify-center' style={{ margin: '80px 0px' }}>
//                 <Button className='btn' style={{ textTransform: 'capitalize' }} >View All</Button>
//             </div>


//             <div className={classnames('imgHeight1', 'relative')}>
//                 <img src="/img12.png" alt='sds' className='imgHeight1' />
//                 <h1 className='imgtxt1'>Learn More</h1>
//             </div>

//             <div style={{ marginTop: 143 }}></div>
//             <Content title="#SummerStories"
//                 paragraph="Lorem ipsum dolor sit amet  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
//             />

//             <Section>
//                 <ImageList cols={3} gap={54}>
//                     {images1.map((im, index) => (
//                         <Card key={index}>
//                             <CardMedia
//                                 component="img"
//                                 image={im.src}
//                                 alt={index}
//                                 sx={{ width: 503, height: 505, }}
//                             />
//                             <CardHeader
//                                 avatar={<Avatar></Avatar>}
//                                 title="Lorem ipsum dolor"
//                                 subheader="Lorem ipsum dolor"
//                             />
//                         </Card>
//                     ))}
//                 </ImageList>
//             </Section>

//             <div style={{ marginTop: 85 }}></div>
//             <div className='flex items-center justify-center' >
//                 <Button className='btnOutlined' style={{ textTransform: 'capitalize' }} >Follow us</Button>
//             </div>
//             <div style={{ marginBottom: 147 }}></div>

//         </div>
//     )
// }

// export default Content2
