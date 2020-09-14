import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location,history} = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if(location.state) {
            console.log(location.state.genres)
            return (
                <div className="detail">
                    <img src={location.state.poster} alt={location.state.title} />
                    <h3 className="detail_title">{location.state.title}</h3>
                    <h5 className="detail_year">{location.state.year}</h5>
                    <ul className="detail_genres">{location.state.genres.map((list)=>{
                        return <li>{list }</li>
                    })}</ul>
                    <p className="detail_summary">{location.state.summary}</p>
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default Detail;