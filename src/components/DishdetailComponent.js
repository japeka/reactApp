import React, {Component} from 'react';
import {Card, CardImg, CardText,CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    
    componentDidMount() {
        console.log('DishdetailComponent did mount');
    }

    componentDidUpdate() {
        console.log('DishdetailComponent did update');
    }

    renderDish(dish) {
          return (
            <Card>
              <CardImg top width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                 <CardTitle>{dish.name}</CardTitle>
                 <CardText>{dish.description}</CardText>  
              </CardBody>
            </Card>
          );
    }

    renderComments(comments) {
       if(comments.length > 0) {
            const _comments = comments.map((comment) => {
                let time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))); 
                //let time = new Date(comment.date).toUTCString(); 
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {time}
                        </li>
                   </ul>
                );
            });
            return _comments;
        } else {
            return (
                <ul></ul>
            );
        }
    }

    render() {
        console.log('DishdetailComponent did render');

        const dish = this.props.selectedDish;    
        if(dish!=null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>{dish.comments.length >  0 ? 'Comments' : '' }</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default Dishdetail;