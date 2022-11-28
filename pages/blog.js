import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';
import Link from 'next/link';
import { useRouter } from "next/router";

// The Blog Page Content
export default function Blog({ posts }) {
    const router = useRouter();

    return (
        <Grid container spacing={2}>
            {posts.map(post => {
                //extract slug and frontmatter
                const { slug, frontmatter } = post
                //extract frontmatter properties
                const { title, author, category, date, bannerImage, tags } = frontmatter

                //JSX for individual blog listing

                return (
                    <Grid item lg={3}>
                        <Card key={title}>
                            <CardMedia component="img" width="100%" image={bannerImage} />
                            <CardContent>
                                <Chip label={tags} color="primary" />
                                <Typography variant="h3">{author}</Typography>
                                <Typography variant="h3">{date}</Typography>
                                <Button variant="outlined" onClick={() => router.push("/posts/" + slug)} >
                                    {title}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid >
    )
}


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
            posts,
        },
    };
}