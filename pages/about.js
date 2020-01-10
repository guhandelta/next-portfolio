import { Component } from 'react'
import Error from './_error'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {
    static async getInitialProps() {
        // fetch('https://api.github.com/users/guhandelta')
        //     .then(res => res.json)
        //     .then(data => console.log(data));

        const res = await fetch('https://api.github.com/users/guhandelta');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, statusCode };
    }
    //The req for data may also be given in a componentDidMount(), but since this is server rendered app, getInitialProps()-
    //- would be a good choice, though componentDidMount() can still be used => user data will be stored in a state variable

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title="About">
                <h3>{user.name}</h3>
                <img src={user.avatar_url} alt="Something's wrong" height="250px" />
            </Layout>
        );
    }
}
