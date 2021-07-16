import { Link } from 'react-router-dom';

const ArtList = ( { articles, title } ) => {

  return (
    <div className="article-list">
      <h2> { title } </h2>

      { articles.map( (article) => (

        <div className="article-preview" key={ article.id }>
          <Link to={ `/articles/${article.id}` }>
            <h2> { article.title } </h2>
            <p> Written by: { article.author } </p>
          </Link>
        </div>

      ) ) }
    </div>
  );
}

export default ArtList;
