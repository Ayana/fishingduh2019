import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from "styled-components"

const InstagramWrapper = styled.div`
  .instagram {
    margin: 3em auto;
    .instagram-inner {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .instagram-item {
        min-width: 31%;
        margin-bottom: 2em;
      }
    }
  }
`


const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 9) {
          edges {
            node {
              link
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <InstagramWrapper>
        <div className="instagram container-narrow">
          <div className="instagram-inner">
            {
              data.allInstagramContent.edges.map((item, i) => (
                item.node.localImage ? (
                  <div key={i} className="instagram-item">
                    <a 
                      href={item.node.link}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover"
                    >
                    <Image
                      fluid={item.node.localImage.childImageSharp.fluid}
                    />
                    </a>
                  </div>
                ) : (<div></div>)
              ))
            }
          </div>
        </div>
      </InstagramWrapper>
    )}
  />
);

export default Instagram

