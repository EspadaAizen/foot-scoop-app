import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";


export class News extends Component {
  static defaultProps = {
    q: "UEFA champions league",
    pageSize: 50,
  };
  static propTypes = {
    q: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/everything?q=${this.props.q}&language=en&apiKey=52874c1a76cf47ae82cdd4108db228c8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ loading: false });
    }
  }
  
  render() {
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          FootScoop - Top Headlines
        </h1>
        <div className="row">
          {Array.isArray(this.state.articles) &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsURL={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
           
        </div>
      </div>
      
    );
  }
  
}

export default News;
