import React from 'react'
import Layout from '@theme/Layout'

function Book() {
  return (
    <Layout title="Book">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
        Book
        </p>
      </div>
    </Layout>
  );
}

export default Book