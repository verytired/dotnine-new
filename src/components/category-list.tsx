// src/components/category-list.js
import React from "react"

// Components
import { Link, StaticQuery, graphql } from "gatsby"

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <nav>
        <h1>カテゴリ一覧</h1>
        <ul>
          {data.allMarkdownRemark.group.map((category: any) => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${category.fieldValue}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  />
)

export default CategoryList