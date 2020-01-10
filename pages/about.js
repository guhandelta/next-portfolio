import { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {
    static async getInitialProps() {
        // fetch('https://api.github.com/users/guhandelta')
        //     .then(res => res.json)
        //     .then(data => console.log(data));

        const resp = await fetch('https://api.github.com/users/guhandelta');
        const data = await resp.json();

        return { user: data };
    }
    //The req for data may also be given in a componentDidMount(), but since this is server rendered app, getInitialProps()-
    //- would be a good choice, though componentDidMount() can still be used => user data will be stored in a state variable

    render() {
        const { user } = this.props;
        return (
            <Layout title="About">
                <h5>{user.name}</h5>
                <img src={user.avatar_url} alt="Something's wrong" height="200px" />
            </Layout>
        )
    }
}
