import Layout from "../components/Layout/Layout";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Gallery() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRNj4thzt_6HW4JamRmT4-8c1HtlBEYsY9stBV0n3VUzIdOFB1u0PBUqR9523qhnwulY&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7eRf9X_W0xLzKMNcn2Az4DDz3UbxIHbhRnw7AEE1t9nUPWKdwKWTdL-8_-ZZVcNl0co&usqp=CAU',
        'https://i.pinimg.com/236x/7c/bf/49/7cbf49ed631a76dc5b514b9be25d5cef.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNgMpyWrZDRj4NKztNhtmrMP7_kLx-vl_aRY8cZblZyoOsJUk7t5SsQmnfKDbPwqBhxM&usqp=CAU',
        'https://i.pinimg.com/236x/cc/6c/7b/cc6c7b9aba027551a344e6cc54e8a6a3.jpg',
        'https://i.pinimg.com/474x/56/89/16/568916fac789f03858fe4218211c5637.jpg',
        'https://i.pinimg.com/236x/1c/c3/28/1cc3283fac169667c198c84291141109.jpg',
        'https://i.pinimg.com/236x/d9/43/31/d94331dd451d4d365e0e6ee7a4988488.jpg',

    ];

    return (
        <Layout>
            <div className="Adds">
                <div className="menu-main">
                    <h2>Gallery</h2>
                </div>
                <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Grid container spacing={2}>
                        {images.map((src, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Box
                                    component="img"
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: 2,
                                        boxShadow: 3,
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </Layout>
    )
}