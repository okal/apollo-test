import { ApolloClient } from 'apollo-client-preset';
import { ApolloProvider, graphql} from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import React, { Component } from 'react';

const client = new ApolloClient({
  link: new HttpLink(
    { uri: 'https://api.graph.cool/simple/v1/cjc73ahya0sdv018608td8u6c'}
  ),
  cache: new InMemoryCache()
});




const MeetupQuery = gql`
{
    allMeetups {
        name
    }
}
`

class MeetupList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.meetups.map((meetup) => {
                        return <li>{meetup.name}</li>
                    })
                }
            </ul>
        )
    }
}

const _MeetupList = graphql(MeetupQuery)(({ data }) => {
    const {loading, allMeetups} = data;
    if (loading) return <div>Loading</div>;
    return <MeetupList meetups={allMeetups}/>
})

const WrappedMeetupList = (
    <ApolloProvider client={client}>
        <_MeetupList/>
    </ApolloProvider>
)

export default WrappedMeetupList;