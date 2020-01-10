import { Layout } from '../components'
import { withRouter } from 'next/router'

const Post = ({ router }) => { // the url param is replaced by router param here, to prevent the `url has been deprecated` error-
    //- while using url param
    return (
        <Layout style={{ widht: "80vw" }} title={router.query.title}>
            <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
        </Layout>
    )
}

export default withRouter(Post); //Wrapping the component with the withRouter will make the next/router prosp available on/in the component
// the url param avaialble in the props of this component is replaced with router param when wrapping this component with withRouter