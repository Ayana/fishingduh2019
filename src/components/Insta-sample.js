import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
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
				transition: .2s;
				&:hover {
					margin-top: -8px;
					/* opacity: 0.7; */
				}
      }
    }
  }
`

// gatsby-source-instagram & useStaticQuery
const Insta = () => {
  const data = useStaticQuery(graphql`
    query {
			allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 12) {
				edges {
					node {
						id
						localFile {
							childImageSharp {
								fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
  `)

  return (
		<InstagramWrapper>
			<div className="instagram container-narrow">
				<div className="instagram-inner">
					{
						data.allInstaNode.edges.map((item, i) => (
							item.node.localFile ? (
								<div key={i} className="instagram-item">
									<a 
										href={`https://www.instagram.com/p/${item.node.id}`}
										target="_blank" 
										rel="noopener noreferrer" 
										className="hover"
									>
									<Image
										fluid={item.node.localFile.childImageSharp.fluid}
									/>
									</a>
								</div>
							) : (<div></div>)
						))
					}
				</div>
			</div>
		</InstagramWrapper>
  )
}

export default Insta

// gatsby-source-instagram-all & StaticQuery
const InstagramAll = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 6) {
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

export default InstagramAll
