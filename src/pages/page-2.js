import React from 'react'
import { Link } from 'gatsby'
import socialbanner from '../images/trunqsocialbanner.png'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2! This is where we store our social banner</p>
    <img src={socialbanner}></img>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
