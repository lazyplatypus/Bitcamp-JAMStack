import React from 'react'
import Layout  from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Us</h1>
            <p>We are currently working on our sourdough starter.</p>
            <p><Link to="/recipe">Want to get the recipe? Click here.</Link></p>
        </Layout>
    )
}

export default AboutPage