import React from "react";
import { Image, Button, Card, Container } from "semantic-ui-react";
import TimeAgo from "react-timeago";



class News extends React.Component {




render(){
// debugger
//   let publishedAt = new Date(this.props.news.publishedAt)

    


    return (
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={this.props.news.image_url} />
          <Card.Header>{this.props.news.title}</Card.Header>
          <Card.Meta>{this.props.news.source_name}</Card.Meta>
          <Card.Description>{this.props.news.text}</Card.Description>
          <Card.Meta>Sentiment: {this.props.news.sentiment}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green" align="center">
            <a href={this.props.news.news_url}>Read More</a>
          </Button>
          <Card.Meta>
            <TimeAgo date={this.props.news.date} />
          </Card.Meta>
        </Card.Content>
      </Card>
    );
}


}
export default News;
