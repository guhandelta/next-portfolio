import { Layout } from '../components'

export default ({ statusCode }) => (

    <Layout>
        <h3>{statusCode ? `Sorry.... The requested page can't be found => Statuscode: ${statusCode}` : `Sorry.... The requested page can't be found`}</h3>
    </Layout>
);
