import React from 'react'
import Layout from '@theme/Layout'

function About() {
  return (
    <Layout title="About">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
        About
        </p>
      </div>
    </Layout>
  );
}

export default About