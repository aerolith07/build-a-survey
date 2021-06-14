import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import styled from 'styled-components';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        </Head>
        <StyledBody>
          <Main />
          <NextScript />
        </StyledBody>
      </Html>
    );
  }
}

const StyledBody = styled.body`
  font-family: 'Patrick Hand';
`;

export default MyDocument;
