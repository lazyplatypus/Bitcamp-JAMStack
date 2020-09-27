import React from 'react'
import { Link } from 'gatsby'

import Layout  from '../components/layout'

const IndexPage = () => {
    return (
        <Layout> 
            <h1>Quarantine Bread Company</h1>
            <h2>Daniel likes baking sourdough 🍞</h2>
            <p>Need to get some bread?  <Link to="/recipe">Get the recipe.</Link></p>
        </Layout>
    )
}

export default IndexPage