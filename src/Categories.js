import React, {Component} from 'react';

class Categories extends Component {
    state = {
        isLoading: true,
        categories: []
    };

    componentDidMount() {
        let accessToken = localStorage.getItem('access_token');
        fetch('https://api.spotify.com/v1/browse/categories', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(res => res.json()).then(
            jsonResponse => {
                console.log(jsonResponse.categories.items);
                this.setState({
                    categories: jsonResponse.categories.items,
                    isLoading: false
                })
            }
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <div className="page-title">
                        Album Categories
                    </div>
                    <p>
                        Loading...
                    </p>
                </div>
            );
        }
        return (
            <>
                <div className="page-title">
                    Album Categories
                </div>
                <ul>
                    {this.state.categories.map(category => (
                        <li key={category.id}>
                            <a href={category.href}>{category.name} </a>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default Categories;