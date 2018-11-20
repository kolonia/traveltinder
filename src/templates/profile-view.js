import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/layout";

export default function Template({data}){
    const profile = data.markdownRemark

    return(
        <Layout>

                <h1>{profile.frontmatter.name}</h1>

                <img
                    src={profile.frontmatter.photo}
                  />
                <h4>Age: {profile.frontmatter.age}</h4>
                
                <h4>Interests: {profile.frontmatter.interests}</h4>
                <h4>Favorite Places: {profile.frontmatter.favorite}</h4>

                <div dangerouslySetInnerHTML={{__html: profile.html }} />

                <a href={"mailto:profile.frontmatter.email"}>
                    <button class="primary-button">Send a message</button>
                </a>
        </Layout>
    )

}

export const profileQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter{
                path
                name
                age
                interests
                favorite
                email
                date
                host
                photo

            }
        }
    }
`