import { graphql } from "gatsby";
import React from "react";

export default (props) => {
  const { html} = props.data.markdownRemark;
  return (
          <section dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
