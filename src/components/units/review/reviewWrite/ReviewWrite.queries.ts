import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      id
      title
      description
      like
      thumbnail
      createdAt
    }
  }
`;

export const FETCH_ORDER = gql`
  query fetchOrder($orderId: String!) {
    fetchOrder(orderId: $orderId) {
      id
      price
      product {
        id
        title
        price
        thumbnail
      }
    }
  }
`;

export const FETCH_CUSTOM = gql`
  query fetchCustom($productId: String!) {
    fetchCustom(productId: $productId) {
      id
      space
      enter
      esc
      rest
    }
  }
`;
