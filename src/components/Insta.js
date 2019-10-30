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
      }
    }
  }
`


const Insta = () => {
  const data = useStaticQuery(graphql`
    query instaQuery {
			allInstaNode {
				edges {
					node {
						id
						likes
						original
						timestamp
						caption
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
					{console.log(data)}
					{
						data.allInstaNode.edges.map((item, i) => (
							item.node.localFile ? (
								<div key={i} className="instagram-item">
									<a 
										href=""
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
